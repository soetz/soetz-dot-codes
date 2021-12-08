<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import { throttle } from "lodash";

const parallaxStyle = ref({});

const props = defineProps({
  speed: {
    type: Number,
    default: 0,
  },
});

onMounted(() => {
  const updateParallaxOffset = throttle(() => {
    parallaxStyle.value = { top: `${window.scrollY * props.speed}px` };
  }, 10);

  window.addEventListener("scroll", updateParallaxOffset);
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

  transition: top 0.02s linear;
}
</style>
