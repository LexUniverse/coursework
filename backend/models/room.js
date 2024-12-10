const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Room = sequelize.define('Room', {
    user1_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user2_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    expires_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'rooms',
    timestamps: false, // Отключаем автоматическое создание полей createdAt и updatedAt
});

module.exports = Room;