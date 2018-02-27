import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import '@/modules/transitions/transitions.css'

import App from './App'
import router from './router'

import directives from '@/modules/directives'


for (const i in directives) {
	if(directives.hasOwnProperty(i))
		Vue.directive(i,directives[i])
}

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.prototype.$app = require('./scripts').default

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
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