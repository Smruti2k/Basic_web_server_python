const express = require("express");
const router = express.Router();
const passport = require("passport");                                    
const Song = require("../models/Songs_model/songs");

//this function allows users to publish there own song
//this is a middleware basically something that we want to check before the req and res gets called function - passport.authenticate jwt is the default name 
router.post("/create",passport.authenticate("jwt", {session: false}), async (req,res)=>{
    //req.user gets populated because of passport.authenticate
    const{name, thumbnail, track} = req.body;
    if( !name || !thumbnail || !track)
    {
        return res
            .status(301)
            .json({err: "Insufficient Details to create song"});
    }
    const artist = req.user._id;//this gets populated beacuse of the authentication token id
    const songDetails = {name, thumbnail, track, artist};
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);

} );

//if someone is getting this error :
//  MongooseError: Model.findOne() no longer accepts a callback

//  Then go to your package.json file, and in there chenge it to 
//  "dependencies": {
//    "mongoose": "^5.13.20",
//    // other dependencies...
//  }
 
//  After that run : npm install  
//  in your terminal, after running it check the downgraded mongoose version by: npm list mongoose 
//  see if has downgraded to 5.X.X from your previous version
//  This will solve the problem...

//this next function will get all the songs published by me

router.get("/get/mysongs", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const currentUser = req.user;

        // Make sure the user is authenticated and has an _id
        if (!currentUser || !currentUser._id) {
            return res.status(401).json({ err: "User not authenticated or missing ID" });
        }

        // Get all songs for the current user
        const songs = await Song.find({ artist: currentUser._id });

        return res.status(200).json({ data: songs }); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});


module.exports = router

