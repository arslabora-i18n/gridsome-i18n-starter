<template>
  <Layout>
    <div>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->

      <h1>{{ $t("welcome") }}</h1>

      <p>
        {{ $t('message') }}
      </p>
      <g-image src="~/assets/images/catty.jpg" width="900" />
      
    </div>

    <div>
      <p class="home-links">
        <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
          >Gridsome Docs</a
        >
        <a
          href="https://github.com/gridsome/gridsome"
          target="_blank"
          rel="noopener"
          >GitHub</a
        >
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  @apply mr-2;
}
</style>
