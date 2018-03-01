webpackJsonp([1],{

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {};
	}
});

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hello',
  data: function data() {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    };
  },

  route: {
    path: '/vuetify',
    name: 'Hello'
  }
});

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'index',
	route: {
		name: 'Index',
		path: '/'
	},
	data: function data() {
		return {};
	},
	methods: {},
	created: function created() {
		this.$store.dispatch('ninjaLogin', 'rinzlera.d.vicky@gmail.com').then(function (data) {
			return console.log(data);
		}).catch(function (error) {
			return console.error(error);
		});
	}
});

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'E404',
	data: function data() {
		return {};
	}
});

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_persistedstate__ = __webpack_require__(494);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var getModules = function getModules() {
	var files = __webpack_require__(495);
	var mods = {};
	files.keys().forEach(function (mod) {
		if (mod === './index.js') return;
		var name = mod.replace('./', '').replace('.js', '');
		mods[name] = files(mod).default;
	});
	return mods;
};

var modules = getModules();

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
	state: {
		index: 0
	},
	actions: {
		loadIndex: function loadIndex(_ref) {
			var commit = _ref.commit;
		}
	},
	mutations: {
		incrementIndex: function incrementIndex(state, i) {
			state.index += i;
		}
	},
	getters: {
		getIndex: function getIndex(state) {
			return state.index;
		}
	},
	plugins: [Object(__WEBPACK_IMPORTED_MODULE_2_vuex_persistedstate__["a" /* default */])()],
	modules: modules
});

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = {"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = {"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = {"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var files = __webpack_require__(636);
var modules = {};

files.keys().forEach(function (key) {
	if (key === './index.js') return;
	if (files(key).default.name && files(key).default.module) {
		modules[files(key).default.name] = files(key).default.module;
	}
});

/* harmony default export */ __webpack_exports__["default"] = (modules);

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(266);
module.exports = __webpack_require__(468);


/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_css__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_transitions_transitions_css__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_transitions_transitions_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__modules_transitions_transitions_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_directives__ = __webpack_require__(631);












for (var i in __WEBPACK_IMPORTED_MODULE_7__modules_directives__["a" /* default */]) {
	if (__WEBPACK_IMPORTED_MODULE_7__modules_directives__["a" /* default */].hasOwnProperty(i)) __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].directive(i, __WEBPACK_IMPORTED_MODULE_7__modules_directives__["a" /* default */][i]);
}

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.$app = __webpack_require__(263).default;

var cordovaScript = document.createElement('script');
cordovaScript.setAttribute('type', 'text/javascript');
cordovaScript.setAttribute('src', 'cordova.js');
document.body.appendChild(cordovaScript);

/* eslint-disable no-new */
var app = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
	el: '#app',
	router: __WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */],
	store: __WEBPACK_IMPORTED_MODULE_6__store__["default"],
	render: function render(h) {
		return h(__WEBPACK_IMPORTED_MODULE_4__App__["a" /* default */]);
	},
	data: { router_loading: false }
});

__WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */].beforeEach(function (to, from, next) {
	app.router_loading = true;
	next();
});

__WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */].afterEach(function (to, from, next) {
	setTimeout(function () {
		return app.router_loading = false;
	}, 300);
	// next()
});

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(203);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e671504_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(475);
var normalizeComponent = __webpack_require__(98)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e671504_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"dark":""}},[_c('transition',{attrs:{"name":"slide-y-transition"}},[_c('div',{staticClass:"z-1 elevation-3"},[_c('v-toolbar',[_c('v-spacer'),_vm._v(" "),_c('label',{staticStyle:{"font-size":"x-large","padding":"5px"}},[_vm._v("App")]),_vm._v(" "),_c('v-spacer')],1)],1)]),_vm._v(" "),_c('main',[_c('transition',{attrs:{"name":"slide-x-transition"}},[(false)?_c('v-dialog',{attrs:{"value":_vm.$root.router_loading,"fullscreen":"","transition":"fadeIn","overlay":false}},[_c('v-card',[_c('v-container',{attrs:{"fill-height":""}},[_c('v-layout',[_vm._v(" \n\t\t\t\t\t\t\tLoading ...\n\t\t\t\t\t\t\t")])],1)],1)],1):_vm._e()],1),_vm._v(" "),_c('transition',{attrs:{"name":"slide-x-transition"}},[_c('router-view')],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_errors_404__ = __webpack_require__(491);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_2__pages__["a" /* default */].push({
	path: '*',
	component: __WEBPACK_IMPORTED_MODULE_3__pages_errors_404__["a" /* default */]
});

// mode 'history' will not work because cordova serves only static files
// file:/// api in browsers does not support history.push
// use hash for route resolution
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
	routes: __WEBPACK_IMPORTED_MODULE_2__pages__["a" /* default */]
}));

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

var files = __webpack_require__(485);
var pages = [];

files.keys().forEach(function (key) {
	if (files(key).default.route && files(key).default.route.name && files(key).default.route.path) {
		pages.push(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, files(key).default.route, {
			props: true,
			component: files(key).default
		}));
	}
});

