const express = require("express");
// const socket = require('socket.io');

const Chat = require("../../models/Chat");
const Message = require("../../models/Message");

class ChatController {
  constructor(io) {
    this.io = io;
  }

  index = (req, res) => {
    const userId = req.user._id;

    Chat.find()
      .or([{ author: userId }, { partner: userId }])
      .populate(["author", "partner"])
      .populate({
        path: "lastMessage",
        populate: {
          path: "user",
        },
      })
      .exec(function (err, dialogs) {
        if (err) {
          return res.status(404).json({
            message: "Dialogs not found",
          });
        }
        return res.json(dialogs);
      });
  };

  create = (req, res) => {
    const { user } = req.body;
    const postData = {
      author: req.user._id,
      partner: req.body.partner,
      managers: req.body.managers,
    };

    Chat.findOne(
      {
        author: req.user._id,
        partner: req.body.partner,
        managers: req.body.managers,
      },
      (err, dialog) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: err,
          });
        }
        if (dialog) {
          return res.status(403).json({
            status: "error",
            message: "Такой диалог уже есть",
          });
        } else {
          const dialog = new Chat(postData);

          dialog
            .save()
            .then((dialogObj) => {
              const message = new Message({
                text: req.body.text,
                user: req.user._id,
                dialog: dialogObj._id,
              });

              message
                .save()
                .then(() => {
                  dialogObj.lastMessage = message._id;
                  dialogObj.save().then(() => {
                    res.json(dialogObj);
                    this.io.emit("SERVER:DIALOG_CREATED", {
                      ...postData,
                      dialog: dialogObj,
                    });
                  });
                })
                .catch((reason) => {
                  res.json(reason);
                });
            })
            .catch((err) => {
              res.json({
                status: "error",
                message: err,
              });
            });
        }
      }
    );
  };

  delete = (req, res) => {
    const id = req.params.id;
    Chat.findOneAndRemove({ _id: id })
      .then((dialog) => {
        if (dialog) {
          res.json({
            message: `Dialog deleted`,
          });
        }
      })
      .catch(() => {
        res.json({
          message: `Dialog not found`,
        });
      });
  };
}

module.exports = ChatController;
