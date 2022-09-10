const User = require("../../model/user-model");

const profile = async (userId) => {
  if (!userId) throw new Error("must be logged in");

  return await User.findById(userId);
};

module.exports = profile;
