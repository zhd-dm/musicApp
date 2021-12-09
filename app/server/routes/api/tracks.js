const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

// @route GET /api/tracks
// @desc get all music tracks
// @access get Public

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route POST /api/tracks
// @desc add music tracks
// @access get Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        track: req.body.track
    });

    newItem.save().then(item => res.json(item));
});

module.exports = router;