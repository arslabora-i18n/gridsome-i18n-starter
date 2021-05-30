// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient, appOptions }) {
  
  // Require translations with hot reload
  appOptions.i18n.setLocaleMessage('en-US',
  require('./locales/en.json'))
  appOptions.i18n.setLocaleMessage('it-IT',
  require('./locales/it.json'))  
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
