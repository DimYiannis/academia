const express = require('express');
const router = express.Router();
const {
    authenticateUser,
    
} = require('../middleware/authentication')

const {
    getAllPosts,
} = require('../controllers/postsContoller')

router
.route('/')
.get(authenticateUser,getAllPosts);

module.exports = router;
