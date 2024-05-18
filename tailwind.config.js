/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				orange: {
					main: "#D87D4A",
					secondary: "FBAF85",
				},
				black: {
					secondary: "#101010",
				},
				gray: {
					main: "#F1F1F1",
					secondary: "#FAFAFA",
				},
			},
		},
	},
	plugins: [],
}
