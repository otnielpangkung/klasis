'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MataAnggaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MataAnggaran.hasMany(models.Transaksi)
      MataAnggaran.hasMany(models.Anggaran)
      MataAnggaran.belongsTo(models.KelompokMA)
      MataAnggaran.belongsTo(models.JenisTransaksi, {
        foreignKey: 'JenisTransaksiId'
      })
      MataAnggaran.belongsTo(models.Jemaat)
      // define association here
    }
  };
  MataAnggaran.init({
    namaMataAnggaran: DataTypes.STRING,
    JemaatId: DataTypes.INTEGER,
    JenisTransaksiId: DataTypes.INTEGER,
    KelompokMAId: DataTypes.INTEGER,
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MataAnggaran',
  });
  return MataAnggaran;
};