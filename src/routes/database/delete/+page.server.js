import { redirect } from '@sveltejs/kit';
import { Sequelize } from 'sequelize';
import { get } from 'svelte/store';
import { page } from '$app/stores';
export async function load() {
    let url = get(page).url;
    let id = url.searchParams.get('id');
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