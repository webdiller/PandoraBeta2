const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  lastSeen: {
    type: Date,
    default: new Date(),
  },
  role: 0,
});

module.exports = User = mongoose.model("users", UserSchema);
