'use strict';
const { bcryptPass, cekPass } = require("../helper/bcrypt")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Jemaat)
      // define association here
    }
  };
  User.init({
    username: DataTypes.STRING,
    JemaatId: DataTypes.INTEGER,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user) {
        user.password = bcryptPass(user.password)
      }
    }
  });
  return User;
};