// // controllers/transformationController.js
// const Transformation = require('../models/Transformation');

// // Save transformation details for a user
// exports.saveTransformation = async (req, res) => {
//   try {
//     const { userId, transformationDetails } = req.body;
    
//     if (!userId || !transformationDetails) {
//       return res.status(400).json({ message: 'User ID and transformation details are required' });
//     }

//     const newTransformation = new Transformation({
//       userId, 
//       ...transformationDetails
//     });

//     await newTransformation.save();
//     res.status(201).json({ message: 'Transformation saved successfully', data: newTransformation });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error saving transformation' });
//   }
// };

// // Get transformation details for a user
// exports.getTransformation = async (req, res) => {
//   try {
//     const { userId } = req.params;
    
//     const transformations = await Transformation.find({ userId });
    
//     if (!transformations) {
//       return res.status(404).json({ message: 'No transformation details found for this user' });
//     }
    
//     res.status(200).json({ data: transformations });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching transformation details' });
//   }
// };


const Transformation = require('../models/Transformation');
const User = require('../models/User'); 

// Save transformation details for a user
exports.saveTransformation = async (req, res) => {
  try {
    const { userId, weight, height, bmi, goal } = req.body;
    if (!userId || !weight || !height || !bmi || !goal) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // ensure user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: 'User not found' });
    }

    // prevent duplicates
    const already = await Transformation.findOne({ userId });
    if (already) {
      return res
        .status(409)
        .json({ message: 'Transformation already exists; use update instead' });
    }

    const newT = new Transformation({ userId, weight, height, bmi, goal });
    await newT.save();
    res.status(201).json({ message: 'Transformation created', data: newT });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving transformation', error: err.message });
  }
};

exports.getTransformation = async (req, res) => {
  const { userId } = req.params;
  const transformations = await Transformation.find({ userId });
  res.status(200).json({ data: transformations });
};

// Update transformation details for a user
exports.updateTransformation = async (req, res) => {
  try {
    const { userId } = req.params;
    const { weight, height, bmi, goal } = req.body;
    if (!weight || !height || !bmi || !goal) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // find and update
    const updated = await Transformation.findOneAndUpdate(
      { userId },
      { weight, height, bmi, goal },
      { new: true }
    );
    if (!updated) {
      return res
        .status(404)
        .json({ message: 'No existing transformation; use create first' });
    }

    res.status(200).json({ message: 'Transformation updated', data: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating transformation', error: err.message });
  }
};
