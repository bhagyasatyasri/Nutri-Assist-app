const mongoose = require('mongoose');

const dietPlanSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  meal: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('DietPlan', dietPlanSchema);
