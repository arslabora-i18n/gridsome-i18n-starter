module.exports = {
  "en-US": [{
      path: '/en',
      component: './src/pages/Index.vue',
      context: {
        ref: 'home'
      }
    },
    {
      path: '/en/about-us/',
      component: './src/pages/About.vue',
      context: {
        ref: 'about'
      }
    },
    {
      path: '/en/postcss/',
      component: './src/pages/PostCSS.vue',
      context: {
        ref: 'postcss'
      }
    },
    {
      path: '/en/blog',
      component: './src/pages/en/Blog.vue',
      context: {
        ref: 'blog'
      }
    }
  ],
  "it-IT": [{
      path: '/it',
      component: './src/pages/Index.vue',
      context: {
        ref: 'home'
      }
    },
    {
      path: '/it/chi-siamo/',
      component: './src/pages/About.vue',
      context: {
        ref: 'about'
      }
    },
    {
      path: '/it/postcss/',
      component: './src/pages/PostCSS.vue',
      context: {
        ref: 'postcss'
      }
    },
    {
      path: '/it/blog',
      component: './src/pages/it/Blog.vue',
      context: {
        ref: 'blog'
      }
    }
  ],
  "pt-BR": [{
      path: '/pt',
      component: './src/pages/Index.vue',
      context: {
        ref: 'home'
      }
    },
    {
      path: '/pt/quem-somos/',
      component: './src/pages/About.vue',
      context: {
        ref: 'about'
      }
    },
    {
      path: '/pt/postcss/',
      component: './src/pages/PostCSS.vue',
      context: {
        ref: 'postcss'
      }
    },
    {
      path: '/pt/blog',
      component: './src/pages/pt/Blog.vue',
      context: {
        ref: 'blog'
      }
    }
  ]
}
