"use strict"

import { Model } from "sequelize";

/**
 * Initializes and defines the 'admin' model class.
 *
 * @param {Object} sequelize - The Sequelize instance.
 * @param {import("sequelize").DataTypes} DataTypes - The data types module.
 * @return {import("sequelize").Model<any, any>} The 'admin' model class.
 */
export default function out(sequelize, DataTypes) {
    class admin extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
        }
    }
    admin.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: "admin",
    });
    return admin;
}