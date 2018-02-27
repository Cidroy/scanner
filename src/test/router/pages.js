const files = require.context('@/pages/', false, /\.vue$/)
const pages = []

files.keys().forEach(key => {
	if(files(key).default.route && files(key).default.route.name && files(key).default.route.path ){
		pages.push({
			...files(key).default.route,
			props: true,
			component:files(key).default
		})
	}
})

export default pages