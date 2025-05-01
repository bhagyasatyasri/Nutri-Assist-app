const mongoose = require('mongoose');

// Meal Schema
const mealSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true  // Ensure meal is associated with a user
    },
    name: { 
        type: String, 
        required: true, 
        trim: true  // Remove extra spaces around the meal name
    },
    calories: { 
        type: Number, 
        required: true, 
        min: 0  // Ensure calories are a positive number
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    image: { 
        type: String, 
        default: ''  // Default value if no image is provided
    }
});

// Index on user and date to improve query performance
mealSchema.index({ user: 1, date: -1 });

module.exports = mongoose.model('Meal', mealSchema);
