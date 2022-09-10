const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    required: true,
    unique: false,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    unique: false,
    type: String,
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },
});

module.exports = mongoose.model("User", userSchema);
