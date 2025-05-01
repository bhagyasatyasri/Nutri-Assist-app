// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const path = require('path');
// const bodyParser = require('body-parser');
// const helmet = require('helmet');
// const rateLimit = require('express-rate-limit');
// const morgan = require('morgan');
// const fs = require('fs');
// const multer = require('multer');
// const transformationRoutes = require('./routes/transformationRoutes');
// const adminRoutes = require('./routes/adminRoutes');

// // Load environment variables from .env file
// dotenv.config();

// // Initialize app
// const app = express();

// // Middleware for security
// app.use(helmet());  // Secure HTTP headers

// // Logging middleware
// app.use(morgan('dev'));  // Log incoming requests in 'dev' format

// // Rate limiting middleware
// const limiter = rateLimit({
//   windowMs: 60 * 60 * 1000,  // 1 hour
//   max: 100,  // limit each IP to 100 requests per hour
//   message: 'Too many requests from this IP, please try again later.',
// });
// app.use(limiter);

// // Enable CORS (Cross-Origin Resource Sharing)
// app.use(cors());

// // Body parser middleware
// app.use(bodyParser.json());

// // Ensure the 'uploads' folder exists for storing files
// const uploadsDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir);
// }

// app.use('/api/transformation', transformationRoutes);
// app.use('/api', transformationRoutes);
// app.use('/api/admins', adminRoutes); 

// // Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadsDir);  // Set the destination for uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);  // Unique filename
//   }
// });

// // Filter to allow only images
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpeg|jpg|png|gif/;
//   const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = allowedTypes.test(file.mimetype);
  
//   if (extname && mimetype) return cb(null, true);  // Accept file
//   cb(new Error('Only image files are allowed!'));  // Reject file
// };

// // Multer instance with file filter and size limit
// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 2 * 1024 * 1024 } // 2MB limit
// });

// // Serve static files (like uploaded images)
// app.use('/uploads', express.static(uploadsDir));

// // Routes
// const userRoutes = require('./routes/userRoutes');
// const mealRoutes = require('./routes/mealRoutes');
// app.use('/api', userRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/meals', mealRoutes);
// const dietPlanRoutes = require('./routes/dietPlanRoutes');
// app.use('/api', dietPlanRoutes);

// app.listen(5000, () => console.log('Server running on http://localhost:5000'));

// // Example of an upload endpoint
// app.post('/api/upload', upload.single('image'), (req, res) => {
//   res.status(200).json({
//     message: 'File uploaded successfully',
//     file: req.file
//   });
// });

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch((err) => console.error('❌ MongoDB connection failed', err));

// // Custom error handling middleware
// app.use((err, req, res, next) => {
//   if (err instanceof multer.MulterError) {
//     return res.status(400).json({ message: err.message });
//   }
//   if (err.name === 'ValidationError') {
//     return res.status(400).json({ message: err.message });
//   }
//   console.error(err.stack);
//   res.status(500).send({ message: 'Something went wrong!' });
// });

// // Health check endpoint
// app.get('/health', (req, res) => res.status(200).send('Server is healthy'));

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const fs = require('fs');
const transformationRoutes = require('./routes/transformationRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Load environment variables from .env file
dotenv.config();

// Initialize app
const app = express();

// Middleware for security
app.use(helmet());  // Secure HTTP headers

// Logging middleware
app.use(morgan('dev'));  // Log incoming requests in 'dev' format

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,  // 1 hour
  max: 100,  // limit each IP to 100 requests per hour
  message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// Ensure the 'uploads' folder exists (optional if you don't need uploads anymore)
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve static files (optional: only needed if you still want to serve static content)
app.use('/uploads', express.static(uploadsDir));

// Routes
const userRoutes = require('./routes/userRoutes');
const mealRoutes = require('./routes/mealRoutes');
const dietPlanRoutes = require('./routes/dietPlanRoutes');

app.use('/api/transformation', transformationRoutes);
app.use('/api', transformationRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api', userRoutes);
app.use('/api/users', userRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api', dietPlanRoutes);

// Health check endpoint
app.get('/health', (req, res) => res.status(200).send('Server is healthy'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection failed', err));

// Custom error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
