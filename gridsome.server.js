// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({
    addCollection
  }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.chainWebpack(config => {
    // allow for i18n block, as for single-file-component specifications
    // https://kazupon.github.io/vue-i18n/guide/sfc.html#basic-usage
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type("javascript/auto")
      .use("i18n")
      .loader("@kazupon/vue-i18n-loader")
      .end()
      .use("yaml")
      .loader("yaml-loader")
      .end();
  });
}
