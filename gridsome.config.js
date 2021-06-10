// Require i18n configuration
const i18n = require('./src/config/i18n')

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
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './src/content/posts/**/*.en.md'
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './src/content/posts/**/*.it.md'
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './src/content/posts/**/*.pt.md'
      },
    },
  ],
  templates: {
    Post: [{
      path: '/:locale/blog/:title',
      component: './src/templates/Post.vue'
    }]
  }
}
