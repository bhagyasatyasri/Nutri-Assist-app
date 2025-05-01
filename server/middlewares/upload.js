const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the uploads folder exists, create it if it doesn't
const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Set the storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); // Use the correct relative path
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

// Optional: file type filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) return cb(null, true);
  cb('Error: Images only!');
};

// Create upload instance
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 } // 2MB limit
});

module.exports = upload;
