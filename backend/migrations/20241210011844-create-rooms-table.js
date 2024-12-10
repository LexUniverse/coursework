'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('rooms', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user1_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }, // Ссылка на таблицу пользователей
      },
      user2_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }, // Ссылка на таблицу пользователей
      },
      expires_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('rooms');
  }
};