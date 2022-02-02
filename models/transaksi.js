'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaksi.belongsTo(models.Jemaat)
      Transaksi.belongsTo(models.JenisTransaksi, {
        foreignKey: 'JenisTransaksiId'
      })
      Transaksi.belongsTo(models.MataAnggaran)
      Transaksi.belongsTo(models.KelompokMA)
      // define association here
    }
  };
  Transaksi.init({
    namaTransaksi: DataTypes.STRING,
    JemaatId: DataTypes.INTEGER,
    JenisTransaksiId: DataTypes.INTEGER,
    KelompokMAId: DataTypes.INTEGER,
    MataAnggaranId: DataTypes.INTEGER,
    keterangan: DataTypes.STRING,
    jumlah: DataTypes.BIGINT,
    tanggalTransaksi: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaksi',
  });
  return Transaksi;
};