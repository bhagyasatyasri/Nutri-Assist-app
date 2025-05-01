const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// Admin Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Simple password match (for now, plaintext comparison)
    if (admin.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Success response (you can also return a token if needed)
    res.status(200).json({
      message: 'Login successful',
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
