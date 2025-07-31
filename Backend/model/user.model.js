const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, 'First name must be at least 3 characters']
    },
    lastname: {
      type: String,
      minlength: [3, 'Last name must be at least 3 characters']
    }
  },
  mobileno: {
    type: Number,
    required: true,
    minlength: [10, 'Mobile number must be 10 digits']
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters']
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// 🔧 FIXED METHOD NAMES
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

module.exports = mongoose.model('User', userSchema);
