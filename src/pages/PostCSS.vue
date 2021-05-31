<template>
  <Layout>
    <div class="container max-w-screen-md mx-auto">
      <h1>LostGrid</h1>
      <article>
        <h3>Basic Columns</h3>
        <section>
          <span class="bg-red-200">1</span>
          <span class="bg-green-200">2</span>
          <span class="bg-blue-200">3</span>
          <span class="bg-yellow-200">4</span>          
        </section>

        <h3>Controlling Cycle</h3>
        <section class="row">
          <div class="quarter">1</div>
          <div class="half">2</div>
          <div class="quarter">3</div>          
        </section>

        <h3>Masonry</h3>
        <section class="masonry-container">
          <div class="masonry-item"><g-image src="http://placeimg.com/480/960/nightlife" /></div>
          <div class="masonry-item"><g-image src="http://placeimg.com/900/600/animals" /></div>
          <div class="masonry-item"><g-image src="http://placeimg.com/720/300/sports" /></div>
          <div class="masonry-item"><g-image src="http://placeimg.com/900/600/sports" /></div>
          <div class="masonry-item"><g-image src="http://placeimg.com/500/500/any" /></div>
          <div class="masonry-item"><g-image src="http://placeimg.com/400/700/any" /></div>
          <div class="masonry-item"><g-image src="http://placeimg.com/600/900/animals" /></div>
          <div class="masonry-item"><g-image src="http://placeimg.com/500/500/city" /></div>
        </section>
      </article>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  lost-utility: clearfix;
}

span {
  lost-column: 1/2;
}

.row {
  lost-utility: clearfix;
}

.quarter {
  lost-column: 1/4 0;
  background-color: lightseagreen;
}

.half {
  lost-column: 1/2 0;
  background-color: lightgoldenrodyellow;
}

.masonry-container {
  lost-masonry-wrap: no-flex;
}

.masonry-item {
  lost-masonry-column: 1/2;
}
</style>
