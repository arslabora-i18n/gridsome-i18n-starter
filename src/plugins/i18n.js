module.exports = {
  use: "gridsome-plugin-i18n",
  options: {
    locales: [
      'en-US',
      'it-IT'
    ],
    pathAliases: {
      'en-US': 'en',
      'it-IT': 'it'
    },
    fallbackLocale: 'en-US',
    defaultLocale: 'en-US',
    enablePathRewrite: true,
    rewriteDefaultLanguage: true,
    enablePathGeneration: true,
  }
}