/* harmony default export */ __webpack_exports__["a"] = (pages);

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Hello.vue": 486,
	"./Index.vue": 489
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 485;

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__ = __webpack_require__(209);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58ad5935_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__ = __webpack_require__(488);
function injectStyle (ssrContext) {
  __webpack_require__(487)
}
var normalizeComponent = __webpack_require__(98)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58ad5935_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 487:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1'),_vm._v(" "),_c('h2',[_vm._v("Essential Links")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Core Docs")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://forum.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Forum")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://chat.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("Vue Community Chat")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/vuejs","target":"_blank","rel":"noopener"}},[_vm._v("Twitter")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuejs-templates.github.io/webpack/","target":"_blank","rel":"noopener"}},[_vm._v("Docs for This Template")])])]),_vm._v(" "),_c('h2',[_vm._v("Ecosystem")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"http://router.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("vue-router")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuex.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("vuex")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vue-loader.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("vue-loader")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/awesome-vue","target":"_blank","rel":"noopener"}},[_vm._v("awesome-vue")])])]),_vm._v(" "),_c('h1'),_vm._v(" "),_c('h2',[_vm._v("Essential Links")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Core Docs")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://forum.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Forum")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://chat.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("Vue Community Chat")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/vuejs","target":"_blank","rel":"noopener"}},[_vm._v("Twitter")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuejs-templates.github.io/webpack/","target":"_blank","rel":"noopener"}},[_vm._v("Docs for This Template")])])]),_vm._v(" "),_c('h2',[_vm._v("Ecosystem")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"http://router.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("vue-router")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuex.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("vuex")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vue-loader.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("vue-loader")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/awesome-vue","target":"_blank","rel":"noopener"}},[_vm._v("awesome-vue")])])]),_vm._v(" "),_c('h1'),_vm._v(" "),_c('h2',[_vm._v("Essential Links")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Core Docs")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://forum.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Forum")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://chat.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("Vue Community Chat")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/vuejs","target":"_blank","rel":"noopener"}},[_vm._v("Twitter")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuejs-templates.github.io/webpack/","target":"_blank","rel":"noopener"}},[_vm._v("Docs for This Template")])])]),_vm._v(" "),_c('h2',[_vm._v("Ecosystem")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"http://router.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("vue-router")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuex.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("vuex")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vue-loader.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("vue-loader")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/awesome-vue","target":"_blank","rel":"noopener"}},[_vm._v("awesome-vue")])])]),_vm._v(" "),_c('h1'),_vm._v(" "),_c('h2',[_vm._v("Essential Links")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Core Docs")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://forum.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Forum")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://chat.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("Vue Community Chat")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/vuejs","target":"_blank","rel":"noopener"}},[_vm._v("Twitter")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuejs-templates.github.io/webpack/","target":"_blank","rel":"noopener"}},[_vm._v("Docs for This Template")])])]),_vm._v(" "),_c('h2',[_vm._v("Ecosystem")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"http://router.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("vue-router")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuex.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("vuex")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vue-loader.vuejs.org/","target":"_blank","rel":"noopener"}},[_vm._v("vue-loader")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/awesome-vue","target":"_blank","rel":"noopener"}},[_vm._v("awesome-vue")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(210);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2044db1d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(490);
var normalizeComponent = __webpack_require__(98)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2044db1d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_404_vue__ = __webpack_require__(211);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cb53a204_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_404_vue__ = __webpack_require__(492);
var normalizeComponent = __webpack_require__(98)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_404_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cb53a204_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_404_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',[_c('h2',[_vm._v("404")]),_vm._v(" "),_c('h3',[_vm._v("Aww Snap! Now we have to find what went wrong!")])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": 212,
	"./scanner.js": 496
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 495;

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_maple_request__ = __webpack_require__(517);



/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		user: {},
		scans: {},
		loggedin: false,
		ninjaId: false
	},
	mutations: {
		doLogin: function doLogin(state, payload) {
			state.loggedin = true;
			state.user = payload;
			state.ninjaId = payload.id;
		},
		doLogout: function doLogout(state) {
			state.loggedin = false;
			state.user = {};
			state.ninjaId = false;
		},
		setScans: function setScans(state, payload) {
			state.scans = payload;
		},
		clearScans: function clearScans(state, payload) {
			state.scans = {};
		}
	},
	getters: {
		ninjaLoggedin: function ninjaLoggedin(state) {
			return state.loggedin;
		},
		ninjaScans: function ninjaScans(state) {
			return state.scans;
		},
		ninjaUser: function ninjaUser(state) {
			return state.user;
		},
		ninjaId: function ninjaId(state) {
			return state.ninjaId;
		}
	},
	actions: {
		ninjaRegister: function ninjaRegister(_ref, credentials) {
			var commit = _ref.commit,
			    state = _ref.state;
			return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
				__WEBPACK_IMPORTED_MODULE_1__scripts_maple_request__["a" /* default */].post("eventninjaz/rangholic", "register", { email: credentials.email, name: credentials.name }).then(function (data) {
					data = data.response;
					if (data.type === "success") {
						var user = {};
						user = {
							id: data.id,
							name: credentials.name,
							email: data.email
						};
						var scans = data.scanned || [];
						commit('doLogin', user);
						commit('setScans', scans);
						resolve(data);
					} else reject(data);
				}).catch(function (error) {
					return reject({
						type: "error",
						message: "something went wrong"
					});
				});
			});
		},
		ninjaLogin: function ninjaLogin(_ref2, email) {
			var commit = _ref2.commit,
			    state = _ref2.state;
			return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
				__WEBPACK_IMPORTED_MODULE_1__scripts_maple_request__["a" /* default */].post("eventninjaz/rangholic", "login", { email: email }).then(function (data) {
					data = data.response;
					if (data.type === "success") {
						var user = {};
						user = {
							id: data.id,
							name: data.name,
							email: data.email
						};
						var scans = data.scanned || [];
						commit('doLogin', user);
						commit('setScans', scans);
						resolve(data);
					} else reject(data);
				}).catch(function (error) {
					return reject({
						type: "error",
						message: "something went wrong"
					});
				});
			});
		},
		ninjaLogout: function ninjaLogout(_ref3) {
			var commit = _ref3.commit;
			return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
				commit('doLogout');
				commit('clearScans');
				resolve(true);
			});
		}
	}
});

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_es6_request__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_es6_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_es6_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details__ = __webpack_require__(630);






var _this = this;




var server = __WEBPACK_IMPORTED_MODULE_6__details__["a" /* default */].server;
var credentials = {};

