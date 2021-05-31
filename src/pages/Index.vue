<template>
  <Layout>
    <div>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      
      <h1>{{ $t("welcome") }}</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
        Dolores, aperiam non officia eos quod asperiores
      </p>
      <g-image src="http://placeimg.com/1600/900/city" />
      <p>ab voluptatem voluptatem</p>      
      <p>
        Sit velit vel autem autem ex dolor quam. At fuga ut veritatis sequi
        optio rerum omnis odio. Minus sequi nisi odio et. Qui delectus nulla
        explicabo odio aperiam unde pariatur.        
      </p>
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
  @apply mr-2  
}
</style>
