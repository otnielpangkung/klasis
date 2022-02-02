'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Jemaats', [
      {

        namaJemaat: "Klasis Makassar Tengah",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('Jemaats', null, {});

  }
};
