// Declaracion de variables globales
const express = require('express');
const router = express.Router();
const execController = require('../controller/exer.controller');

// Declaracion de rutas

router.get('/', execController.login)
router.get('/home', execController.home)
router.get('/home/info', execController.info)

router.post('/logueando', execController.logueando)

// Exportacion del modulo

module.exports = router;