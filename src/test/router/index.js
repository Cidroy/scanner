import Vue from 'vue'
import Router from 'vue-router'
import pages from './pages'

import E404 from '@/pages/errors/404'

Vue.use(Router)

pages.push({
	path:'*',
	component: E404
})

// mode 'history' will not work because cordova serves only static files
// file:/// api in browsers does not support history.push
// use hash for route resolution
export default new Router({
	routes: pages
})
