const express = require('express');
const router = express.Router();

const Track = require('../../models/Track');

// @route GET /api/tracks
// @desc get all music tracks
// @access get Public

router.get('/', (req, res) => {
    Track.find()
        .sort({ date: -1 })
        .then(uploadTracks => res.json(uploadTracks))
});

// @route POST /api/tracks
// @desc add music tracks
// @access get Public

router.post('/', (req, res) => {
    const newTrack = new Track({
        name: req.body.name,
        author: req.body.author,
        size: req.body.size,
        media: req.body.media
    });

    newTrack.save().then(track => res.json(track));
});

module.exports = router;



// name: { type: String, required: true },             // .name     = ??
// author: { type: String },                           // .author   = user.name
// size: { type: Number },                             // .size     = e.total
// media: {
//     result: { type: String, required: true },       // ..result  = e.target.result
//     image: { type: String },                        // ..image   = ??
//     snippet: { type: String },