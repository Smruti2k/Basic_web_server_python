const mongoose = require("mongoose");
//3 step
//require mongoose
//create a mongoose schemaof user
//create a model

const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    private: true,
  },
  likedSongs: {
    type: String,
    default: "",
  },
  likedPlayList: {
    type: String,
    default: "",
  },
  subscribedArtisit: {
    type: String,
    default: "",
  },
});

const userModel = mongoose.model("User", User); //name of DB in first argument and name of schema in second argument

module.exports = userModel;
