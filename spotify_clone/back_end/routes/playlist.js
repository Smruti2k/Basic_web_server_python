const express = require("express");
const router = express.Router();
const passport = require("passport");
const Playlist = require("../models/playlist_model/playlist");
const User = require("../models/user_model/user");
const Song = require("../models/Songs_model/songs");

//route1 : create a playlist\
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;
    if (!name || !thumbnail || !songs) {
      return res
        .status(301)
        .json({ err: "Data not found or insufficient data" });
    }
    const playListData = {
      name,
      thumbnail,
      songs,
      owner: currentUser._id,
      collaborators: [],
    };
    const playlist = await Playlist.create(playListData);

    return res.status(200).json({ data: playlist });
  }
);

//Route2 Get a playlist by ID
//we will get the playlist ID as the route parameter and we will return the playlist having same ID
// ./something/something2/something this should be exact match otherwise it will not work
//but the :playlist is a variable then we can assign any value and thus this api is called
//if you called /playlist/get/anything and the anything is the varibale which contains the value now
router.get(
  "/get/playlist/:getPlaylistID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    //this concept is called req.params.palylistID(varibale)
    const playlistId = req.params.getPlaylistID; //this is how we get the values of thing we want to search in a get request
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
      return res.status(301).json({ err: "Invalid ID" });
    }
    return res.status(200).json(playlist);
  }
);

//get all playlist made by me

router.get(
  "/get/me",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    //this is the owner who made their playlist

    const artistId = req.user._id;

    const playlist = await Playlist.find({ owner: artistId }).populate("owner");

    //or else the artist has not made any playlist of its own
    return res.status(200).json({ data: playlist });
  }
);

//get all playlist made by an artist eg: all songs added by diljit to its playlist
router.get(
  "/get/artist/:artistID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    //this is the owner who made theeir playlist

    const artistId = req.params.artistID;

    //we can do two things for error handeling like if the artistID does not exist
    const artist = await User.findOne({ _id: artistId });
    if (!artist) {
      return res.status(304).json({ err: "Invalid artist Id" });
    }
    const playlist = await Playlist.find({ owner: artistId });

    //or else the artist has not made any playlist of its own
    return res.status(200).json({ data: playlist });
  }
);

//add a song to the playlist

router.post(
  "/add/song",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const { playlistId, songId } = req.body;
    // Step 0: Get the playlist if valid
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
      return res.status(304).json({ err: "Playlist does not exist" });
    }

    // Step 1: Check if currentUser owns the playlist or is a collaborator
    if (
      !playlist.owner.equals(currentUser._id) &&
      !playlist.collaborators.includes(currentUser._id)
    ) {
      return res.status(400).json({ err: "Not allowed" });
    }
    // Step 2: Check if the song is a valid song
    const song = await Song.findOne({ _id: songId });
    if (!song) {
      return res.status(304).json({ err: "Song does not exist" });
    }

    // Step 3: We can now simply add the song to the playlist
    playlist.songs.push(songId);
    //push to DB
    await playlist.save();

    return res.status(200).json(playlist);
  }
);

module.exports = router;
