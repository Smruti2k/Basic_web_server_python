const mongoose = require("mongoose");
const user=require("../user_model/user");
const songs = require("../Songs_model/songs");
//3 step
//require mongoose
//create a mongoose schemaof user
//create a model

const playlist = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    thumbnail:
    {
        type:String,//its used as an url
        required: true,
    },
    owner:
    {
        type: mongoose.Types.ObjectId, //search the user ID of the Artist as the type is objectID after its created 
        ref: "User",//from the file it would take reference from is user do GET
    },
    //1.all the songs in playlist
    //2.playlist collaboraters
    songs:
    [
        {
            type: mongoose.Types.ObjectId,
            ref: "Songs",

        }
    ],
    collaborators:
    [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        }
    ],
});

const playlistModel =mongoose.model("playlist",playlist);//name of DB in first argument and name of schema in second argument

module.exports = playlistModel;
