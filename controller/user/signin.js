const User = require("../../model/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../../config/secret-key");

const login = async (args) => {
  const { email, password } = args.input;
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("user doesnot exist");
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    throw new Error("email and password doesnot exist");
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET);

  return { token };
};

module.exports = login;
