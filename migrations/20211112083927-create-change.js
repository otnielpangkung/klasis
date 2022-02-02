'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Anggarans', 'jumlah', {
      type: Sequelize.BIGINT,
    });
  },
  down: async (queryInterface, Sequelize) => {
    ;
  }
};