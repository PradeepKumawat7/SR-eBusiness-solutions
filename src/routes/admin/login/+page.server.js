import { Sequelize } from 'sequelize';
import { adminAuth } from '$lib/store';

/**
 * @type { import('./$types').Actions }
 */
export const actions = {
    default: async ({ request }) => {
        const body = await request.formData();
        /**
         * @type {string | FormDataEntryValue }
         */
        const name = body.get('name');
        /**
         * @type {string | FormDataEntryValue }
         */
        const email = body.get('email');
        /**
         * @type {string | FormDataEntryValue }
         */
        const password = body.get('password');
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

        /**
         * @type {{email: string, password: string}}
         */
        let first = data[0][0];
        if ((email.toLowerCase() == first.email.toLowerCase()) && (password == first.password) && (name.toLowerCase() == first.name.toLowerCase())) {
            adminAuth.set(true);
            return { success: 1 };
        } else {
            return { success: 0 };
        }
    }
};