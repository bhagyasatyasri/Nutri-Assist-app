// const express = require('express');
// const router = express.Router();
// const {
//   saveTransformation,
//   getTransformation
// } = require('../controllers/transformationController');

// // @route   POST /api/transformation/save
// // @desc    Save transformation details for a user
// // @access  Public or Protected (add auth middleware if needed)
// router.post('/save', saveTransformation);

// // @route   GET /api/transformation/:userId
// // @desc    Get transformation details for a user
// // @access  Public or Protected
// router.get('/:userId', getTransformation);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { saveTransformation, getTransformation,  updateTransformation } = require('../controllers/transformationController');
const transformationController = require('../controllers/transformationController');

// @route   POST /api/transformation/save
// @desc    Save transformation details for a user
// @access  Public
router.post('/save', saveTransformation);

// @route   GET /api/transformation/:userId
// @desc    Get transformation details for a user
// @access  Public
router.get('/users/:userId/healthdetails', transformationController.getTransformation);

router.put('/update/:userId', updateTransformation);

module.exports = router;
