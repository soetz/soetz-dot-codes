<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { RouterView, useRoute } from "vue-router";
import Background from "./components/Background.vue";
import Header from "./components/Header.vue";

const route = useRoute();
</script>

<template>
  <div
    :class="[route.meta.color ? 'theme-' + route.meta.color : 'theme-orange']"
    class="theme-dark"
  >
    <Header />
    <RouterView />
    <Background class="background" />
  </div>
</template>

<style>
@import "./assets/colors.css";
@import "./assets/theme.css";

#app {
  font-family: boreal, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--theme-900);
}

.theme-dark {
  color: var(--theme-10);
}

html {
  overflow: hidden;
}

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