/* harmony default export */ __webpack_exports__["a"] = ({
	get: function () {
		var _ref = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(name, action) {
			var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt("return", new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
								__WEBPACK_IMPORTED_MODULE_5_es6_request___default.a.get(server.ajax).query(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
									"maple-ajax": name,
									"maple-ajax-action": action,
									ajax: true
								}, credentials, data)).then(function (_ref2) {
									var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
									    body = _ref3[0],
									    res = _ref3[1];

									res["body"] = body;
									res["response"] = JSON.parse(body);
									resolve(res);
								}).catch(function (_ref4) {
									var _ref5 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref4, 1),
									    err = _ref5[0];

									reject(err);
								});
							}));

						case 1:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, _this);
		}));

		return function get(_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}(),
	post: function () {
		var _ref6 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(name, action) {
			var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.abrupt("return", new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
								__WEBPACK_IMPORTED_MODULE_5_es6_request___default.a.post(server.ajax).sendForm(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
									"maple-ajax": name,
									"maple-ajax-action": action,
									ajax: true
								}, credentials, data)).then(function (_ref7) {
									var _ref8 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref7, 2),
									    body = _ref8[0],
									    res = _ref8[1];

									res["body"] = body;
									res["response"] = JSON.parse(body);
									resolve(res);
								}).catch(function (_ref9) {
									var _ref10 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref9, 1),
									    err = _ref10[0];

									reject(err);
								});
							}));

						case 1:
						case "end":
							return _context2.stop();
					}
				}
			}, _callee2, _this);
		}));

		return function post(_x4, _x5) {
			return _ref6.apply(this, arguments);
		};
	}(),
	setCredentials: function setCredentials(data) {
		return credentials = data;
	}
});

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = {"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}

/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports = {"_from":"elliptic@^6.0.0","_id":"elliptic@6.4.0","_inBundle":false,"_integrity":"sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=","_location":"/elliptic","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"elliptic@^6.0.0","name":"elliptic","escapedName":"elliptic","rawSpec":"^6.0.0","saveSpec":null,"fetchSpec":"^6.0.0"},"_requiredBy":["/browserify-sign","/create-ecdh"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz","_shasum":"cac9af8762c85836187003c8dfe193e5e2eae5df","_spec":"elliptic@^6.0.0","_where":"/media/rinzler/Backup/Jobs/J35 - EventNinjaz Entry Scanner - 26 FEB 18/app/node_modules/browserify-sign","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"bundleDependencies":false,"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},"deprecated":false,"description":"EC cryptography","devDependencies":{"brfs":"^1.4.3","coveralls":"^2.11.3","grunt":"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2","istanbul":"^0.4.2","jscs":"^2.9.0","jshint":"^2.6.0","mocha":"^2.1.0"},"files":["lib"],"homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","name":"elliptic","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/index.js","version":"grunt dist && git add dist/"},"version":"6.4.0"}

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = {"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = {".123":"application/vnd.lotus-1-2-3",".a":"application/octet-stream",".aab":"application/x-authorware-bin",".aam":"application/x-authorware-map",".aas":"application/x-authorware-seg",".abw":"application/x-abiword",".acc":"application/vnd.americandynamics.acc",".ace":"application/x-ace-compressed",".acu":"application/vnd.acucobol",".acutc":"application/vnd.acucorp",".aep":"application/vnd.audiograph",".afm":"application/x-font-type1",".afp":"application/vnd.ibm.modcap",".ai":"application/postscript",".air":"application/vnd.adobe.air-application-installer-package+zip",".ami":"application/vnd.amiga.ami",".apk":"application/vnd.android.package-archive",".application":"application/x-ms-application",".apr":"application/vnd.lotus-approach",".asc":"application/pgp-signature",".aso":"application/vnd.accpac.simply.aso",".atc":"application/vnd.acucorp",".atom":"application/atom+xml",".atomcat":"application/atomcat+xml",".atomsvc":"application/atomsvc+xml",".atx":"application/vnd.antix.game-component",".aw":"application/applixware",".azf":"application/vnd.airzip.filesecure.azf",".azs":"application/vnd.airzip.filesecure.azs",".azw":"application/vnd.amazon.ebook",".bat":"application/x-msdownload",".bcpio":"application/x-bcpio",".bdf":"application/x-font-bdf",".bdm":"application/vnd.syncml.dm+wbxml",".bh2":"application/vnd.fujitsu.oasysprs",".bin":"application/octet-stream",".bmi":"application/vnd.bmi",".book":"application/vnd.framemaker",".box":"application/vnd.previewsystems.box",".boz":"application/x-bzip2",".bpk":"application/octet-stream",".bz":"application/x-bzip",".bz2":"application/x-bzip2",".c4d":"application/vnd.clonk.c4group",".c4f":"application/vnd.clonk.c4group",".c4g":"application/vnd.clonk.c4group",".c4p":"application/vnd.clonk.c4group",".c4u":"application/vnd.clonk.c4group",".cab":"application/vnd.ms-cab-compressed",".car":"application/vnd.curl.car",".cat":"application/vnd.ms-pki.seccat",".cct":"application/x-director",".ccxml":"application/ccxml+xml",".cdbcmsg":"application/vnd.contact.cmsg",".cdf":"application/x-netcdf",".cdkey":"application/vnd.mediastation.cdkey",".cdxml":"application/vnd.chemdraw+xml",".cdy":"application/vnd.cinderella",".cer":"application/pkix-cert",".chat":"application/x-chat",".chm":"application/vnd.ms-htmlhelp",".chrt":"application/vnd.kde.kchart",".cii":"application/vnd.anser-web-certificate-issue-initiation",".cil":"application/vnd.ms-artgalry",".cla":"application/vnd.claymore",".class":"application/java-vm",".clkk":"application/vnd.crick.clicker.keyboard",".clkp":"application/vnd.crick.clicker.palette",".clkt":"application/vnd.crick.clicker.template",".clkw":"application/vnd.crick.clicker.wordbank",".clkx":"application/vnd.crick.clicker",".clp":"application/x-msclip",".cmc":"application/vnd.cosmocaller",".cmp":"application/vnd.yellowriver-custom-menu",".cod":"application/vnd.rim.cod",".com":"application/x-msdownload",".cpio":"application/x-cpio",".cpt":"application/mac-compactpro",".crd":"application/x-mscardfile",".crl":"application/pkix-crl",".crt":"application/x-x509-ca-cert",".csh":"application/x-csh",".csp":"application/vnd.commonspace",".cst":"application/x-director",".cu":"application/cu-seeme",".cww":"application/prs.cww",".cxt":"application/x-director",".daf":"application/vnd.mobius.daf",".dataless":"application/vnd.fdsn.seed",".davmount":"application/davmount+xml",".dcr":"application/x-director",".dd2":"application/vnd.oma.dd2+xml",".ddd":"application/vnd.fujixerox.ddd",".deb":"application/x-debian-package",".deploy":"application/octet-stream",".der":"application/x-x509-ca-cert",".dfac":"application/vnd.dreamfactory",".dir":"application/x-director",".dis":"application/vnd.mobius.dis",".dist":"application/octet-stream",".distz":"application/octet-stream",".dll":"application/x-msdownload",".dmg":"application/x-apple-diskimage",".dms":"application/octet-stream",".dna":"application/vnd.dna",".doc":"application/msword",".docm":"application/vnd.ms-word.document.macroenabled.12",".docx":"application/vnd.openxmlformats-officedocument.wordprocessingml.document",".dot":"application/msword",".dotm":"application/vnd.ms-word.template.macroenabled.12",".dotx":"application/vnd.openxmlformats-officedocument.wordprocessingml.template",".dp":"application/vnd.osgi.dp",".dpg":"application/vnd.dpgraph",".dtb":"application/x-dtbook+xml",".dtd":"application/xml-dtd",".dump":"application/octet-stream",".dvi":"application/x-dvi",".dxp":"application/vnd.spotfire.dxp",".dxr":"application/x-director",".ecma":"application/ecmascript",".edm":"application/vnd.novadigm.edm",".edx":"application/vnd.novadigm.edx",".efif":"application/vnd.picsel",".ei6":"application/vnd.pg.osasli",".elc":"application/octet-stream",".emma":"application/emma+xml",".eot":"application/vnd.ms-fontobject",".eps":"application/postscript",".epub":"application/epub+zip",".es3":"application/vnd.eszigno3+xml",".esf":"application/vnd.epson.esf",".et3":"application/vnd.eszigno3+xml",".exe":"application/x-msdownload",".ext":"application/vnd.novadigm.ext",".ez":"application/andrew-inset",".ez2":"application/vnd.ezpix-album",".ez3":"application/vnd.ezpix-package",".fdf":"application/vnd.fdf",".fe_launch":"application/vnd.denovo.fcselayout-link",".fg5":"application/vnd.fujitsu.oasysgp",".fgd":"application/x-director",".fig":"application/x-xfig",".flo":"application/vnd.micrografx.flo",".flw":"application/vnd.kde.kivio",".fm":"application/vnd.framemaker",".fnc":"application/vnd.frogans.fnc",".frame":"application/vnd.framemaker",".fsc":"application/vnd.fsc.weblaunch",".ftc":"application/vnd.fluxtime.clip",".fti":"application/vnd.anser-web-funds-transfer-initiation",".fzs":"application/vnd.fuzzysheet",".gac":"application/vnd.groove-account",".geo":"application/vnd.dynageo",".gex":"application/vnd.geometry-explorer",".ggb":"application/vnd.geogebra.file",".ggt":"application/vnd.geogebra.tool",".ghf":"application/vnd.groove-help",".gim":"application/vnd.groove-identity-message",".gmx":"application/vnd.gmx",".gnumeric":"application/x-gnumeric",".gph":"application/vnd.flographit",".gqf":"application/vnd.grafeq",".gqs":"application/vnd.grafeq",".gram":"application/srgs",".gre":"application/vnd.geometry-explorer",".grv":"application/vnd.groove-injector",".grxml":"application/srgs+xml",".gsf":"application/x-font-ghostscript",".gtar":"application/x-gtar",".gtm":"application/vnd.groove-tool-message",".gz":"application/x-gzip",".hbci":"application/vnd.hbci",".hdf":"application/x-hdf",".hlp":"application/winhlp",".hpgl":"application/vnd.hp-hpgl",".hpid":"application/vnd.hp-hpid",".hps":"application/vnd.hp-hps",".hqx":"application/mac-binhex40",".htke":"application/vnd.kenameaapp",".hvd":"application/vnd.yamaha.hv-dic",".hvp":"application/vnd.yamaha.hv-voice",".hvs":"application/vnd.yamaha.hv-script",".icc":"application/vnd.iccprofile",".icm":"application/vnd.iccprofile",".ifm":"application/vnd.shana.informed.formdata",".igl":"application/vnd.igloader",".igx":"application/vnd.micrografx.igx",".iif":"application/vnd.shana.informed.interchange",".imp":"application/vnd.accpac.simply.imp",".ims":"application/vnd.ms-ims",".ipk":"application/vnd.shana.informed.package",".irm":"application/vnd.ibm.rights-management",".irp":"application/vnd.irepository.package+xml",".iso":"application/octet-stream",".itp":"application/vnd.shana.informed.formtemplate",".ivp":"application/vnd.immervision-ivp",".ivu":"application/vnd.immervision-ivu",".jam":"application/vnd.jam",".jar":"application/java-archive",".jisp":"application/vnd.jisp",".jlt":"application/vnd.hp-jlyt",".jnlp":"application/x-java-jnlp-file",".joda":"application/vnd.joost.joda-archive",".js":"application/javascript",".json":"application/json",".karbon":"application/vnd.kde.karbon",".kfo":"application/vnd.kde.kformula",".kia":"application/vnd.kidspiration",".kil":"application/x-killustrator",".kml":"application/vnd.google-earth.kml+xml",".kmz":"application/vnd.google-earth.kmz",".kne":"application/vnd.kinar",".knp":"application/vnd.kinar",".kon":"application/vnd.kde.kontour",".kpr":"application/vnd.kde.kpresenter",".kpt":"application/vnd.kde.kpresenter",".ksp":"application/vnd.kde.kspread",".ktr":"application/vnd.kahootz",".ktz":"application/vnd.kahootz",".kwd":"application/vnd.kde.kword",".kwt":"application/vnd.kde.kword",".latex":"application/x-latex",".lbd":"application/vnd.llamagraphics.life-balance.desktop",".lbe":"application/vnd.llamagraphics.life-balance.exchange+xml",".les":"application/vnd.hhe.lesson-player",".lha":"application/octet-stream",".link66":"application/vnd.route66.link66+xml",".list3820":"application/vnd.ibm.modcap",".listafp":"application/vnd.ibm.modcap",".lostxml":"application/lost+xml",".lrf":"application/octet-stream",".lrm":"application/vnd.ms-lrm",".ltf":"application/vnd.frogans.ltf",".lwp":"application/vnd.lotus-wordpro",".lzh":"application/octet-stream",".m13":"application/x-msmediaview",".m14":"application/x-msmediaview",".ma":"application/mathematica",".mag":"application/vnd.ecowin.chart",".maker":"application/vnd.framemaker",".mathml":"application/mathml+xml",".mb":"application/mathematica",".mbk":"application/vnd.mobius.mbk",".mbox":"application/mbox",".mc1":"application/vnd.medcalcdata",".mcd":"application/vnd.mcd",".mdb":"application/x-msaccess",".mfm":"application/vnd.mfmp",".mgz":"application/vnd.proteus.magazine",".mif":"application/vnd.mif",".mlp":"application/vnd.dolby.mlp",".mmd":"application/vnd.chipnuts.karaoke-mmd",".mmf":"application/vnd.smaf",".mny":"application/x-msmoney",".mobi":"application/x-mobipocket-ebook",".mp4s":"application/mp4",".mpc":"application/vnd.mophun.certificate",".mpkg":"application/vnd.apple.installer+xml",".mpm":"application/vnd.blueice.multipass",".mpn":"application/vnd.mophun.application",".mpp":"application/vnd.ms-project",".mpt":"application/vnd.ms-project",".mpy":"application/vnd.ibm.minipay",".mqy":"application/vnd.mobius.mqy",".mrc":"application/marc",".mscml":"application/mediaservercontrol+xml",".mseed":"application/vnd.fdsn.mseed",".mseq":"application/vnd.mseq",".msf":"application/vnd.epson.msf",".msi":"application/x-msdownload",".msl":"application/vnd.mobius.msl",".msty":"application/vnd.muvee.style",".mus":"application/vnd.musician",".musicxml":"application/vnd.recordare.musicxml+xml",".mvb":"application/x-msmediaview",".mwf":"application/vnd.mfer",".mxf":"application/mxf",".mxl":"application/vnd.recordare.musicxml",".mxml":"application/xv+xml",".mxs":"application/vnd.triscape.mxs",".n-gage":"application/vnd.nokia.n-gage.symbian.install",".nb":"application/mathematica",".nc":"application/x-netcdf",".ncx":"application/x-dtbncx+xml",".ngdat":"application/vnd.nokia.n-gage.data",".nlu":"application/vnd.neurolanguage.nlu",".nml":"application/vnd.enliven",".nnd":"application/vnd.noblenet-directory",".nns":"application/vnd.noblenet-sealer",".nnw":"application/vnd.noblenet-web",".nsf":"application/vnd.lotus-notes",".o":"application/octet-stream",".oa2":"application/vnd.fujitsu.oasys2",".oa3":"application/vnd.fujitsu.oasys3",".oas":"application/vnd.fujitsu.oasys",".obd":"application/x-msbinder",".obj":"application/octet-stream",".oda":"application/oda",".odb":"application/vnd.oasis.opendocument.database",".odc":"application/vnd.oasis.opendocument.chart",".odf":"application/vnd.oasis.opendocument.formula",".odft":"application/vnd.oasis.opendocument.formula-template",".odg":"application/vnd.oasis.opendocument.graphics",".odi":"application/vnd.oasis.opendocument.image",".odp":"application/vnd.oasis.opendocument.presentation",".ods":"application/vnd.oasis.opendocument.spreadsheet",".odt":"application/vnd.oasis.opendocument.text",".ogx":"application/ogg",".onepkg":"application/onenote",".onetmp":"application/onenote",".onetoc":"application/onenote",".onetoc2":"application/onenote",".opf":"application/oebps-package+xml",".oprc":"application/vnd.palm",".org":"application/vnd.lotus-organizer",".osf":"application/vnd.yamaha.openscoreformat",".osfpvg":"application/vnd.yamaha.openscoreformat.osfpvg+xml",".otc":"application/vnd.oasis.opendocument.chart-template",".otg":"application/vnd.oasis.opendocument.graphics-template",".oth":"application/vnd.oasis.opendocument.text-web",".oti":"application/vnd.oasis.opendocument.image-template",".otm":"application/vnd.oasis.opendocument.text-master",".otp":"application/vnd.oasis.opendocument.presentation-template",".ots":"application/vnd.oasis.opendocument.spreadsheet-template",".ott":"application/vnd.oasis.opendocument.text-template",".oxt":"application/vnd.openofficeorg.extension",".p10":"application/pkcs10",".p12":"application/x-pkcs12",".p7b":"application/x-pkcs7-certificates",".p7c":"application/pkcs7-mime",".p7m":"application/pkcs7-mime",".p7r":"application/x-pkcs7-certreqresp",".p7s":"application/pkcs7-signature",".pbd":"application/vnd.powerbuilder6",".pcf":"application/x-font-pcf",".pcl":"application/vnd.hp-pcl",".pclxl":"application/vnd.hp-pclxl",".pcurl":"application/vnd.curl.pcurl",".pdb":"application/vnd.palm",".pdf":"application/pdf",".pfa":"application/x-font-type1",".pfb":"application/x-font-type1",".pfm":"application/x-font-type1",".pfr":"application/font-tdpfr",".pfx":"application/x-pkcs12",".pgn":"application/x-chess-pgn",".pgp":"application/pgp-encrypted",".pkg":"application/octet-stream",".pki":"application/pkixcmp",".pkipath":"application/pkix-pkipath",".plb":"application/vnd.3gpp.pic-bw-large",".plc":"application/vnd.mobius.plc",".plf":"application/vnd.pocketlearn",".pls":"application/pls+xml",".pml":"application/vnd.ctc-posml",".portpkg":"application/vnd.macports.portpkg",".pot":"application/vnd.ms-powerpoint",".potm":"application/vnd.ms-powerpoint.template.macroenabled.12",".potx":"application/vnd.openxmlformats-officedocument.presentationml.template",".ppa":"application/vnd.ms-powerpoint",".ppam":"application/vnd.ms-powerpoint.addin.macroenabled.12",".ppd":"application/vnd.cups-ppd",".pps":"application/vnd.ms-powerpoint",".ppsm":"application/vnd.ms-powerpoint.slideshow.macroenabled.12",".ppsx":"application/vnd.openxmlformats-officedocument.presentationml.slideshow",".ppt":"application/vnd.ms-powerpoint",".pptm":"application/vnd.ms-powerpoint.presentation.macroenabled.12",".pptx":"application/vnd.openxmlformats-officedocument.presentationml.presentation",".pqa":"application/vnd.palm",".prc":"application/x-mobipocket-ebook",".pre":"application/vnd.lotus-freelance",".prf":"application/pics-rules",".ps":"application/postscript",".psb":"application/vnd.3gpp.pic-bw-small",".psf":"application/x-font-linux-psf",".ptid":"application/vnd.pvi.ptid1",".pub":"application/x-mspublisher",".pvb":"application/vnd.3gpp.pic-bw-var",".pwn":"application/vnd.3m.post-it-notes",".pwz":"application/vnd.ms-powerpoint",".pyc":"application/x-python-code",".pyo":"application/x-python-code",".qam":"application/vnd.epson.quickanime",".qbo":"application/vnd.intu.qbo",".qfx":"application/vnd.intu.qfx",".qps":"application/vnd.publishare-delta-tree",".qwd":"application/vnd.quark.quarkxpress",".qwt":"application/vnd.quark.quarkxpress",".qxb":"application/vnd.quark.quarkxpress",".qxd":"application/vnd.quark.quarkxpress",".qxl":"application/vnd.quark.quarkxpress",".qxt":"application/vnd.quark.quarkxpress",".rar":"application/x-rar-compressed",".rcprofile":"application/vnd.ipunplugged.rcprofile",".rdf":"application/rdf+xml",".rdz":"application/vnd.data-vision.rdz",".rep":"application/vnd.businessobjects",".res":"application/x-dtbresource+xml",".rif":"application/reginfo+xml",".rl":"application/resource-lists+xml",".rld":"application/resource-lists-diff+xml",".rm":"application/vnd.rn-realmedia",".rms":"application/vnd.jcp.javame.midlet-rms",".rnc":"application/relax-ng-compact-syntax",".rpm":"application/x-rpm",".rpss":"application/vnd.nokia.radio-presets",".rpst":"application/vnd.nokia.radio-preset",".rq":"application/sparql-query",".rs":"application/rls-services+xml",".rsd":"application/rsd+xml",".rss":"application/rss+xml",".rtf":"application/rtf",".saf":"application/vnd.yamaha.smaf-audio",".sbml":"application/sbml+xml",".sc":"application/vnd.ibm.secure-container",".scd":"application/x-msschedule",".scm":"application/vnd.lotus-screencam",".scq":"application/scvp-cv-request",".scs":"application/scvp-cv-response",".sda":"application/vnd.stardivision.draw",".sdc":"application/vnd.stardivision.calc",".sdd":"application/vnd.stardivision.impress",".sdkd":"application/vnd.solent.sdkm+xml",".sdkm":"application/vnd.solent.sdkm+xml",".sdp":"application/sdp",".sdw":"application/vnd.stardivision.writer",".see":"application/vnd.seemail",".seed":"application/vnd.fdsn.seed",".sema":"application/vnd.sema",".semd":"application/vnd.semd",".semf":"application/vnd.semf",".ser":"application/java-serialized-object",".setpay":"application/set-payment-initiation",".setreg":"application/set-registration-initiation",".sfd-hdstx":"application/vnd.hydrostatix.sof-data",".sfs":"application/vnd.spotfire.sfs",".sgl":"application/vnd.stardivision.writer-global",".sh":"application/x-sh",".shar":"application/x-shar",".shf":"application/shf+xml",".sic":"application/vnd.wap.sic",".sig":"application/pgp-signature",".sis":"application/vnd.symbian.install",".sisx":"application/vnd.symbian.install",".sit":"application/x-stuffit",".sitx":"application/x-stuffitx",".skd":"application/vnd.koan",".skm":"application/vnd.koan",".skp":"application/vnd.koan",".skt":"application/vnd.koan",".slc":"application/vnd.wap.slc",".sldm":"application/vnd.ms-powerpoint.slide.macroenabled.12",".sldx":"application/vnd.openxmlformats-officedocument.presentationml.slide",".slt":"application/vnd.epson.salt",".smf":"application/vnd.stardivision.math",".smi":"application/smil+xml",".smil":"application/smil+xml",".snf":"application/x-font-snf",".so":"application/octet-stream",".spc":"application/x-pkcs7-certificates",".spf":"application/vnd.yamaha.smaf-phrase",".spl":"application/x-futuresplash",".spp":"application/scvp-vp-response",".spq":"application/scvp-vp-request",".src":"application/x-wais-source",".srx":"application/sparql-results+xml",".sse":"application/vnd.kodak-descriptor",".ssf":"application/vnd.epson.ssf",".ssml":"application/ssml+xml",".stc":"application/vnd.sun.xml.calc.template",".std":"application/vnd.sun.xml.draw.template",".stf":"application/vnd.wt.stf",".sti":"application/vnd.sun.xml.impress.template",".stk":"application/hyperstudio",".stl":"application/vnd.ms-pki.stl",".str":"application/vnd.pg.format",".stw":"application/vnd.sun.xml.writer.template",".sus":"application/vnd.sus-calendar",".susp":"application/vnd.sus-calendar",".sv4cpio":"application/x-sv4cpio",".sv4crc":"application/x-sv4crc",".svd":"application/vnd.svd",".swa":"application/x-director",".swf":"application/x-shockwave-flash",".swi":"application/vnd.arastra.swi",".sxc":"application/vnd.sun.xml.calc",".sxd":"application/vnd.sun.xml.draw",".sxg":"application/vnd.sun.xml.writer.global",".sxi":"application/vnd.sun.xml.impress",".sxm":"application/vnd.sun.xml.math",".sxw":"application/vnd.sun.xml.writer",".tao":"application/vnd.tao.intent-module-archive",".tar":"application/x-tar",".tcap":"application/vnd.3gpp2.tcap",".tcl":"application/x-tcl",".teacher":"application/vnd.smart.teacher",".tex":"application/x-tex",".texi":"application/x-texinfo",".texinfo":"application/x-texinfo",".tfm":"application/x-tex-tfm",".tgz":"application/x-gzip",".tmo":"application/vnd.tmobile-livetv",".torrent":"application/x-bittorrent",".tpl":"application/vnd.groove-tool-template",".tpt":"application/vnd.trid.tpt",".tra":"application/vnd.trueapp",".trm":"application/x-msterminal",".twd":"application/vnd.simtech-mindmapper",".twds":"application/vnd.simtech-mindmapper",".txd":"application/vnd.genomatix.tuxedo",".txf":"application/vnd.mobius.txf",".u32":"application/x-authorware-bin",".udeb":"application/x-debian-package",".ufd":"application/vnd.ufdl",".ufdl":"application/vnd.ufdl",".umj":"application/vnd.umajin",".unityweb":"application/vnd.unity",".uoml":"application/vnd.uoml+xml",".ustar":"application/x-ustar",".utz":"application/vnd.uiq.theme",".vcd":"application/x-cdlink",".vcg":"application/vnd.groove-vcard",".vcx":"application/vnd.vcx",".vis":"application/vnd.visionary",".vor":"application/vnd.stardivision.writer",".vox":"application/x-authorware-bin",".vsd":"application/vnd.visio",".vsf":"application/vnd.vsf",".vss":"application/vnd.visio",".vst":"application/vnd.visio",".vsw":"application/vnd.visio",".vxml":"application/voicexml+xml",".w3d":"application/x-director",".wad":"application/x-doom",".wbs":"application/vnd.criticaltools.wbs+xml",".wbxml":"application/vnd.wap.wbxml",".wcm":"application/vnd.ms-works",".wdb":"application/vnd.ms-works",".wiz":"application/msword",".wks":"application/vnd.ms-works",".wmd":"application/x-ms-wmd",".wmf":"application/x-msmetafile",".wmlc":"application/vnd.wap.wmlc",".wmlsc":"application/vnd.wap.wmlscriptc",".wmz":"application/x-ms-wmz",".wpd":"application/vnd.wordperfect",".wpl":"application/vnd.ms-wpl",".wps":"application/vnd.ms-works",".wqd":"application/vnd.wqd",".wri":"application/x-mswrite",".wsdl":"application/wsdl+xml",".wspolicy":"application/wspolicy+xml",".wtb":"application/vnd.webturbo",".x32":"application/x-authorware-bin",".x3d":"application/vnd.hzn-3d-crossword",".xap":"application/x-silverlight-app",".xar":"application/vnd.xara",".xbap":"application/x-ms-xbap",".xbd":"application/vnd.fujixerox.docuworks.binder",".xdm":"application/vnd.syncml.dm+xml",".xdp":"application/vnd.adobe.xdp+xml",".xdw":"application/vnd.fujixerox.docuworks",".xenc":"application/xenc+xml",".xer":"application/patch-ops-error+xml",".xfdf":"application/vnd.adobe.xfdf",".xfdl":"application/vnd.xfdl",".xht":"application/xhtml+xml",".xhtml":"application/xhtml+xml",".xhvml":"application/xv+xml",".xla":"application/vnd.ms-excel",".xlam":"application/vnd.ms-excel.addin.macroenabled.12",".xlb":"application/vnd.ms-excel",".xlc":"application/vnd.ms-excel",".xlm":"application/vnd.ms-excel",".xls":"application/vnd.ms-excel",".xlsb":"application/vnd.ms-excel.sheet.binary.macroenabled.12",".xlsm":"application/vnd.ms-excel.sheet.macroenabled.12",".xlsx":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",".xlt":"application/vnd.ms-excel",".xltm":"application/vnd.ms-excel.template.macroenabled.12",".xltx":"application/vnd.openxmlformats-officedocument.spreadsheetml.template",".xlw":"application/vnd.ms-excel",".xml":"application/xml",".xo":"application/vnd.olpc-sugar",".xop":"application/xop+xml",".xpdl":"application/xml",".xpi":"application/x-xpinstall",".xpr":"application/vnd.is-xpr",".xps":"application/vnd.ms-xpsdocument",".xpw":"application/vnd.intercon.formnet",".xpx":"application/vnd.intercon.formnet",".xsl":"application/xml",".xslt":"application/xslt+xml",".xsm":"application/vnd.syncml+xml",".xspf":"application/xspf+xml",".xul":"application/vnd.mozilla.xul+xml",".xvm":"application/xv+xml",".xvml":"application/xv+xml",".zaz":"application/vnd.zzazz.deck+xml",".zip":"application/zip",".zir":"application/vnd.zul",".zirz":"application/vnd.zul",".zmm":"application/vnd.handheld-entertainment+xml",".webmanifest":"application/manifest+json",".webapp":"x-web-app-manifest+json",".7z":"application/x-7z-compressed",".aac":"audio/x-aac",".adp":"audio/adpcm",".aif":"audio/x-aiff",".aifc":"audio/x-aiff",".aiff":"audio/x-aiff",".au":"audio/basic",".dts":"audio/vnd.dts",".dtshd":"audio/vnd.dts.hd",".ecelp4800":"audio/vnd.nuera.ecelp4800",".ecelp7470":"audio/vnd.nuera.ecelp7470",".ecelp9600":"audio/vnd.nuera.ecelp9600",".eol":"audio/vnd.digital-winds",".kar":"audio/midi",".lvp":"audio/vnd.lucent.voice",".m2a":"audio/mpeg",".m3a":"audio/mpeg",".m3u":"audio/x-mpegurl",".mid":"audio/midi",".midi":"audio/midi",".mp2":"audio/mpeg",".mp2a":"audio/mpeg",".mp3":"audio/mpeg",".mp4a":"audio/mp4",".mpga":"audio/mpeg",".oga":"audio/ogg",".ogg":"audio/ogg",".pya":"audio/vnd.ms-playready.media.pya",".ra":"audio/x-pn-realaudio",".ram":"audio/x-pn-realaudio",".rmi":"audio/midi",".rmp":"audio/x-pn-realaudio-plugin",".snd":"audio/basic",".spx":"audio/ogg",".wav":"audio/x-wav",".wax":"audio/x-ms-wax",".wma":"audio/x-ms-wma",".cff":"font/collection",".otf":"font/opentype",".sfnt":"font/sfnt",".ttc":"font/ttf",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".bmp":"image/bmp",".btif":"image/prs.btif",".cgm":"image/cgm",".cmx":"image/x-cmx",".djv":"image/vnd.djvu",".djvu":"image/vnd.djvu",".dwg":"image/vnd.dwg",".dxf":"image/vnd.dxf",".fbs":"image/vnd.fastbidsheet",".fh":"image/x-freehand",".fh4":"image/x-freehand",".fh5":"image/x-freehand",".fh7":"image/x-freehand",".fhc":"image/x-freehand",".fpx":"image/vnd.fpx",".fst":"image/vnd.fst",".g3":"image/g3fax",".gif":"image/gif",".ico":"image/x-icon",".ief":"image/ief",".jpe":"image/jpeg",".jpeg":"image/jpeg",".jpg":"image/jpeg",".mdi":"image/vnd.ms-modi",".mmr":"image/vnd.fujixerox.edmics-mmr",".npx":"image/vnd.net-fpx",".pbm":"image/x-portable-bitmap",".pct":"image/x-pict",".pcx":"image/x-pcx",".pgm":"image/x-portable-graymap",".pic":"image/x-pict",".png":"image/png",".pnm":"image/x-portable-anymap",".ppm":"image/x-portable-pixmap",".psd":"image/vnd.adobe.photoshop",".ras":"image/x-cmu-raster",".rgb":"image/x-rgb",".rlc":"image/vnd.fujixerox.edmics-rlc",".svg":"image/svg+xml",".svgz":"image/svg+xml",".tif":"image/tiff",".tiff":"image/tiff",".wbmp":"image/vnd.wap.wbmp",".xbm":"image/x-xbitmap",".xif":"image/vnd.xiff",".xpm":"image/x-xpixmap",".xwd":"image/x-xwindowdump",".eml":"message/rfc822",".mht":"message/rfc822",".mhtml":"message/rfc822",".mime":"message/rfc822",".nws":"message/rfc822",".dwf":"model/vnd.dwf",".gdl":"model/vnd.gdl",".gtw":"model/vnd.gtw",".iges":"model/iges",".igs":"model/iges",".mesh":"model/mesh",".msh":"model/mesh",".mts":"model/vnd.mts",".silo":"model/mesh",".vrml":"model/vrml",".vtu":"model/vnd.vtu",".wrl":"model/vrml",".3dml":"text/vnd.in3d.3dml",".asm":"text/x-asm",".c":"text/x-c",".cc":"text/x-c",".conf":"text/plain",".cpp":"text/x-c",".css":"text/css",".csv":"text/csv",".curl":"text/vnd.curl",".cxx":"text/x-c",".dcurl":"text/vnd.curl.dcurl",".def":"text/plain",".dic":"text/x-c",".diff":"text/plain",".dsc":"text/prs.lines.tag",".etx":"text/x-setext",".f":"text/x-fortran",".f77":"text/x-fortran",".f90":"text/x-fortran",".flx":"text/vnd.fmi.flexstor",".fly":"text/vnd.fly",".for":"text/x-fortran",".gv":"text/vnd.graphviz",".h":"text/x-c",".hh":"text/x-c",".htm":"text/html",".html":"text/html",".ics":"text/calendar",".ifb":"text/calendar",".in":"text/plain",".jad":"text/vnd.sun.j2me.app-descriptor",".java":"text/x-java-source",".ksh":"text/plain",".list":"text/plain",".log":"text/plain",".man":"text/troff",".mcurl":"text/vnd.curl.mcurl",".me":"text/troff",".ms":"text/troff",".p":"text/x-pascal",".pas":"text/x-pascal",".pl":"text/plain",".py":"text/x-python",".roff":"text/troff",".rtx":"text/richtext",".s":"text/x-asm",".scurl":"text/vnd.curl.scurl",".sgm":"text/sgml",".sgml":"text/sgml",".si":"text/vnd.wap.si",".sl":"text/vnd.wap.sl",".spot":"text/vnd.in3d.spot",".t":"text/troff",".text":"text/plain",".tr":"text/troff",".tsv":"text/tab-separated-values",".txt":"text/plain",".uri":"text/uri-list",".uris":"text/uri-list",".urls":"text/uri-list",".uu":"text/x-uuencode",".vcf":"text/x-vcard",".vcs":"text/x-vcalendar",".wml":"text/vnd.wap.wml",".wmls":"text/vnd.wap.wmlscript",".appcache":"text/cache-manifest",".3g2":"video/3gpp2",".3gp":"video/3gpp",".3gpp":"video/3gpp",".asf":"video/x-ms-asf",".asx":"video/x-ms-asf",".avi":"video/x-msvideo",".f4v":"video/x-f4v",".fli":"video/x-fli",".flv":"video/x-flv",".fvt":"video/vnd.fvt",".h261":"video/h261",".h263":"video/h263",".h264":"video/h264",".jpgm":"video/jpm",".jpgv":"video/jpeg",".jpm":"video/jpm",".m1v":"video/mpeg",".m2v":"video/mpeg",".m4u":"video/vnd.mpegurl",".m4v":"video/x-m4v",".mj2":"video/mj2",".mjp2":"video/mj2",".mov":"video/quicktime",".movie":"video/x-sgi-movie",".mp4":"video/mp4",".mp4v":"video/mp4",".mpa":"video/mpeg",".mpe":"video/mpeg",".mpeg":"video/mpeg",".mpg":"video/mpeg",".mpg4":"video/mp4",".mxu":"video/vnd.mpegurl",".ogv":"video/ogg",".pyv":"video/vnd.ms-playready.media.pyv",".qt":"video/quicktime",".viv":"video/vnd.vivo",".webm":"video/webm",".wm":"video/x-ms-wm",".wmv":"video/x-ms-wmv",".wmx":"video/x-ms-wmx",".wvx":"video/x-ms-wvx",".mkv":"video/x-matroska",".mk3d":"video/x-matroska",".mks":"video/x-matroska",".cdx":"chemical/x-cdx",".cif":"chemical/x-cif",".cmdf":"chemical/x-cmdf",".cml":"chemical/x-cml",".csml":"chemical/x-csml",".xyz":"chemical/x-xyz",".ice":"x-conference/x-cooltalk"}

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var server = {
	url: "https://localhost/project/evz/scanner/maple/",
	ajax: "https://localhost/project/evz/scanner/maple/ajax"
};

