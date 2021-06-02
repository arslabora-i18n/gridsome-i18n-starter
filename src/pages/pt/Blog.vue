<template>
  <Layout>
    <div class="container max-w-screen-md mx-auto">
      <section>
        <article>
          <h1 class="capitalize">{{ $t("blog") }}</h1>
          <h3>Publicações em portugues</h3>
          <hr />
          <g-link
            v-for="post in $page.posts.edges"
            :key="post.id"
            class="post"
            :to="post.node.path"
          >
            <div class="post">
              <h3>
                <b>{{ post.node.title }}</b>
              </h3>
            </div>
          </g-link>
        </article>
      </section>
    </div>
  </Layout>
</template>

<page-query>
	query {
		posts: allPostPt {
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
