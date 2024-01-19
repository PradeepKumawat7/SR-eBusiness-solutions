import { Admin } from "../../../models/admins"
import { Sequelize } from "sequelize";

(async function () {
    try {
        /**
         * @type {import("sequelize").DataTypes}
         */
        let DataTypes = Sequelize.DataTypes;
        let admin = Admin(new Sequelize({
            dialect: 'sqlite',
            storage: '~/Desktop/digital-marketing/db.sqlite',
            logging: true,
            username: "root",
            password: "J1i16a12"
        }), Sequelize.DataTypes);
        // console.log(admin);
        // let jaipal = await admin.create({
        //     name: "Jaipal Bhanwariya",
        //     email: "jaipalbhanwariya001@gmail",
        //     password: "J1i16a12"
        // });
        // console.log(jaipal);
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error(error);
    }
})()
