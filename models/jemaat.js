'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jemaat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Jemaat.hasMany(models.User)
      Jemaat.hasMany(models.Anggaran)
      Jemaat.hasMany(models.Saldo)
      Jemaat.hasMany(models.KelompokMA)
      Jemaat.hasMany(models.MataAnggaran)
      Jemaat.hasMany(models.Transaksi)
      // define association here
    }
  };
  Jemaat.init({
    namaJemaat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jemaat',
  });
  return Jemaat;
};