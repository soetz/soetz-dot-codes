<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { onBeforeUnmount, onMounted, watch } from "@vue/runtime-core";
import BarCode from "./BarCode.vue";
import Controls from "./Controls.vue";
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
    <div class="barcode-container">
      <BarCode class="barcode" />
    </div>
    <div class="header-responsive-container">
      <div class="menu-background-fullscreen"></div>
      <div class="menu-background-normal"></div>
      <div class="menu-background-hitbox" @click="menuBackgroundClick"></div>
      <RouterLink class="main-link" to="/">
        <Logo />
      </RouterLink>
      <div class="menu">
        <div class="menu-content">
          <Nav class="navigation" />
          <Controls class="controls-container" />
        </div>
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

  width: 100%;

  position: fixed;

  top: 0;
  bottom: calc(100vh - 102px);

  transition: bottom 0.5s ease-out, background-color 0.4s ease-in-out,
    backdrop-filter 0.4s ease-in-out, -webkit-backdrop-filter 0.4s ease-in-out,
    box-shadow 0.4s ease-in-out;
}

.header-responsive-container {
  width: 100%;
  max-width: 800px;

  margin-left: auto;
  margin-right: auto;

  pointer-events: none;
}

.menu-background-hitbox,
.main-link {
  pointer-events: all;
}

header.menu-open {
  bottom: 0;

  transition: bottom 0.5s ease-in;
}

.menu-background-normal {
  z-index: -10;

  background-color: rgba(var(--theme-10-rgb), 0);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  box-shadow: 3px 6px 6px rgba(0, 0, 0, 0), 7px 14px 15px rgba(0, 0, 0, 0),
    15px 30px 33px rgba(0, 0, 0, 0), 50px 100px 120px rgba(0, 0, 0, 0);

  width: 100%;
  height: 102px;

  position: fixed;

  left: 0;
  top: 0;
  right: 0;

  transition: background-color 0.4s ease-in-out,
    backdrop-filter 0.4s ease-in-out, -webkit-backdrop-filter 0.4s ease-in-out,
    box-shadow 0.4s ease-in-out;
}

.theme-dark .menu-background-normal {
  background-color: rgba(var(--theme-900-rgb), 0);
}

header.scrolled .menu-background-normal {
  background-color: var(--theme-10);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.01),
    7px 14px 15px rgba(0, 0, 0, 0.016), 15px 30px 33px rgba(0, 0, 0, 0.022),
    50px 100px 120px rgba(0, 0, 0, 0.035);
}

.theme-dark header.scrolled .menu-background-normal {
  background-color: var(--theme-700);
}

header.scrolled.menu-open .menu-background-normal {
  background-color: rgba(var(--theme-10-rgb), 0);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  box-shadow: 3px 6px 6px rgba(0, 0, 0, 0), 7px 14px 15px rgba(0, 0, 0, 0),
    15px 30px 33px rgba(0, 0, 0, 0), 50px 100px 120px rgba(0, 0, 0, 0);
}

.theme-dark header.scrolled.menu-open .menu-background-normal {
  background-color: rgba(var(--theme-900-rgb), 0);
}

.menu-background-fullscreen {
  z-index: -10;

  position: fixed;

  left: 0;
  top: 0;
  right: 0;
  bottom: 100vh;

  background-color: var(--theme-10);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.01),
    7px 14px 15px rgba(0, 0, 0, 0.016), 15px 30px 33px rgba(0, 0, 0, 0.022),
    50px 100px 120px rgba(0, 0, 0, 0.035);

  transition: bottom 0.5s ease-out, background-color 0.5s ease-in-out;
}

.theme-dark .menu-background-fullscreen {
  background-color: var(--theme-700);
}

header.menu-open .menu-background-fullscreen {
  bottom: 0;

  transition: bottom 0.5s ease-in, background-color 0.5s ease-in-out;
}

@supports (
  (backdrop-filter: blur(5px)) or (-webkit-backdrop-filter: blur(5px))
) {
  header.scrolled .menu-background-normal {
    background-color: rgba(var(--theme-10-rgb), 0.6);
  }

  .theme-dark header.scrolled .menu-background-normal {
    background-color: rgba(var(--theme-900-rgb), 0.6);
  }

  .menu-background-fullscreen {
    background-color: rgba(var(--theme-10-rgb), 0.6);
  }

  .theme-dark .menu-background-fullscreen {
    background-color: rgba(var(--theme-900-rgb), 0.6);
  }
}

.menu {
  display: flex;

  align-items: flex-start;

  width: 100%;

  position: relative;
  right: calc(100% - 56px);

  transition: transform 0.5s ease-in-out;
}

.menu-open .menu {
  transform: translateX(calc(100% - 56px));
}

.menu-background-hitbox {
  position: absolute;

  left: 0;
  top: 60px;
  right: 0;
  bottom: 0;
}

.menu-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
}

.navigation {
  width: 100%;
}

.controls-container {
  margin-top: 10px;
  margin-right: 20px;

  pointer-events: all;

  opacity: 0;

  transition: opacity 0.2s ease-in;
}

.menu-open .controls-container {
  opacity: 1;

  transition: opacity 0.3s 0.7s ease-in;
}

.barcode-container {
  position: absolute;

  bottom: 0;

  opacity: 0;

  transition: opacity 0.1s ease-in-out;
}

@media screen and (max-height: 499px) and (max-width: 599px) {
  .barcode-container {
    display: none;
  }
}

.menu-open .barcode-container {
  opacity: 1;

  transition: opacity 0.5s 0.2s ease-in-out;
}

.barcode {
  padding-left: 13px;
  padding-bottom: 10px;

  width: 150px;
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

  .controls-container {
    position: absolute;
    top: -46px;
    right: 0;

    margin-top: 0;
    margin-right: 14px;

    opacity: 1;
  }

  .menu-open .barcode-container {
    display: none;
  }

  .barcode-container {
    transform: rotate(-90deg);

    right: calc(50% - 505px);
    top: 0;
  }

  .barcode {
    width: 90px;

    padding-left: 5px;
    padding-bottom: 0;
    padding-right: 5px;
  }
}

@media screen and (min-width: 1000px) {
  .barcode-container {
    opacity: 1;
  }
}
</style>
