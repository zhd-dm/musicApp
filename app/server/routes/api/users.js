const express = require('express');
const router = express.Router();

const User = require('../../models/User');

///////////////////////////////// /api/users
// @route GET /api/users
// @desc get current users
// @access get Public

router.get('/', (req, res) => {
    var login = 'zhddm';
    User.find({ login: login }, 'name login avatar dateRegistration')
        .then(currentUser => res.json(currentUser))
        //Person.findOne({ 'name.last': 'Ghost' }, 'name occupation'
});

// @route POST /api/users
// @desc add new user
// @access get Public

router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
        avatar: req.body.avatar
    });

    newUser.save().then(user => res.json(user));
});

///////////////////////////////// /api/tracks/trackById
// @route GET /api/tracks/trackById
// @desc get music track id
// @access get Public

// var trackId = '61b26abe40252285bbd418e6';

// router.get(`/${trackId}`, (req, res) => {
//     Track.findById(trackId)
//         .then(trackById => res.json(trackById))
//         //.then(trackById => res.json(trackById));
// });

module.exports = router;

// name: { type: String, required: true },             // .name     = ??
// author: { type: String },                           // .author   = user.name
// size: { type: Number },                             // .size     = e.total
// media: {
//     result: { type: String, required: true },       // ..result  = e.target.result
//     image: { type: String },                        // ..image   = ??
//     snippet: { type: String },