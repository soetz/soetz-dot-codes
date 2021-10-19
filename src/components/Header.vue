<script setup lang="ts">
import MenuButton from "./MenuButton.vue";
import Nav from "./Nav.vue";
import { ref } from "@vue/reactivity";

const menuIsOpen = ref(false);

const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value;
};
</script>

<template>
  <header :class="{ 'menu-open': menuIsOpen }">
    <Nav class="navigation" />
    <MenuButton :menu-is-open="menuIsOpen" @click="toggleMenu" />
  </header>
</template>

<style scoped>
header {
  display: flex;

  align-items: flex-start;

  width: 100%;

  position: relative;
  right: calc(100vw - 62px);

  transition: transform 0.5s ease-in-out;
}

header.menu-open {
  transform: translateX(calc(100vw - 62px));
}

.navigation {
  width: 100%;
}
</style>
