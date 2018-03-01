import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueTimeago from 'vue-timeago'

import '@/modules/transitions/transitions.css'

import App from './App'
import router from './router'
import store from './store'

import directives from '@/modules/directives'


for (const i in directives) {
	if(directives.hasOwnProperty(i))
		Vue.directive(i,directives[i])
}

Vue.use(VueTimeago, {
	name: "timeago", // component name, `timeago` by default
	locale: "en-US",
	locales: {
		// you will need json-loader in webpack 1
		"en-US": require("vue-timeago/locales/en-US.json")
	}
})

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.prototype.$app = require('./scripts').default

var cordovaScript = document.createElement('script')
cordovaScript.setAttribute('type', 'text/javascript')
cordovaScript.setAttribute('src', 'cordova.js')
document.body.appendChild(cordovaScript)

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  data: { router_loading: false }
})

router.beforeEach((to,from,next) => {
	app.router_loading = true
	next()
})

router.afterEach((to,from,next) => {
	setTimeout(() => app.router_loading = false, 300 )
	// next()
})