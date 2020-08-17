const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MessageSchema = new Schema(
  {
    text: {
      type: String,
      required: Boolean,
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: "chats",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    read: {
      type: Boolean,
      default: false,
    },
    attachments: [
      {
        type: Schema.Types.ObjectId,
        ref: "uploadfile",
      },
    ],
  },

  {
    timestamps: true,
    usePushEach: true,
  }
);

module.exports = Message = mongoose.model("messages", MessageSchema);
