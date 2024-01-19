// Inside your route component (e.g., routes/database.svelte)
/**
 * @param {import("@sveltejs/kit").Redirect} redirect
 */
export async function load(redirect) {
    return {
        redirect: "/"
    };
}