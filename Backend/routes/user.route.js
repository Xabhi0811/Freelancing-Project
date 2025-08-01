const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/userController');
const {authUser} = require('../middleware/auth.middleware')

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

router.post('/login', [
 body('fullname.firstname'),
    body('password').isLength({ min: 6 }).withMessage('password must be 6 digit')
], userController.loginUser); // Add this function in controller if needed


router.post('/change-password',authUser,userController.changePassword);
  
module.exports = router;  