/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx}",
	"./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		fontSize: {
			xxs: "0.5rem",
			xs: "0.75rem",
			s: "1.25rem",
			l: "2.5rem",
		},
		extend: {
			backgroundImage: {
				"bg-desktop": "url('/src/images/bg-desktop.png')",
			},
			colors: {
				"text-color": "#9e9e9e",
				"line-color": "#dbdbdb",
			},
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
};


