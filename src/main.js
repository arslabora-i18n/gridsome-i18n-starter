// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/css/main.css'
const fontFace = require('./assets/css/fonts.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient, appOptions }) {
  
  // Allow for hot-reload of translations
  appOptions.i18n.setLocaleMessage('en-US',
  require('./locales/en.json'))
  appOptions.i18n.setLocaleMessage('it-IT',
  require('./locales/it.json'))  
  appOptions.i18n.setLocaleMessage('pt-BR',
  require('./locales/pt.json'))  
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.style.push({
    type: 'text/css', 
    cssText: fontFace,
  })
}
