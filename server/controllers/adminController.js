// controllers/adminController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// Admin login controller
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the admin exists in the database
    const adminUser = await Admin.findOne({ email });
    if (!adminUser) {
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }

    // Compare the entered password with the stored hash
    const isPasswordMatch = await bcrypt.compare(password, adminUser.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ success: false, message: 'Invalid password' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: adminUser._id, name: adminUser.name, email: adminUser.email },
      process.env.JWT_SECRET, // Make sure you have this secret in your .env file
      { expiresIn: '30d' }
    );

    // Respond with the success message and token
    res.status(200).json({
      success: true,
      message: 'Admin login successful',
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { loginAdmin };
