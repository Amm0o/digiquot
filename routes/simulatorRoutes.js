const express = require('express');
const router = express.Router();
const simulatorController = require('../controllers/simulatorControllers');
const costController = require('../controllers/costController');
// Persiste service Api

router.route('/:service').post(simulatorController.addService);
// router.route('/:country/:service').post(costController);

module.exports = router;
