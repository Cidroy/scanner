import vue from 'vue'
import vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

vue.use(vuex)

const getModules = () => {
	var files = require.context('@/store/', false, /\.js$/)
	var mods = {}
	files.keys().forEach(mod  => {
		if(mod === './index.js') return
		var name = mod.replace('./','').replace('.js','')
		mods[name] = files(mod).default
	})
	return mods
}

var modules = getModules()

const store = new vuex.Store({
	state: {
		index:0
	},
	actions: {
		loadIndex({commit}){}
	},
	mutations: {
		incrementIndex(state,i){ state.index += i }
	},
	getters: {
		getIndex: state => state.index
	},
	plugins: [persistedState()],
	modules: modules,
})

export default store