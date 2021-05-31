// Require i18n configuration
const i18n = require('./plugins/i18n')

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const lostgrid = require('lost')

module.exports = {
  siteName: 'Gridsome i18n Boilerplate',
  plugins: [
    i18n
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer,
          lostgrid
        ]
      }
    }
  }
}
