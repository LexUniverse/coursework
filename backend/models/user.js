// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: 'users',
    timestamps: false, // Отключаем автоматическое создание полей createdAt и updatedAt
});

module.exports = User;