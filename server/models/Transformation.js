// models/Transformation.js
const mongoose = require('mongoose');

const transformationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  bmi: { type: Number, required: true },
  goal: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transformation', transformationSchema);
