<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { onBeforeUnmount, onMounted, watch } from "@vue/runtime-core";
import Logo from "./Logo.vue";
import MenuButton from "./MenuButton.vue";
import Nav from "./Nav.vue";
import { ref } from "@vue/reactivity";

const menuIsOpen = ref(false);
const isScrolled = ref(false);
const route = useRoute();

const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value;
};

const menuBackgroundClick = () => {
  menuIsOpen.value = false;
};

const defineScrolled = () => {
  isScrolled.value = window.scrollY !== 0;
};

onMounted(() => {
  watch(
    () => route.path,
    () => {
      menuIsOpen.value = false;
    }
  );

  window.addEventListener("scroll", defineScrolled);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", defineScrolled);
});
</script>

<template>
  <header :class="{ 'menu-open': menuIsOpen, 'scrolled': isScrolled }">
    <div class="header-responsive-container">
      <div class="menu-background" @click="menuBackgroundClick"></div>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <div class="menu">
        <Nav class="navigation" />
        <MenuButton
          class="menu-button"
          :menu-is-open="menuIsOpen"
          @click="toggleMenu"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  z-index: 10;

  background-color: rgba(var(--theme-900-rgb), 0);
  backdrop-filter: blur(0px);
  box-shadow: rgba(10, 10, 10, 0) 0 0 20px;

  width: 100%;

  position: fixed;

  top: 0;
  bottom: calc(100vh - 102px);

  transition: bottom 0.5s ease-out, background-color 0.4s ease-in-out,
    backdrop-filter 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
}

.header-responsive-container {
  width: 100%;
  max-width: 800px;

  margin-left: auto;
  margin-right: auto;
}

header.scrolled,
header.menu-open {
  background-color: rgba(var(--theme-900-rgb), 0.6);
  backdrop-filter: blur(5px);
  box-shadow: rgba(10, 10, 10, 0.6) 0 0 20px;
}

header.menu-open {
  bottom: 0;

  transition: bottom 0.5s ease-in;
}

.menu {
  display: flex;

  align-items: flex-start;

  pointer-events: none;

  width: 100%;

  position: relative;
  right: calc(100vw - 56px);

  transition: transform 0.5s ease-in-out;
}

.menu-open .menu {
  transform: translateX(calc(100vw - 56px));
}

.menu-background {
  position: absolute;

  left: 0;
  top: 60px;
  right: 0;
  bottom: 0;
}

.navigation {
  width: 100%;
}

@media screen and (min-width: 600px) {
  .menu {
    right: 0;

    transition: none;
  }

  .menu-open .menu {
    transform: none;
  }

  header.menu-open {
    transform: none;
  }

  .menu-button {
    display: none;
  }
}
</style>
