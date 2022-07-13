const { join } = require("path")

module.exports = {
	content: [join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"), join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"), join(__dirname, "./index.html"), join(__dirname, "./App.tsx")],
	theme: {
		extend: {},
	},
	plugins: [],
}
