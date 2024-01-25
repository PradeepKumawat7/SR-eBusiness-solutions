import { Sequelize } from "sequelize";
import customers from "../../../models/customers"

(async function () {
    try {
        /**
         * @type {import("sequelize").Sequelize}
        */
        let seq = new Sequelize({
            dialect: 'sqlite',
            storage: './db.sqlite',
            logging: true,
            username: "root",
            password: "J1i16a12"
        });
        /**
         * @type {any}
         */
        let cus = customers(seq, Sequelize.DataTypes);

        console.log(cus);
        let data = await cus.findAll();
        console.log(data);
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error(error);
    }
})()
