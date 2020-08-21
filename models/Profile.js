const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  onlineUser: {
    type: Boolean,
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
        date: {
          type: Date,
          default: Date.now,
        },
      },
    },
  ],
  guarantor_service: {
    type: Boolean,
  },
  payment_methods: {
    visa: {
      type: Boolean,
    },
    bitcoin: {
      type: Boolean,
    },
    qiwi: {
      type: Boolean,
    },
    yandex: {
      type: Boolean,
    },
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: "cities",
    date: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
