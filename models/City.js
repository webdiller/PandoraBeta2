const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = Schema(
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

module.exports = City = mongoose.model("cities", CitySchema);
