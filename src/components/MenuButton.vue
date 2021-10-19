<script setup lang="ts">
defineProps({
  menuIsOpen: Boolean,
});

//defineEmits(["click"]);
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
      <polyline v-if="!menuIsOpen" points="13.93,19.07 21,12 13.93,4.93 " />
      <polyline v-if="menuIsOpen" points="10.07,19.07 3,12 10.07,4.93 " />
    </svg>
  </button>
</template>

<style scoped>
.menu-button {
  display: block;
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
