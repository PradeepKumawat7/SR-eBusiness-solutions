import { Sequelize } from 'sequelize';
import { redirect } from '@sveltejs/kit';

/**
 * @type { import('./$types').Actions }
 */
export const actions = {
    default: async ({ request }) => {
        const body = await request.formData();
        /**
         * @type {string | FormDataEntryValue | null }
         */
        const name = body.get('name');
        /**
         * @type {string | FormDataEntryValue | null }
         */
        const email = body.get('email');
        /**
         * @type {string | FormDataEntryValue | null }
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
        let data2 = await seq.query("SELECT * FROM customers;");

        /**
         * @type {{email: string, password: string}}
         */
        let first = data[0][0];
        console.log(data2);
        if ((email.toLowerCase() == first.email.toLowerCase()) && (password == first.password) && (name.toLowerCase() == first.name.toLowerCase())) {
            throw redirect(302, '/admin/dashboard');
        } else {
            return { success: 0 };
        }
    }
};