const express = require('express');
const Meal = require('../models/Meal'); // Path to your Meal model
const router = express.Router();

// Route to add a new meal
router.post('/add-meal', async (req, res) => {
    const { user, name, calories, image } = req.body;

    try {
        // Create a new meal
        const newMeal = new Meal({
            user,
            name,
            calories,
            image
        });

        // Save the meal to the database
        await newMeal.save();

        res.status(201).json({ message: 'Meal added successfully!', meal: newMeal });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
