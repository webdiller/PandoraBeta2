const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 50,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

module.exports = Category = mongoose.model("categories", CategorySchema);
