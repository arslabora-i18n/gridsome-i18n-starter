// Require i18n configuration
const i18n = require('./src/config/i18n')
const posts = require('./src/config/posts')

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const lostgrid = require('lost')

const _modules = [tailwindcss, autoprefixer, lostgrid]

module.exports = {
  siteName: 'Gridsome i18n Boilerplate',
  css: {
    loaderOptions: {
      postcss: {
        plugins: _modules
      }
    }
  },
  plugins: [
    i18n,
    posts.en, posts.it, posts.pt
  ],
  templates: {
    Post: [{
      path: '/:locale/blog/:title',
      component: './src/templates/Post.vue'
    }]
  }
}
