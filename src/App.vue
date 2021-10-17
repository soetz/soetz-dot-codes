<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Background from "./components/Background.vue";
import Nav from "./components/Nav.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Nav />
  <RouterView />
  <Background />
</template>

<style>
#app {
  font-family: boreal, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

html {
  overflow: hidden;
}

* {
  box-sizing: border-box;
}
</style>
