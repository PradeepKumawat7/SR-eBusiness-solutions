import { Sequelize } from "sequelize";

(async function () {
    const sequelize = new Sequelize('./db.sqlite', 'root', '@J1i16a12', {
        host: 'localhost',
        dialect: "sqlite"
    });

    try {
        await sequelize.authenticate();
        console.log(sequelize.model("customers"));
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})()