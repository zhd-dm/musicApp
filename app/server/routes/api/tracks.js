const express = require('express');
const router = express.Router();

const Track = require('../../models/Track');

///////////////////////////////// /api/tracks
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

///////////////////////////////// /api/tracks/trackById
// @route GET /api/tracks/trackById
// @desc get current music track
// @access get Public

var trackId = '61b26fa9dcbc18f2d9111ea9';

router.get(`/${trackId}`, (req, res) => {
    Track.findById(trackId)
        .then(trackById => res.json([trackById]))
        //.then(trackById => res.json(trackById));
});

module.exports = router;



// name: { type: String, required: true },             // .name     = ??
// author: { type: String },                           // .author   = user.name
// size: { type: Number },                             // .size     = e.total
// media: {
//     result: { type: String, required: true },       // ..result  = e.target.result
//     image: { type: String },                        // ..image   = ??
//     snippet: { type: String },