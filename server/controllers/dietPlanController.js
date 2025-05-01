const DietPlan = require('../models/DietPlan');

// CREATE a new plan
exports.createDietPlan = async (req, res) => {
  try {
    // Ensure userId is passed in the request body
    const { day, time, meal, userId } = req.body;
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID is required' });
    }

    // Create a new diet plan
    const newPlan = new DietPlan({
      day,
      time,
      meal,
      userId,  // Linking the diet plan to the user
    });

    await newPlan.save();
    res.status(201).json({ success: true, data: newPlan });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// UPDATE a plan
exports.updateDietPlan = async (req, res) => {
  try {
    const { planId } = req.params;
    const { day, time, meal } = req.body;

    const updated = await DietPlan.findByIdAndUpdate(planId, { day, time, meal }, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: 'Plan not found' });

    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE a plan
exports.deleteDietPlan = async (req, res) => {
  try {
    const deleted = await DietPlan.findByIdAndDelete(req.params.planId);
    if (!deleted) return res.status(404).json({ success: false, message: 'Plan not found' });
    
    res.status(200).json({ success: true, message: 'Plan deleted successfully' });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET all diet plans for a specific user
exports.getDietPlans = async (req, res) => {
  try {
    const userId = req.params.userId;  // Getting userId from URL params
    if (!userId) return res.status(400).json({ success: false, message: 'User ID is required' });

    const plans = await DietPlan.find({ userId });  // Fetch plans linked to the user
    if (!plans.length) return res.status(404).json({ success: false, message: 'No plans found for this user' });

    res.status(200).json({ success: true, data: plans });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
