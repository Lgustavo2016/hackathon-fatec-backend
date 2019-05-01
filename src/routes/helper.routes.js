const express = require('express');
const router = express.Router();
const HelperController = require('../controllers/HelperController');

router.get('/email', HelperController.isEmailRegistered);

module.exports = router;