/* harmony default export */ __webpack_exports__["a"] = ({
	server: server
});

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);

var directives = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({
	'click-outside': {
		priority: 700,
		bind: function bind() {
			var self = this;
			this.event = function (event) {
				self.vm.$emit(self.expression, event);
			};
			this.el.addEventListener('click', this.stopProp);
			document.body.addEventListener('click', this.event);
		},
		unbind: function unbind() {
			this.el.removeEventListener('click', this.stopProp);
			document.body.removeEventListener('click', this.event);
		},
		stopProp: function stopProp(event) {
			event.stopPropagation();
		}
	}
}, 'click-outside', {
	bind: function bind(el, binding, vNode) {
		// Provided expression must evaluate to a function.
		if (typeof binding.value !== 'function') {
			var compName = vNode.context.name;
			var warn = '[Vue-click-outside:] provided expression \'' + binding.expression + '\' is not a function, but has to be';
			if (compName) {
				warn += 'Found in component \'' + compName + '\'';
			}

			console.warn(warn);
		}
		// Define Handler and cache it on the element
		var bubble = binding.modifiers.bubble;
		var handler = function handler(e) {
			if (bubble || !el.contains(e.target) && el !== e.target) {
				binding.value(e);
			}
		};
		el.__vueClickOutside__ = handler;

		// add Event Listeners
		document.addEventListener('click', handler);
	},

	unbind: function unbind(el, binding) {
		// Remove Event Listeners
		document.removeEventListener('click', el.__vueClickOutside__);
		el.__vueClickOutside__ = null;
	}
});

