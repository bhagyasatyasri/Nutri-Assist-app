const Meal = require('../models/Meal');

exports.addMeal = async (req, res) => {
    const { name, calories } = req.body;
    const userId = req.user.id;
    const image = req.file ? req.file.filename : null;
    const meal = await Meal.create({ name, calories, user: userId, image });
    res.status(201).json(meal);
};

exports.getMeals = async (req, res) => {
    const meals = await Meal.find({ user: req.user.id }).sort({ date: -1 });
    res.json(meals);
};
