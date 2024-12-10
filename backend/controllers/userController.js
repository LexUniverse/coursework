// controllers/userController.js
const User = require('../models/user'); // Импортируем модель User

const registerUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        // Используем метод create для создания нового пользователя
        const newUser = await User.create({ name, email });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error during user registration:', error); // Логирование ошибки
        res.status(500).json({ message: 'Error registering user' });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll(); // Получаем всех пользователей
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error); // Логирование ошибки
        res.status(500).json({ message: 'Error fetching users' });
    }
};

module.exports = {
    registerUser,
    getAllUsers,
};