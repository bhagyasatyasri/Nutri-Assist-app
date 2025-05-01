const jwt = require('jsonwebtoken');

// Verify admin token
const verifyAdminToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;  // Attach admin info to the request
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = { verifyAdminToken };
