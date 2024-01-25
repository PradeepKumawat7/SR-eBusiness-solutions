import { Sequelize } from 'sequelize';
import { json } from '@sveltejs/kit';

/**
 * @type { import('./$types').Actions }
 */
export const actions = {
    default: async ({ request }) => {
        const body = await request.formData();
        /**
         * @type {string | FormDataEntryValue }
         */
        const email = body.get('email');
        /**
         * @type {string | FormDataEntryValue }
         */
        const password = body.get('password');
        console.log("Body: ", { email, password });
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
        let data = await seq.query("SELECT * FROM admins;");
        console.log(data[0][0]);

        /**
         * @type {{email: string, password: string}}
         */
        let first = data[0][0];
        if ((email.toLowerCase() == first.email.toLowerCase()) && (password == first.password)) {
            return { success: 1 };
        } else {
            return { success: 0 };
        }
    }
};