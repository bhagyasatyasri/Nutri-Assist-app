const express = require('express');
const router = express.Router();
const dietPlanController = require('../controllers/dietPlanController');

// No need for userId in the route
router.get('/dietplans/:userId', dietPlanController.getDietPlans);
router.post('/dietplan', dietPlanController.createDietPlan);
router.put('/dietplan/:planId', dietPlanController.updateDietPlan);
router.delete('/dietplan/:planId', dietPlanController.deleteDietPlan);

module.exports = router;
