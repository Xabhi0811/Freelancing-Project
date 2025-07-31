 const jwt = require('jsonwebtoken')
const { JsonWebTokenError } = require('jsonwebtoken');
const userModel = require('../model/user.model');
const User = require('../model/user.model');
const { validationResult } = require('express-validator');

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

    await newUser.save();
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