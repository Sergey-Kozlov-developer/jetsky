/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "359px",
			md: "767px",
			lg: "1023px",
			xl: "1170px",
			// md: "1024px",
		},
		extend: {
			colors: {
				"link-active": "#f66d52",
			},
		},
	},
	plugins: [],
};
