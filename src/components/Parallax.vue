<script setup lang="ts">
import { onMounted, onUnmounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import { throttle } from "lodash";

const parallaxStyle = ref({});

const props = defineProps({
  speed: {
    type: Number,
    default: 0,
  },
});

const updateParallaxOffset = throttle(() => {
  parallaxStyle.value = {
    transform: `translateY(${window.scrollY * props.speed}px)`,
  };
}, 10);

onMounted(() => {
  window.addEventListener("scroll", updateParallaxOffset);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateParallaxOffset);
});
</script>

<template>
  <div class="parallax" :style="parallaxStyle">
    <slot></slot>
  </div>
</template>

<style scoped>
.parallax {
  position: relative;
}
</style>
