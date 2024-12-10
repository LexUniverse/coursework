// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Маршрут для регистрации пользователя
router.post('/register', userController.registerUser);

// Маршрут для получения всех пользователей
router.get('/', userController.getAllUsers);

module.exports = router;