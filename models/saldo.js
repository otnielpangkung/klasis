'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Saldo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Saldo.belongsTo(models.Jemaat)
      // define association here
    }
  };
  Saldo.init({
    bulan: DataTypes.INTEGER,
    tahun: DataTypes.INTEGER,
    JemaatId: DataTypes.INTEGER,
    jmlhSaldo: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Saldo',
  });
  return Saldo;
};