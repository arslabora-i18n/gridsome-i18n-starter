// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

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

  api.createPages(async ({ createPage, graphql }) => {
    const { data } = await graphql(`
      {
        posts: allPost {
          edges {
            node {
              id
              ref
              slug
              path
              title
              locale
              fileInfo {
                name
              }
            }
          }
        }
      }
    `);

      for (const {
        node
      } of data.posts.edges) {
      const fileName = node.fileInfo.name.replace(`.${node.locale}`, "");

      const {
        data: dataPostsTranslations
      } = await graphql(`{
        posts: allPost(filter: {            
            fileInfo: {
              name: {
                regex: "^${fileName}"
              }
            }
          }) {
          edges {
            node {
              id
              ref
              slug
              path
              locale              
              fileInfo {
                name
              }
            }
          }
        }
      }`);

      createPage({
        path: `/${node.locale}` + `/blog` + `/${node.slug}/`,
        component: "./src/templates/Post.vue",
        context: {
          id: node.id,
          locale: node.locale,
          translations: dataPostsTranslations.posts.edges.map(({
            node
          }) => ({
            path: `${node.locale}` + `/blog` + `/${node.slug}/`,
            locale: node.locale
          }))
        },
        route: {
          meta: {
            locale: node.locale
          }
        }
      });
    }
    //
  });
};
