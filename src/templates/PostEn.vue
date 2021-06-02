<template>
<Layout>
  <div>
    <h1 v-html="$page.post.title" />
    <div v-html="$page.post.content" />    
  </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: postEn(id: $id) {
    ref
    title
    content
  }
}
</page-query>