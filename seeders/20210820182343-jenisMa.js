'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('JenisTransaksis', [
      {
        namaJenis: 'Pendapatan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaJenis: 'Pengeluaran',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('JenisTransaksis', null, {});

  }
};
