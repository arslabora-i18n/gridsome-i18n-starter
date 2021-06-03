<template>
  <div class="layout prose prose-green prose-lg">
    <header class="header">
      <div>
        <locale-switcher-posts></locale-switcher-posts>
      </div>
      <nav class="nav">
        <g-link class="nav__link" :to="$tp('/')">Home</g-link>
        <g-link class="nav__link" :to="$tp($t('ref.about'))">About</g-link>
        <g-link class="nav__link" :to="$tp($t('ref.postcss'))">PostCSS</g-link>
        <g-link class="nav__link" :to="$tp($t('ref.blog'))">Blog</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import LocaleSwitcherPosts from "@/components/LocaleSwitcherPosts.vue";
export default {
  components: {
    LocaleSwitcherPosts,
  },
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
