<script setup lang="ts">
import Logo from "./Logo.vue";
import MenuButton from "./MenuButton.vue";
import Nav from "./Nav.vue";
import { RouterLink } from "vue-router";
import { ref } from "@vue/reactivity";

const menuIsOpen = ref(false);

const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value;
};
</script>

<template>
  <header>
    <RouterLink to="/">
      <Logo />
    </RouterLink>
    <div class="menu" :class="{ 'menu-open': menuIsOpen }">
      <Nav class="navigation" />
      <MenuButton
        class="menu-button"
        :menu-is-open="menuIsOpen"
        @click="toggleMenu"
      />
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  max-width: 800px;

  margin-left: auto;
  margin-right: auto;
}

.menu {
  display: flex;

  align-items: flex-start;

  width: 100%;

  position: relative;
  right: calc(100vw - 58px);

  transition: transform 0.5s ease-in-out;
}

.menu.menu-open {
  transform: translateX(calc(100vw - 58px));
}

.navigation {
  width: 100%;
}

@media screen and (min-width: 600px) {
  .menu {
    right: 0;

    transition: none;
  }

  header.menu-open {
    transform: none;
  }

  .menu-button {
    display: none;
  }
}
</style>
