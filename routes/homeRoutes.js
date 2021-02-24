const homeControllers = require('../controllers/homeControllers');
const express = require('express');

const router = express.Router();

// HOME ROUTE
router.route('/').get(homeControllers.homePage);

module.exports = router;
