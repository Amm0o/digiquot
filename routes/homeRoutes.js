const contactsController = require('../controllers/contactController');
const homeControllers = require('../controllers/homeControllers');
const express = require('express');

const router = express.Router();

// HOME ROUTE
router.route('/').get(homeControllers.homePage);
// Contact Route
router.route('/contacts').get(contactsController.contacts);
// Send New Contact
router.route('/contacts/api').post(homeControllers.sendContact);
// Terms and Services
router.route('/terms').get(homeControllers.terms);
router.route('/terms/pt').get(homeControllers.termsPt);

module.exports = router;
