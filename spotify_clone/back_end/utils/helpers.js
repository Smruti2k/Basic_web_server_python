//all the functions which needs to be callled multiple times would be defined here and we can call them from here only
const jwt = require("jsonwebtoken");
const userModel = require("../models/user_model/user");//without the referencing this code will not work
exports = {}

exports.getToken = async () => {
    const token = jwt.sign({identifier : userModel._id}, process.env.SECRETKEY);
    return token;

};

module.exports = exports