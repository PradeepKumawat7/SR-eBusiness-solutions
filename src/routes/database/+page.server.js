import { Sequelize } from "sequelize";
// import Admin from "../../../models/admins"

(async function () {
    const sequelize = new Sequelize('../../../db.sqlite', 'root', '@J1i16a12', {
        dialect: "sqlite"
    });
    sequelize.sync({ force: true });

    try {
        let jaipal = await sequelize.query("Insert into admins(id, name, email, password) values(1, 'Jaipal', 'jaipalbhanwariya001@gmail.com', 'J1i16a12')");
        console.log(jaipal);
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error(error);
    }
})()
