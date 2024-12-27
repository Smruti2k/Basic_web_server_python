//all the functions which needs to be callled multiple times would be defined here and we can call them from here only
const jwt = require("jsonwebtoken");

exports = {};

exports.getToken = async (email, user) => {
  const token = jwt.sign({ identifier: user._id }, process.env.SECRETKEY);
  return token;
};

module.exports = exports;
