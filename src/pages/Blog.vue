<template>
  <Layout>
    <div class="container max-w-screen-md mx-auto">
      <section>
        <article>
          <h1 class="capitalize">{{ $t("blog") }}</h1>
          <h3>{{ $t("subtitle") }}</h3>
          <hr />
          <g-link
            v-for="post in $page.posts.edges"
            :key="post.id"
            class="post"
            :to="post.node.locale + `/blog/` + post.node.slug"
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

<i18n>
{
  "en": {
    "subtitle": "Publications in English"
  },
  "it": {
    "subtitle": "Pubblicazioni in Italiano"
  },
  "pt": {
    "subtitle": "Publicações em Portugues"
  }
}
</i18n>

<page-query>
	query ($locale:String) {
		posts: allPost(filter: { locale: { eq: $locale } }) {
			edges {
				node {
					id
          ref
          slug
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
