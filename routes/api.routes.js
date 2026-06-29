// routes/api.routes.js
const express = require('express');
const router = express.Router();
const { getStatus, postTicket } = require('../controllers/api.controller.js');

// Definición de rutas delegando al controlador
router.get('/status', getStatus);
router.post('/ticket', postTicket);

module.exports = router;