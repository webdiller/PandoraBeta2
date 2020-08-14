const mongoose = require("mongoose");
const { text } = require("body-parser");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  onlineUser: {
    type: String,
  },
  handle: {
    type: String,
    required: true,
    max: 40,
  },
  services: [
    {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
        min: 30,
      },
      categories: {
        type: [String],
        required: true,
        subcategory: {
          type: [String],
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    },
  ],
  guarantor_service: {
    type: String,
  },
  payment_methods: {
    visa: {
      type: String,
    },
    bitcoin: {
      type: String,
    },
    qiwi: {
      type: String,
    },
    yandex: {
      type: String,
    },
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
