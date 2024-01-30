import { Sequelize } from 'sequelize';
import { redirect } from '@sveltejs/kit';
import { months } from '$lib/store';
import { get } from 'svelte/store';

/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		let dateNow = new Date(Date.now());
		let formDir = {
			name: formData.get('name'),
			companyName: formData.get('companyName'),
			email: formData.get('email'),
			countryCode: formData.get('countryCode'),
			phone: formData.get('phone'),
			website: formData.get('website'),
			service: formData.get('service'),
			subservice: formData.get('subservice'),
			createdAt: `${dateNow.getFullYear()}-${get(months)[dateNow.getMonth()]}-${dateNow.getDate()} ${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`,
			updatedAt: `${dateNow.getFullYear()}-${get(months)[dateNow.getMonth()]}-${dateNow.getDate()} ${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`
		};
		let seq = new Sequelize({
			dialect: 'sqlite',
			storage: './db.sqlite',
			logging: true,
			username: 'root',
			password: 'J1i16a12'
		});
		let data = await seq.query(
			`INSERT INTO customers (name, companyName, email, countryCode, phone, website, service, subservice, createdAt, updatedAt) VALUES ('${formDir.name}', '${formDir.companyName}', '${formDir.email}', '${formDir.countryCode}', '${formDir.phone}', '${formDir.website}', '${formDir.service}', '${formDir.subservice}', '${formDir.createdAt}', '${formDir.updatedAt}');`,
			{
				type: Sequelize.QueryTypes.INSERT
			}
		);
		console.log(data);
		throw redirect(302, '/database');
	}
};
