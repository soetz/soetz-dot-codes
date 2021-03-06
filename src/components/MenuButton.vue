<script setup lang="ts">
import gsap from "gsap";
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

const ARROW_OPEN = "10.07,19.07 3,12 10.07,4.93";
const ARROW_CLOSED = "13.93,19.07 21,12 13.93,4.93";

const props = defineProps({
  menuIsOpen: Boolean,
});

let arrowShape = ref("");
arrowShape.value = props.menuIsOpen ? ARROW_OPEN : ARROW_CLOSED;

watch(
  () => props.menuIsOpen,
  (open) => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion)"
    ).matches;
    if (!prefersReducedMotion) {
      if (open) {
        gsap.to(arrowShape, {
          duration: 0.3,
          delay: 0.4,
          ease: "power2",
          value: ARROW_OPEN,
        });
      } else {
        gsap.to(arrowShape, {
          duration: 0.3,
          delay: 0.4,
          ease: "power2",
          value: ARROW_CLOSED,
        });
      }
    } else {
      if (open) {
        gsap.set(arrowShape, {
          delay: 0.4,
          ease: "power2",
          value: ARROW_OPEN,
        });
      } else {
        gsap.set(arrowShape, {
          delay: 0.4,
          ease: "power2",
          value: ARROW_CLOSED,
        });
      }
    }
  }
);
</script>

<template>
  <button class="menu-button" aria-labelledby="menu-button-title">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      role="img"
      aria-describedby="menu-button-description"
    >
      <title id="menu-button-title">Open or close the menu</title>
      <desc id="menu-button-description">
        An arrow that changes direction depending on whether clicking it will
        open or close the menu.
      </desc>
      <line x1="3" y1="12" x2="21" y2="12" />
      <polyline :points="arrowShape" />
    </svg>
  </button>
</template>

<style scoped>
.menu-button {
  display: block;

  padding-left: 8px;

  border-left-style: none;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  background-color: transparent;

  cursor: pointer;

  pointer-events: all;
}

svg {
  width: 42px;

  fill: none;
  stroke-width: 2;

  stroke: var(--theme-700);
}

.theme-dark svg {
  stroke: var(--theme-20);
}

.theme-transition svg {
  transition: stroke 0.5s ease-in-out;
}
</style>
