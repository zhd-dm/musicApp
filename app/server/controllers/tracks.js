const Track = require('../models/Track');

// GET All tracks (music-list page)
module.exports.trackFind = function(req, res) {
    Track.find()
        .sort({ date: -1 })
        .then(uploadTracks => res.json(uploadTracks))
};

// POST Upload track
module.exports.trackUpload = function(req, res) {
    const newTrack = new Track({
        name: req.body.name,
        author: req.body.author,
        size: req.body.size,
        media: req.body.media,
        // whoHaveAccess: req.body.access
    });

    newTrack.save().then(track => res.json(track));
};

// GET Current track (music-detail page)
module.exports.trackById = function(req, res) {
    var trackId = req.params.trackId;
    Track.findById(trackId)
        .then(trackId => res.json([trackId]))
};

// PATCH Current track (edit-page)
// module.exports.trackById = function(req, res) {
//     var trackId = req.params.trackId;
//     Track.findById(trackId)
//         .then(trackId => res.json([trackId]))
// };