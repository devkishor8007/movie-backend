const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config/secret-key");

const context = ({ req }) => {
  const { authorization } = req.headers;

  if (authorization) {
    const { userId } = jwt.verify(authorization, JWT_SECRET);
    return { userId };
  }
};

module.exports = context;
