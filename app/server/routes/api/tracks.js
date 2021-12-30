const express = require('express');
//const controller = require('../../controllers.....');
const router = express.Router();

const controller = require('../../controllers/tracks');

///////////////////////////////// /api/tracks
// @route GET /api/tracks
router.get('/', controller.trackFind); 

// @route POST /api/tracks
router.post('/', controller.trackUpload);

// @route GET /api/tracks/trackById
router.get('/:trackId', controller.trackById);

// @route GET /api/tracks/users/currentAuthor
router.get('/users/:currentAuthor', controller.currentAuthor);

module.exports = router;
