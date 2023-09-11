/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				'cyan': '0 35px 60px -15px cyan-500',
			},
		},
	},
	plugins: [],
};