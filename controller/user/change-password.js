const User = require("../../model/user-model");
const bcrypt = require("bcryptjs");

const changePassword = async (args, userId) => {
  if (!userId) throw new Error("must be logged in");

  const { email, oldpassword, newpassword } = args.input;

  const user = await User.findOne({ email });

  const checkPassword = await bcrypt.compare(oldpassword, user.password);

  if (!checkPassword) throw new Error("email and password must be correct");

  const newHashPassword = await bcrypt.hash(newpassword, 11);

  await User.findByIdAndUpdate(
    userId,
    {
      password: newHashPassword,
    },
    { new: true }
  );

  return { message: "update password" };
};

module.exports = changePassword;
