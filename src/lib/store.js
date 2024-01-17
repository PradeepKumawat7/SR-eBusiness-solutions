import { readable } from "svelte/store";

/**
 * @type { import('svelte/store').Readable<number> }
 */
export const phone = readable(8233870321);
/**
 * @type { import('svelte/store').Readable<string> }
 */
export const email = readable("example@example.com");