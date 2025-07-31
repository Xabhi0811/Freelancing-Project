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

    const newUser = new User({
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

// Optional: Placeholder for login functionality
exports.loginUser = (req, res) => {
  res.send("Login functionality not implemented yet.");
};
