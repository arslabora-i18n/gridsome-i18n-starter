# Gridsome i18n Starter

Implement a working i18n boilerplate with all functionalities, as strings and path translations, hot reload and other goodies.

References:

- [Build Your Static Blog With Gridsome](https://mannes.tech/gridsome-tutorial/)
- [The Answers to All your Questions about Gridsome Localization](https://phrase.com/blog/posts/gridsome-localization/)
- [How to set up Tailwind CSS with gridsome](https://webdevetc.com/blog/tailwind-css-with-gridsome/)
- [Gridsome, Tailwind, and other PostCSS](https://braincoke.fr/blog/2020/03/gridsome-tailwind-and-other-post-css/)

## Properties

This boilerplate uses the i18n plugin by @daaru00, after some modifications upon the work of @giuseppeaiello: it provide an extension of `$context`, with a `slug` property, so to link path translations.

The `i18n` plugin is configured so that the routes must be manually managed. This is very powerfull and quite vue-alike:

**i18n.js**:
```js
module.exports = {
  use: "gridsome-plugin-i18n",
  options: {
    locales: [
      'en-US',
      'it-IT',
      'pt-BR'
    ],
    pathAliases: {
      'en-US': 'en',
      'it-IT': 'it',
      'pt-BR': 'pt'
    },
    fallbackLocale: 'en-US',
    defaultLocale: 'en-US',
    enablePathRewrite: true,
    rewriteDefaultLanguage: true,
    enablePathGeneration: false,
    routes: require('../src/routes.js')
  }
}
```

**routes.js**:
```js
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
    }
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
    }
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
    }
  ]
}
```

In your navigation, path must be referred as: `<g-link class="nav__link" :to="$tp($t('/about'))">About</g-link>`, where `$tp` link to the localised routes (en, it,... ), and `$t` get the path translated string defined in each locale dictionary (usually JSON files).

The LocaleSwitcher.vue components uses, to refer the localised path, `$context.slug` property, so when you are navigating to a page which has a localised slug, if you change the language, the correct slug is retrieved.

## Addons

- [Google Fonts Helper](https://github.com/majodev/google-webfonts-helper)
