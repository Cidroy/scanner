const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
	if (key === './index.js') return
	if (files(key).default.name && files(key).default.module) {
		modules[files(key).default.name] = files(key).default.module
	}
})

export default modules