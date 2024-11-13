const mongoose = require("mongoose");
//3 step
//require mongoose
//create a mongoose schemaof user
//create a model

const Songs = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    thumbnail:
    {
        type:String,//its used as an url
        required: true,
    },
    track:
    {
        type: String,//a url
        required: true,
    },
    artist:
    {
        type: mongoose.Types.ObjectId, //search the user ID of the Artist as the type is objectID after its created 
        ref: "user",//from the file it would take reference from is user do GET
    } 
});

const songsModel =mongoose.model("Songs",Songs);//name of DB in first argument and name of schema in second argument

module.exports = songsModel;
