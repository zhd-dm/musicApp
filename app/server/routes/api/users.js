const express = require('express');
const router = express.Router();

const controller = require('../../controllers/auth');

const User = require('../../models/User');

///////////////////////////////// /api/auth
// @route GET /api/auth/login
router.get('/login', controller.userLogin);

// @route POST /api/auth/register
router.post('/register', controller.userRegister);

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