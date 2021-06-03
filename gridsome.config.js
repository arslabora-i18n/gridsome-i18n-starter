// Require i18n configuration
const i18n = require('./src/plugins/i18n')

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const lostgrid = require('lost')

const pluginsList = [tailwindcss, autoprefixer, lostgrid]

module.exports = {
  siteName: 'Gridsome i18n Boilerplate',
  css: {
    loaderOptions: {
      postcss: {
        plugins: pluginsList
      }
    }
  },
  plugins: [
    i18n,
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PostEn',
        path: './src/content/posts/**/*.en.md'
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PostIt',
        path: './src/content/posts/**/*.it.md'
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PostPt',
        path: './src/content/posts/**/*.pt.md'
      },
    },
  ],
  templates: {
    PostEn: [{
      path: '/en/blog/:title',
      component: './src/templates/PostEn.vue'
    }],
    PostIt: [{
      path: '/it/blog/:title',
      component: './src/templates/PostIt.vue'
    }],
    PostPt: [{
      path: '/pt/blog/:title',
      component: './src/templates/PostPt.vue'
    }]
  }
}
