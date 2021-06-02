<template>
  <Layout>
    <div class="container max-w-screen-md mx-auto"></div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id
        path
        title                
        locale
        content        
      }
    }    
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Blog",
  },
};
</script>
