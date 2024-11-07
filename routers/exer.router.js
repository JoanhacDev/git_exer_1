const express = require('express');
const router = express.Router();
const execController = require('../controller/exer.controller');

router.get('/', execController.login)
router.get('/home', execController.home)
router.get('/home/info', execController.info)

module.exports = router;