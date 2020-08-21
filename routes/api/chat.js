const express = require("express");
const router = express.Router();
const passport = require("passport");

// Connect Models
const { Chat, validate } = require("../../models/Chat");
const User = require("../../models/User");

// @route   GET api/chats/test
// @desc    Tests chats route
// @access  Public
router.get("/test", async (req, res) => {
  res.status(200).json({
    message: "Test chat route successfully!",
  });
});

// @route   PUT api/chats
// @desc    Get Active User
// @access  Private
router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const chats = await Chat.find(req.body);

    res.send(chats);
  }
);

// @route   GET api/chats/:channel
// @desc    Get Channel
// @access  Private
router.get(
  "/:channel",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { channel } = req.params;
    const limit = Number(req.query.limit);

    let chats = await Chat.find({ channel }).sort({ _id: 1 });

    chats = chats.splice(-limit);

    res.send(chats);
  }
);

// @route   GET api/chats/privateChannels/:pbkHash
// @desc    Get Private Channels
// @access  Private
router.get(
  "/privateChannels/:pbkHash",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { pbkHash } = req.params;

    let chats = await Chat.find({
      $or: [{ recieverPbkHash: pbkHash }, { senderPbkHash: pbkHash }],
    }).sort({
      _id: 1,
    });

    const channels = {};
    const privateChannels = [];

    for (chat of chats) {
      if (!channels[chat.channel]) {
        const channel = chat.channel;
        const chats = await Chat.find({ channel }).sort({ _id: 1 });
        const mostRecentChat = chats[0];

        let seen = undefined;
        let chatmate = undefined;

        const { senderPbkHash, recieverPbkHash } = mostRecentChat;
        if (senderPbkHash === pbkHash) {
          seen = true;
          chatmate = await User.findOne({ pbkHash: recieverPbkHash });
        } else if (recieverPbkHash === pbkHash) {
          seen = mostRecentChat.seen;
          chatmate = await User.findOne({ pbkHash: senderPbkHash });
        } else {
          console.log("Something Wrong Happened");
          return res.status(400).send("Something nad happened");
        }

        privateChannels.push({ channel, seen, chatmate });

        channels[chat.channel] = true;
      }
    }

    res.send(privateChannels);
  }
);

// @route   PUT api/chats/seen/:id
// @desc    PUT Chat
// @access  Private
router.put(
  "/seen/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const chat = await Chat.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { seen: true } }
    );

    res.send(chat);
  }
);

// @route   POST api/chats
// @desc    Create Chat
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send(error);
    }

    let chat = new Chat(req.body);
    chat = await chat.save();

    const { channel } = chat;
    deleteChatsOnChannel(channel);

    res.send(chat);
  }
);

async function deleteChatsOnChannel(channel) {
  const chats = await Chat.find({ channel }).sort({ _id: 1 });
  const limit = channel === "global" ? 100 : 10;
  chat.splice(-limit);
  for (chat of chats) {
    await Chat.findByIdAndDelete(chat._id);
  }

  console.log("DeleteChatsOnChannel: " + channel);
}

module.exports = router;
