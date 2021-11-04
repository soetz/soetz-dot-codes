<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { RouterView, useRoute } from "vue-router";
import Background from "./components/Background.vue";
import ContactCallToAction from "./components/ContactCallToAction.vue";
import Header from "./components/Header.vue";

const route = useRoute();
</script>

<template>
  <div
    class="general-container theme-dark"
    :class="[route.meta.color ? 'theme-' + route.meta.color : 'theme-orange']"
  >
    <Header />
    <main>
      <RouterView />
    </main>
    <ContactCallToAction />
    <Background class="background" />
  </div>
</template>

<style>
@import "./assets/colors.css";
@import "./assets/theme.css";

* {
  box-sizing: border-box;
}

html {
  background-color: var(--orange-900);
}

body {
  margin: 0;
}

#app {
  font-family: boreal, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--theme-900);

  width: 100vw;
  height: 100vh;
}

.general-container {
  width: 100%;
  height: 100%;

  padding-top: 102px;
}

.theme-dark {
  color: var(--theme-10);
}

.background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
