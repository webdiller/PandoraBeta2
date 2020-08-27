const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const mongoose = require("mongoose");
const router = express.Router();

// Load Keys
const keys = require("../../config/keys");
// Load Verify Token
const verify = require("../../utilities/verify-token");
// Load Conversation Model
const Conversation = require("../../models/Conversations");
// Load Message Model
const Message = require("../../models/Message");

let jwtUser = null;

// Token verification middleware
router.use(function (req, res, next) {
  try {
    jwtUser = jwt.verify(verify(req), keys.secretOrKey);
    next();
  } catch (err) {
    console.log(err);
    res.json({
      message: err,
    });
  }
});

// @route   GET api/chat/test
// @desc    Tests chats route
// @access  Private
router.get(
  "/test",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ message: "Test Messages Successfully!" });
  }
);

// @route   GET api/chat/conversations
// @desc    Get conversations list
// @access  Private
router.get(
  "/conversations",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let from = mongoose.Types.ObjectId(jwtUser.id);
    Conversation.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "recipients",
          foreignField: "_id",
          as: "recipientObj",
        },
      },
    ])
      .match({
        recipients: {
          $all: [
            {
              $elemMatch: {
                $eq: from,
              },
            },
          ],
        },
      })
      .project({
        "recipientObj.password": 0,
        "recipientObj.__v": 0,
        "recipientObj.date": 0,
      })
      .exec((err, conversations) => {
        if (err) {
          console.log(err);
          res.status(400).json({
            message: err,
          });
        } else {
          res.send(conversations);
        }
      });
  }
);

// @route   GET api/chat/conversations/query
// @desc    Get Messages From Conversation based on to & from
// @access  Private
router.get(
  "/conversations/query",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let user1 = mongoose.Types.ObjectId(jwtUser.id);
    let user2 = mongoose.Types.ObjectId(req.query.userId);

    Message.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "to",
          foreignField: "_id",
          as: "toObj",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "from",
          foreignField: "_id",
          as: "fromObj",
        },
      },
    ])
      .match({
        $or: [
          { $and: [{ to: user1 }, { from: user2 }] },
          { $and: [{ to: user2 }, { from: user1 }] },
        ],
      })
      .project({
        "toObj.password": 0,
        "toObj.__v": 0,
        "toObj.date": 0,
        "fromObj.password": 0,
        "fromObj.__v": 0,
        "fromObj.date": 0,
      })
      .exec((err, messages) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: "Failure",
          });
        } else {
          res.send(messages);
        }
      });
  }
);

// @route   POST api/chat
// @desc    Post Private Message
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let from = mongoose.Types.ObjectId(jwtUser.id);
    let to = mongoose.Types.ObjectId(req.body.to);

    Conversation.findOneAndUpdate(
      {
        recipients: {
          $all: [{ $elemMatch: { $eq: from } }, { $elemMatch: { $eq: to } }],
        },
      },
      {
        recipients: [jwtUser.id, req.body.to],
        lastMessage: req.body.body,
        date: Date.now(),
      },
      { upsert: true, new: true, setDefaultsOnInsert: true },
      function (err, conversation) {
        if (err) {
          console.log(err);
          res.json({
            message: err,
          });
        } else {
          let message = new Message({
            conversation: conversation._id,
            to: req.body.to,
            from: req.body.from,
            body: req.body.body,
          });

          req.io.sockets.emit("messages", req.body.body);

          message.save((err) => {
            if (err) {
              console.log(err);
              res.json(err);
            } else {
              res.end(
                JSON.stringify({
                  message: "Success",
                  converstionId: conversation._id,
                })
              );
            }
          });
        }
      }
    );
  }
);

module.exports = router;
