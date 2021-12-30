const express = require('express');
const router = express.Router();

const controller = require('../../controllers/auth');

///////////////////////////////// /api/auth
// @routwe GET /api/auth
router.get('/', controller.getAuthors);

// @route POST /api/auth/login
router.post('/login', controller.userLogin);

// @route POST /api/auth/register
router.post('/register', controller.userRegister);

module.exports = router;
