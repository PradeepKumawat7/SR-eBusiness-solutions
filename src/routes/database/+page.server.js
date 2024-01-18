import { Sequelize } from "sequelize";
import DataTypes from "sequelize/lib/data-types"
import admin from "$lib/models/admin";

(async function () {
    const sequelize = new Sequelize('$lib/db.sqlite', 'root', '@J1i16a12', {
        dialect: "sqlite"
    });

    try {
        await sequelize.authenticate();
        let Admin = admin(sequelize, DataTypes);
        console.log(typeof (Admin));
        console.log(sequelize.model("admin"));
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})()