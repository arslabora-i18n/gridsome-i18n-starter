<template>
  <div class="layout prose prose-green prose-lg">
    <header class="header">
      <div>
        <locale-switcher></locale-switcher>
      </div>
      <div>
        <menu-main></menu-main>
      </div>
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
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
import MenuMain from "@/components/Menu/Main.vue";
export default {
  components: {
    LocaleSwitcher,
    MenuMain,
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
