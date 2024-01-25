import { Model } from 'sequelize';
/**
 * Initializes and defines the 'customers' model class.
 *
 * @param {Object} sequelize - The Sequelize instance.
 * @param {import("sequelize").DataTypes} DataTypes - The data types module.
 * @return {Object} The 'customers' model class.
 */
export default (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  customers.init({
    name: DataTypes.STRING,
    companyName: DataTypes.STRING,
    email: DataTypes.STRING,
    countryCode: DataTypes.STRING,
    phone: DataTypes.STRING,
    website: DataTypes.STRING,
    service: DataTypes.STRING,
    subservice: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customers',
  });
  return customers;
};
