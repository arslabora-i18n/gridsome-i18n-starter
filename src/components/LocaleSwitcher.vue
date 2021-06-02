<template>
  <select v-model="currentLocale" @change="localeChanged">
    <option v-for="locale in availableLocales" :key="locale" :value="locale">
      {{ locale }}
    </option>
  </select>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data: function () {
    return {
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales,
    };
  },
  methods: {
    localeChanged() {
      this.$router.push({        
        // get the translated path,...
        path: this.$tp(
          // ...using "ref" key translations,...
          this.$t("ref." + this.$context.ref, this.currentLocale), 
          // ...and set the new locale!
          this.currentLocale,
          true          
        ),
      });
    },
  },
};
</script>