/* harmony default export */ __webpack_exports__["a"] = (directives);

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": 263,
	"./scanner.js": 637
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 636;

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);






var _this = this;

var scanner = function () {
	var _ref = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						return _context.abrupt("return", new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
							try {
								if (cordova !== undefined && (typeof cordova === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(cordova)) === "object" && cordova.hasOwnProperty("plugins") && cordova.plugins.hasOwnProperty("barcodeScanner")) cordova.plugins.barcodeScanner.scan(function (result) {
									return resolve(result);
								}, function (error) {
									return reject(error);
								}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
									preferFrontCamera: false, // iOS and Android
									showFlipCameraButton: true, // iOS and Android
									showTorchButton: true, // iOS and Android
									torchOn: false, // Android, launch with the torch switched on (if available)
									saveHistory: true, // Android, save scan history (default false)
									prompt: "Place the barcode inside the scan area", // Android
									resultDisplayDuration: 0, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
									formats: "CODE_128", // default: all but PDF_417 and RSS_EXPANDED
									orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
									disableAnimations: true, // iOS
									disableSuccessBeep: false }, options));else reject("Scanner failed to start");
							} catch (error) {
								reject(error);
							}
						}));

					case 1:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, _this);
	}));

	return function scanner() {
		return _ref.apply(this, arguments);
	};
}();

/* harmony default export */ __webpack_exports__["default"] = ({
	name: "barcodeScanner",
	module: scanner
});

/***/ })

},[265]);
//# sourceMappingURL=app.9663b6e59cef84112dec.js.map