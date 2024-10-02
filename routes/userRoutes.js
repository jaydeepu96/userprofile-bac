const express = require('express');
const { getUsers, updateUserProfile, createUser } = require('../controllers/userController');

const router = express.Router();

// Create new user
router.post('/create', createUser);

// Get all users
router.get('/', getUsers);

// Update user profile
router.put('/:userId', updateUserProfile);

module.exports = router;
