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
			username: 'root',
			password: 'J1i16a12'
		});
		/**
		 * @type {any}
		 */
		let data = await seq.query('SELECT * FROM admins;');

		/**
		 * @type {{email: string, password: string}}
		 */
		let first = data[0];
		let success = 0;
		for (let index = 0; index < first.length; index++) {
			if (
				email.toLowerCase() == first[index].email.toLowerCase() &&
				password == first[index].password &&
				name.toLowerCase() == first[index].name.toLowerCase()
			) {
				success = 1;
				break;
			}
		}
		if (success) {
			throw redirect(302, '/admin/dashboard');
		} else {
			return { success: 0 };
		}
	}
};
