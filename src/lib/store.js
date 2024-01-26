import { readable, writable } from "svelte/store";

/**
 * @type { import('svelte/store').Readable<number> }
 */
export const phone = readable(8233870321);
/**
 * @type { import('svelte/store').Readable<string> }
 */
export const email = readable("example@example.com");
/**
 * @type { import('svelte/store').Readable<string[]> }
 */
export const months = readable(["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]);
/**
 * @type {import("svelte/store").Writable<boolean>}
 */
export const adminAuth = writable(false);