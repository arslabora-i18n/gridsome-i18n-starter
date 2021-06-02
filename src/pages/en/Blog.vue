<template>
  <Layout>
    <div class="container max-w-screen-md mx-auto">
      <section>
        <article>
          <h1 class="capitalize">{{ $t("blog") }}</h1>
          <h3>Publications in English</h3>
          <hr />
          <g-link
            v-for="post in $page.posts.edges"
            :key="post.id"
            class="post"
            :to="post.node.locale + '/' + post.node.slug"
          >
            <div class="post">
              <h3>
                <b>{{ post.node.title }}</b>
              </h3>
              <p>Path: {{ post.node.path }}</p>
              <p>Slug: {{ post.node.slug }}</p>
              <p>Locale: {{ post.node.locale }}</p>
            </div>
          </g-link>
        </article>
      </section>
    </div>
  </Layout>
</template>

<page-query>
	query {
		posts: allPostEn {
			edges {
				node {
					id
          path
          slug
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
