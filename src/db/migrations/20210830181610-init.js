'use strict';

const { USER_TABLE } = require('./../models/user.model');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(USER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      origin: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      gender: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      species: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      }
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
  }
};
