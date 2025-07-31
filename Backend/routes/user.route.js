const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/userController');

// POST /sign-up route
router.post('/sign-up', [
  body('fullname.firstname')
    .isLength({ min: 3 }).withMessage("Minimum 3 characters required"),
  body('email')
    .isEmail().withMessage("Proper email required"),
  body('password')
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  body('mobileno')
    .isLength({ min: 10, max: 10 }).withMessage("Mobile number must be 10 digits")
], userController.registerUser);

// POST /login route
router.post('/login', [
  body('fullname.firstname')
    .isLength({ min: 3 }).withMessage("Minimum 3 characters required"),
  body('password')
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
], userController.loginUser); // Add this function in controller if needed

// Dummy /line route to test connection
router.get('/line', (req, res) => {
  res.send("Line route working");
});

module.exports = router;
