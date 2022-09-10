const User = require("../../model/user-model");
const bcrypt = require("bcryptjs");

const register = async (args) => {
  const { username, email, password } = args.input;

  const user = await User.findOne({ email });

  if (user) {
    throw new Error("already register");
  }

  const hashPassword = await bcrypt.hash(password, 11);
  return await User.create({
    username,
    email,
    password: hashPassword,
  });
};

module.exports = register;
