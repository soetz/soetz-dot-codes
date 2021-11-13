<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import Background from "./components/Background.vue";
import ContactCallToAction from "./components/ContactCallToAction.vue";
import Header from "./components/Header.vue";
import ThemeContainer from "./components/ThemeContainer.vue";
import { themeService } from "./services";
import { watch } from "@vue/runtime-core";

const route = useRoute();
watch(
  () => route.meta.color,
  (newColor: string) => {
    themeService.setThemeColor(newColor);
  }
);
</script>

<template>
  <ThemeContainer class="general-container">
    <Header />
    <main>
      <RouterView />
    </main>
    <ContactCallToAction />
    <Background class="background" />
  </ThemeContainer>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: boreal, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--theme-900);

  width: 100%;
  height: 100vh;
}

.general-container {
  width: 100%;
  height: 100%;

  padding-top: 102px;
}

main {
  padding-bottom: 150px;
}

.background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;

  background-color: var(--theme-900);
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
