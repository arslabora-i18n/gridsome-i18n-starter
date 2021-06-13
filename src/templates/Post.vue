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
  post: post(id: $id) {
    ref
    title
    content
  }
}
</page-query>

<script>
import Layout from "~/layouts/Posts.vue";

export default {
  components: {
    Layout,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          // name: "description",
          // content: this.$page.post.description,
        },
      ],
    };
  },
  computed: {
    translations() {
      return this.$context.translations.filter(
        (translation) => translation.locale !== this.$context.locale
      );
    },
  },
};
</script>