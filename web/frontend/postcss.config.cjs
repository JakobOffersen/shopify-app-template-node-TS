// import tailwind from "tailwindcss"
// import autoprefixer from "autoprefixer"
// import tailwindConfig from "./tailwind.config.js"

// export default {
// 	plugins: [tailwind(tailwindConfig), autoprefixer],
// }

const path = require("path")

module.exports = {
	plugins: {
		tailwindcss: {
			config: path.join(__dirname, "tailwind.config.cjs"),
		},
		autoprefixer: {},
	},
}
