const express = require('express');
//const controller = require('../../controllers.....');
const router = express.Router();

const controller = require('../../controllers/tracks');

///////////////////////////////// /api/tracks
// @route GET /api/tracks
router.get('/', controller.trackFind); 

// @route POST /api/tracks
router.post('/', controller.trackUpload);

///////////////////////////////// /api/tracks/trackById
// @route GET /api/tracks/trackById
router.get('/:trackId', controller.trackById);

module.exports = router;



// name: { type: String, required: true },             // .name     = ??
// author: { type: String },                           // .author   = user.name
// size: { type: Number },                             // .size     = e.total
// media: {
//     result: { type: String, required: true },       // ..result  = e.target.result
//     image: { type: String },                        // ..image   = ??
//     snippet: { type: String },