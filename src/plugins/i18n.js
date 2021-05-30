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
    routes: require('../locales/routes.js')
  }
}