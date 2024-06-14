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
			animation: {
				mymove: "mymove 2.5s infinite",
			},
			keyframes: {
				mymove: {
					"33%": { top: "0px" },
					"66%": { top: "20px" },
					"100%": { top: "0px" },
				},
			},
		},
	},
	plugins: [],
};
