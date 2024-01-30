import { redirect } from '@sveltejs/kit';
import { Sequelize } from 'sequelize';

export async function load({ params }) {
	let id = params.id;
	if (id === '') {
		throw redirect(302, '/');
	} else {
		let seq = new Sequelize({
			dialect: 'sqlite',
			storage: './db.sqlite',
			logging: true,
			username: 'root',
			password: 'J1i16a12'
		});
		await seq.query(`DELETE FROM customers WHERE id = ${id};`, {
			type: Sequelize.QueryTypes.DELETE
		});
		throw redirect(302, '/database');
	}
}
