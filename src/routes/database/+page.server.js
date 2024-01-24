import { Admin } from "../../../models/admins"
import { Sequelize } from "sequelize";

(async function () {
    try {
        /**
         * @type {import("sequelize").DataTypes}
        */
        let DataTypes = Sequelize.DataTypes;
        /**
         * @type {import("sequelize").Model<import("../../../migrations/20240118160621-create-admins.js"), import("../../../models/admins.js")>}
         */
        let admin = Admin(new Sequelize({
            dialect: 'sqlite',
            storage: './db.sqlite',
            logging: true,
            username: "root",
            password: "J1i16a12"
        }), Sequelize.DataTypes);
        await admin.create({
            name: "Jaipal Bhanwariya",
            email: "jaipalbhanwariya001@gmail.com",
            password: "J1i16a12"
        });
        await admin.sync({ force: true });
        console.log(admin);
        let data = await admin.findAll({
        }, { raw: true });
        console.log(data);
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error(error);
    }
})()
