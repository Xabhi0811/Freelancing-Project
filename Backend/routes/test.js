exports.changeUser = async (req, res) => {
  const userId = req.user.id; // comes from auth middleware
  const { firstname, email, newPassword } = req.body;

  try {
    if (!firstname || !email || !newPassword) {
      return res.status(400).json({ msg: 'All fields are required.' });
    }

    // 🔍 Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: 'User not found.' });
    }

    // ✅ Check if firstname and email match
    if (
      user.fullname.firstname !== firstname ||
      user.email !== email
    ) {
      return res.status(403).json({ msg: 'Name or email does not match.' });
    }

    // 🔐 Hash the new password
    const hashedPassword = await User.hashPassword(newPassword);
    user.password = hashedPassword;

    await user.save();

    res.status(200).json({ msg: 'Password changed successfully.' });
  } catch (err) {
    console.error('Password Change Error:', err);
    res.status(500).json({ msg: 'Internal server error.' });
  }
};























































const jwt = require('jsonwebtoken');

exports.authUser = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'Unauthorized: No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // `id` will be available
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Invalid token' });
  }
};
