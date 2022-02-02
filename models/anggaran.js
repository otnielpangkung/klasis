'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anggaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anggaran.belongsTo(models.MataAnggaran)
      Anggaran.belongsTo(models.KelompokMA)
      Anggaran.belongsTo(models.JenisTransaksi)
      Anggaran.belongsTo(models.Jemaat)
      // define association here
    }
  };
  Anggaran.init({
    JenisTransaksiId: DataTypes.INTEGER,
    KelompokMAId: DataTypes.INTEGER,
    MataAnggaranId: DataTypes.INTEGER,
    tahun: DataTypes.INTEGER,
    JemaatId: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Anggaran',
  });
  return Anggaran;
};