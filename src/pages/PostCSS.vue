<template>
  <Layout>
    <div class="container max-w-screen-md mx-auto">
      <h1>PostCSS</h1>
      <p>
        We can register and use any postcss plugin we want. This boilerplate
        come with some plugins already configured.
      </p>

      <h2>LostGrid</h2>

      <article>
        <h3>Basic Columns</h3>
        <section>
          <span class="bg-red-200">1</span>
          <span class="bg-green-200">2</span>
          <span class="bg-blue-200">3</span>
          <span class="bg-yellow-200">4</span>
        </section>

        <pre>
&lt;section&gt;
  &lt;span class=&quot;bg-red-200&quot;&gt;1&lt;/span&gt;
  &lt;span class=&quot;bg-green-200&quot;&gt;2&lt;/span&gt;
  &lt;span class=&quot;bg-blue-200&quot;&gt;3&lt;/span&gt;
  &lt;span class=&quot;bg-yellow-200&quot;&gt;4&lt;/span&gt;    
&lt;/section&gt;

section {
    lost-utility: clearfix;
}

span {
  lost-column: 1/2;
}                
</pre
        >

        <h3>Controlling Cycle</h3>
        <section class="row">
          <div class="quarter">1</div>
          <div class="half">2</div>
          <div class="quarter">3</div>
        </section>

        <pre>
&lt;section class=&quot;row&quot;&gt;
  &lt;div class=&quot;quarter&quot;&gt;1&lt;/div&gt;
  &lt;div class=&quot;half&quot;&gt;2&lt;/div&gt;
  &lt;div class=&quot;quarter&quot;&gt;3&lt;/div&gt;
&lt;/section&gt;

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
</pre
        >

        <h3>Masonry</h3>
        <section class="masonry-container">
          <div class="masonry-item">
            <g-image src="~/assets/images/cats/cat06.jpg" />
          </div>
          <div class="masonry-item">
            <g-image src="~/assets/images/cats/cat01.webp" />
          </div>
          <div class="masonry-item">
            <g-image src="~/assets/images/cats/cat02.jpg" />
          </div>
          <div class="masonry-item">
            <g-image src="~/assets/images/cats/cat03.jpg" />
          </div>
          <div class="masonry-item">
            <g-image src="~/assets/images/cats/cat04.webp" />
          </div>
          <div class="masonry-item">
            <g-image src="~/assets/images/cats/cat08.png" />
          </div>
          <div class="masonry-item">
            <g-image src="~/assets/images/cats/cat07.jpg" />
          </div>
          <div class="masonry-item">
            <g-image src="~/assets/images/cats/cat05.jpg" />
          </div>
        </section>

        <pre>
&lt;section class=&quot;masonry-container&quot;&gt;
        &lt;div class=&quot;masonry-item&quot;&gt;
          &lt;g-image src=&quot;~/assets/images/cats/cat06.jpg&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;masonry-item&quot;&gt;
          &lt;g-image src=&quot;~/assets/images/cats/cat01.webp&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;masonry-item&quot;&gt;
          &lt;g-image src=&quot;~/assets/images/cats/cat08.png&quot; /&gt;
        &lt;/div&gt;
        ...

.masonry-container {
  lost-masonry-wrap: no-flex;
}

.masonry-item {
  lost-masonry-column: 1/2;
}
</pre
        >
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
