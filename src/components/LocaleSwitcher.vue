<template>
  <select v-model="currentLocale" @change="localeChanged">
    <option v-for="locale in availableLocales" :key="locale" :value="locale">{{ locale }}</option>
  </select>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data: function () {
    return {
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales
    }
  },
  methods: {
    localeChanged () {
      this.$router.push({        
        path: this.$tp( // get the translated path
          this.$t(this.$context.slug, this.currentLocale), // using slugs translations
          this.currentLocale, true)        
      })
    }
  }
}
</script>