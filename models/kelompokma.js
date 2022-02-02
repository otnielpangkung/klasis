'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KelompokMA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KelompokMA.hasMany(models.MataAnggaran)
      KelompokMA.hasMany(models.Transaksi)
      KelompokMA.hasMany(models.Anggaran)
      KelompokMA.belongsTo(models.JenisTransaksi, {
        foreignKey: 'JenisTransaksiId'
      })
      KelompokMA.belongsTo(models.Jemaat)
      // define association here
    }
  };
  KelompokMA.init({
    namaKelMa: DataTypes.STRING,
    code: DataTypes.STRING,
    JemaatId: DataTypes.INTEGER,

    JenisTransaksiId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'KelompokMA',
  });
  return KelompokMA;
};