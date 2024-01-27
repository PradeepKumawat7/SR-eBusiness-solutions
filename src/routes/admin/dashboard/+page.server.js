import { redirect } from '@sveltejs/kit';
import { adminAuth } from '$lib/store';
import { get } from 'svelte/store';
import { Sequelize } from 'sequelize';

export async function load() {
	let sequelize = new Sequelize({
		dialect: 'sqlite',
		storage: './db.sqlite',
		logging: true,
		username: 'root',
		password: 'J1i16a12'
	});
	let data = await sequelize.query('SELECT * FROM customers;');
	try {
		if (!get(adminAuth)) {
			throw redirect(302, '/admin/login');
		} else {
			return { data: data[0] };
		}
	} catch (error) {
		console.log(error);
	}
}
