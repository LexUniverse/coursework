const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Маршрут для создания комнаты
router.post('/', roomController.createRoom);

module.exports = router;