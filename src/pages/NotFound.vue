<script setup lang="ts">
import { RouterLink } from "vue-router";
import SadPhoto from "../components/SadPhoto.vue";
</script>

<template>
  <section class="limited-width">
    <SadPhoto />
    <h1>Whoops! That’s embarrassing.</h1>
    <p>
      There’s nothing to see here&nbsp;− some people also call that a 404. Let’s
      <RouterLink class="link-block" to="/">go back home</RouterLink>, shall we?
    </p>
  </section>
</template>

<style scoped>
section {
  margin-top: 20px;

  text-align: center;
}

.limited-width {
  width: 100%;
  max-width: 800px;

  margin-left: auto;
  margin-right: auto;

  padding-left: 13px;
  padding-right: 13px;
  padding-bottom: 13px;
}
</style>
