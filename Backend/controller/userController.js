 const jwt = require('jsonwebtoken')
const { JsonWebTokenError } = require('jsonwebtoken');
const userModel = require('../model/user.model');
const User = require('../model/user.model');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')

// Register User
exports.registerUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  const { firstname, lastname } = req.body.fullname || {};
  const { email, password, mobileno } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await User.hashPassword(password);

    const user = new User({
      fullname: { firstname, lastname },
      email,
      password: hashedPassword,
      mobileno
    });

    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};


exports.loginUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  const { fullname, password } = req.body;

  try {
    // ✅ Fix: Use `await` and correct query key
    const user = await userModel.findOne({ "fullname.firstname": fullname.firstname });

    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    // ✅ Ensure comparePassword works (method is defined in your model correctly)
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: `${user.fullname.firstname} ${user.fullname.lastname}`,
        email: user.email,
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

  exports.changePassword = async (req, res) => {
  try {
    const userId = req.user.id; // assuming auth middleware sets req.user
    const { fullname, email, newPassword } = req.body;
    
    console.log("hii abhi")
    // Validate input
    if (fullname?.firstname || !email || !newPassword) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
      console.log("hoo2")
    // Find the user by ID
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Check if username and email match
    if (fullname.firstname !== firstname || user.email !== email) {
      return res.status(403).json({ message: 'Username or email does not match.' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    // Save the updated user
    await user.save();

    res.status(200).json({ message: 'Password changed successfully.' });
  } catch (error) {
    console.error('Change Password Error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};