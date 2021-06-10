const en = {
  use: "@gridsome/source-filesystem",
  options: {
    typeName: "Post",
    path: "./src/content/posts/**/*.en.md"
  }
};

const it = {
  use: "@gridsome/source-filesystem",
  options: {
    typeName: "Post",
    path: "./src/content/posts/**/*.it.md"
  }
};

const pt = {
  use: "@gridsome/source-filesystem",
  options: {
    typeName: "Post",
    path: "./src/content/posts/**/*.pt.md"
  }
};

module.exports.en = en;
module.exports.it = it;
module.exports.pt = pt;