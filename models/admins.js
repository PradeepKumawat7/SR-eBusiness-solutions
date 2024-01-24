import { Model } from 'sequelize';
/**
 * @param {import("sequelize").Sequelize} sequelize
 * @param {import("sequelize").DataTypes} DataTypes
 * @returns {import("sequelize").Model<any, any>}
 */
export function Admin(sequelize, DataTypes) {
  class admins extends Model {
  }
  admins.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admins',
  });
  return admins;
};