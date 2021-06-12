// Require i18n configuration
const i18n = require("./src/config/i18n");
const posts = require("./src/config/posts");
const postcss = require("./src/config/postcss");

module.exports = {
  siteName: "Gridsome i18n Boilerplate",
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcss.modules
      }
    }
  },
  plugins: [
    i18n, // toggle i18n support
    posts.en,
    posts.it,
    posts.pt
  ]
};
