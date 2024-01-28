/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				cyan: '0 35px 60px -15px cyan-500',
			},
			backgroundColor: {
				light: '#f9f9f9', // color de fondo para el tema claro
				dark: '#121212', // color de fondo para el tema oscuro
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
