'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MataAnggarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaMataAnggaran: {
        allowNull: false,
        type: Sequelize.STRING
      },
      JemaatId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      JenisTransaksiId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      KelompokMAId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      code: {
        unique: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MataAnggarans');
  }
};