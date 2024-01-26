import { redirect } from '@sveltejs/kit';
import { adminAuth } from '$lib/store';
import { get } from 'svelte/store';

export async function load() {
    if (!(get(adminAuth))) {
        throw redirect(302, '/admin/login');
    }
}