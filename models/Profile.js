const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
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
