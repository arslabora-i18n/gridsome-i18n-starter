// Require i18n configuration
const i18n = require('./plugins/i18n')
const blog = require('./plugins/blog')

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const lostgrid = require('lost')

const pluginsList = [tailwindcss, autoprefixer, lostgrid]

module.exports = {
  siteName: 'Gridsome i18n Boilerplate',
  plugins: [
    i18n,
    blog
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: pluginsList
      }
    }
  }
}
