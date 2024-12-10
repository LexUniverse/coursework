// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware для обработки JSON
app.use(express.json());

// Импорт маршрутов
const roomRoutes = require('./routes/roomRoutes');
const userRoutes = require('./routes/userRoutes'); // Подключаем маршруты для пользователей

app.use('/api/rooms', roomRoutes); // Подключаем маршруты для комнат
app.use('/api/users', userRoutes); // Подключаем маршруты для пользователей

// Определение маршрута для корневого URL
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});