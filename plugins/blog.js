module.exports = {
  use: '@gridsome/source-filesystem',
  options: {
    typeName: 'Post',
    path: './src/content/blog/**/*.md',
  }
}
