'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transaksis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaTransaksi: {
        allowNull: false,
        type: Sequelize.STRING
      },
      JemaatId: {
        type: Sequelize.INTEGER
      },
      JenisTransaksiId: {
        type: Sequelize.INTEGER
      },
      KelompokMAId: {
        type: Sequelize.INTEGER
      },
      MataAnggaranId: {
        type: Sequelize.INTEGER
      },
      keterangan: {
        type: Sequelize.STRING
      },
      jumlah: {
        type: Sequelize.BIGINT
      },
      tanggalTransaksi: {
        type: Sequelize.DATE
      },
      status: {
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
    await queryInterface.dropTable('Transaksis');
  }
};