module.exports = {
  "en-US": [
    {
      path: '/en',
      component: './src/pages/Index.vue',
      context: {
        slug: '/'
      }
    },
    {
      path: '/en/about-us/',
      component: './src/pages/About.vue',
      context: {
        slug: '/about'
      }
    },
    {
      path: '/en/postcss/',
      component: './src/pages/PostCSS.vue',
      context: {
        slug: '/postcss'
      }
    },
  ],
  "it-IT": [
    {
      path: '/it',
      component: './src/pages/Index.vue',
      context: {
        slug: '/'
      }
    },
    {
      path: '/it/chi-siamo/',
      component: './src/pages/About.vue',
      context: {
        slug: '/about'
      }
    },
    {
      path: '/it/postcss/',
      component: './src/pages/PostCSS.vue',
      context: {
        slug: '/postcss'
      }
    },
  ],
  "pt-BR": [
    {
      path: '/pt',
      component: './src/pages/Index.vue',
      context: {
        slug: '/'
      }
    },
    {
      path: '/pt/quem-somos/',
      component: './src/pages/About.vue',
      context: {
        slug: '/about'
      }
    },
    {
      path: '/pt/postcss/',
      component: './src/pages/PostCSS.vue',
      context: {
        slug: '/postcss'
      }
    },
  ]
}