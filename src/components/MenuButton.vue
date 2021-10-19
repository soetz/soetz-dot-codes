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
    //TODO prefers reduced motion
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
  }
);
</script>

<template>
  <button class="menu-button">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <polyline :points="arrowShape" />
    </svg>
  </button>
</template>

<style scoped>
.menu-button {
  display: block;

  padding: 10px;

  border: none;
  background-color: transparent;
}

svg {
  width: 42px;

  fill: none;
  stroke: var(--theme-20);
  stroke-width: 2;
}
</style>
