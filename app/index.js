// Vendor dependencies
require('bootstrap/dist/js/bootstrap.js')

require('./assets/stylesheets/main.scss')

var Vue = require('vue')
var VueResource = require('vue-resource')
var VueRouter = require('vue-router')
var VueI18n = require('vue-i18n')

import App from './components/App/App.vue'
import ShowList from './components/Show/ShowList.vue'
import ShowDetails from './components/Show/ShowDetails.vue'
// import CuratedList from './components/shows/curated/CuratedListList.vue'
import Player from './components/Player/Player.vue'
import locales from './i18n/locales.js'
import strings from './utils/strings.js'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueI18n)

var router = new VueRouter()

router.map({
  '/shows/:type': {
		name: 'showList',
    component: ShowList,
  },
  'shows/:type/:id': {
    name: 'showDetails',
    component: ShowDetails,
  },
  // '/curatedList': {
  //   name: 'curatedList',
  //   component: CuratedList
  // },
	'player/:type/:id/:hash': {
		name: 'player',
		component: Player,
	}
})

router.redirect({
  '*': '/shows/movies'
})

router.start(App, '#app')

Vue.config.lang = navigator.language.indexOf('fr') > - 1 ? 'fr' : 'en'

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})
