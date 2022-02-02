'use strict';
const { bcryptPass, cekPass } = require("../helper/bcrypt")
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
        username: "adminklasis",
        password: bcryptPass("admin"),
        role: "admin",
        JemaatId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "otnielPangkung",
        password: bcryptPass("Niel12345"),
        role: "admin",
        JemaatId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('Users', null, {});

  }
};
