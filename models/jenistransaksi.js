'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JenisTransaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JenisTransaksi.hasMany(models.KelompokMA, {
        foreignKey: 'JenisTransaksiId'
      })
      JenisTransaksi.hasMany(models.MataAnggaran)
      JenisTransaksi.hasMany(models.Transaksi)
      JenisTransaksi.hasMany(models.Anggaran)
      JenisTransaksi.hasMany(models.KelompokMA)
      // define association here
    }
  };
  JenisTransaksi.init({
    namaJenis: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JenisTransaksi',
  });
  return JenisTransaksi;
};