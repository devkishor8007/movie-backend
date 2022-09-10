const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    required: true,
    unique: true,
    type: String,
  },
  desc: {
    required: false,
    unique: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Movie", movieSchema);
