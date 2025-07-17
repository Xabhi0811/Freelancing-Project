const express = require('express');
const router = express.Router();
const { body } = require("express-validator");

const userController = require('../controllers/user.controller');
const { authUser } = require('../middlewares/auth.middleware');

// ✅ Register route
router.post('/register', [
    body('fullname.firstname')
        .isLength({ min: 3 })
        .withMessage('First name must be at least 3 characters'),
    
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),
], userController.registerUser);

// ✅ Login route
router.post(
  '/login',
  [
    body('password').isLength({ min: 6 }).withMessage('password must be 6 digit')
  ],
  userController.loginUser
);

// ✅ Fix profile route: use actual function
router.get('/profile', authUser, userController.getUserProfile);

// ✅ Logout route
router.post('/logout', authUser, userController.logoutUser);

module.exports = router;
