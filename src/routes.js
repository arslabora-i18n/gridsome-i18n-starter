module.exports = {
  "en-US": [{
      path: '/en',
      component: './src/pages/Index.vue',
      context: {
        slug: 'home'
      }
    },
    {
      path: '/en/about-us/',
      component: './src/pages/About.vue',
      context: {
        slug: 'about'
      }
    },
    {
      path: '/en/postcss/',
      component: './src/pages/PostCSS.vue',
      context: {
        slug: 'postcss'
      }
    },
    {
      path: '/en/blog',
      component: './src/pages/en/Blog.vue',
      context: {
        slug: 'blog'
      }
    },
  ],
  "it-IT": [{
      path: '/it',
      component: './src/pages/Index.vue',
      context: {
        slug: 'home'
      }
    },
    {
      path: '/it/chi-siamo/',
      component: './src/pages/About.vue',
      context: {
        slug: 'about'
      }
    },
    {
      path: '/it/postcss/',
      component: './src/pages/PostCSS.vue',
      context: {
        slug: 'postcss'
      }
    },
    {
      path: '/it/blog',
      component: './src/pages/it/Blog.vue',
      context: {
        slug: 'blog'
      }
    }
  ],
  "pt-BR": [{
      path: '/pt',
      component: './src/pages/Index.vue',
      context: {
        slug: 'home'
      }
    },
    {
      path: '/pt/quem-somos/',
      component: './src/pages/About.vue',
      context: {
        slug: 'about'
      }
    },
    {
      path: '/pt/postcss/',
      component: './src/pages/PostCSS.vue',
      context: {
        slug: 'postcss'
      }
    },
    {
      path: '/pt/blog',
      component: './src/pages/pt/Blog.vue',
      context: {
        slug: 'blog'
      }
    }
  ]
}
