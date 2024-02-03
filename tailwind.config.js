/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			"xs": "250px",
			'md': '768px',
			"lg": "1024px",
			'xl': '1280px',
			'2xl': '1536px'
		},
		extend: {}
	},
	plugins: []
};

