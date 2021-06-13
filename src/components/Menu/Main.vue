<template>
  <nav class="nav">
    <g-link class="nav__link" :to="$tp('/')">Home</g-link>
    <g-link class="nav__link" :to="$tp($t('ref.about'))">{{
      $t("menu.about")
    }}</g-link>
    <g-link class="nav__link" :to="$tp($t('ref.features'))">{{
      $t("menu.features")
    }}</g-link>
    <g-link class="nav__link" :to="$tp($t('ref.postcss'))">{{
      $t("menu.postcss")
    }}</g-link>
    <g-link class="nav__link" :to="$tp($t('ref.blog'))">{{
      $t("menu.blog")
    }}</g-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>