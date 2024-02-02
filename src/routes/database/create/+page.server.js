import { Sequelize } from 'sequelize';
import { redirect } from '@sveltejs/kit';
import { months } from '$lib/store';
import { get } from 'svelte/store';
import { adminMail } from "$lib/store";
import nodemailer from "nodemailer";

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
		try {
			await seq.query(
				`INSERT INTO customers (name, companyName, email, countryCode, phone, website, service, subservice, createdAt, updatedAt) VALUES ('${formDir.name}', '${formDir.companyName}', '${formDir.email}', '${formDir.countryCode}', '${formDir.phone}', '${formDir.website}', '${formDir.service}', '${formDir.subservice}', '${formDir.createdAt}', '${formDir.updatedAt}');`,
				{
					type: Sequelize.QueryTypes.INSERT
				}
			);
		} catch (error) {
			console.log(error);
		}
		let html = `
        <h1>Digital Market</h1>
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${formDir.name}</li>
            <li>Email: ${formDir.email}</li>
            <li><a href="tel:${Number(formDir.countryCode) > 0 ? "+" + formDir.countryCode : formDir.countryCode}-${formDir.phone}">Phone: ${Number(formDir.countryCode) > 0 ? "+" + formDir.countryCode : formDir.countryCode}-${formDir.phone}</a></li>
            <li>Company Name: ${formDir.companyName}</li>
            <li>Website: ${formDir.website}</li>
            <li>Service: ${formDir.service}</li>
            <li>Sub Service: ${formDir.subservice}</li>
        </ul>`;
		const emailContent = {
			from: 'jaipalbhanwariya001@gmail.com',
			to: get(adminMail),
			subject: 'Test Email',
			text: 'This is a test email.',
			html: html
		};
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'jaipalbhanwariya001@gmail.com',
				pass: 'qhpy lmyh kdjc xxws'
			}
		});
		/**
		 * @type {any}
		 * @returns
		 */
		transporter.sendMail(emailContent, (error, info) => {
			if (error) {
				console.error('Error:', error);
			} else {
				console.log('Email sent successfully!', info.response);
			}
		});
		throw redirect(302, '/database');
	}
};
