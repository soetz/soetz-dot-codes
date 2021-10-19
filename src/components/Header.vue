<script setup lang="ts">
import MenuButton from "./MenuButton.vue";
import Nav from "./Nav.vue";
import { ref } from "@vue/reactivity";

const menuIsOpen = ref(true);

const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value;
};
</script>

<template>
  <header>
    <Nav v-if="menuIsOpen" />
    <MenuButton :menu-is-open="menuIsOpen" @click="toggleMenu" />
  </header>
</template>

<style scoped>
img {
  width: 40px;
}
</style>
