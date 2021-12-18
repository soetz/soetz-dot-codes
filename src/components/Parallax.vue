<script setup lang="ts">
import { onMounted, onUnmounted } from "@vue/runtime-core";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  speed: {
    type: Number,
    default: 0,
  },
  start: {
    type: String,
    default: "",
  },
});

let animation: gsap.core.Timeline | undefined;

onMounted(() => {
  animation = gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger",
      start: 0,
      end: 800,
      scrub: 0.5,
    },
  });
  animation.to(".parallax", {
    y: 400 * props.speed,
    duration: 1,
  });
});

onUnmounted(() => {
  animation = undefined;
});
</script>

<template>
  <div class="trigger">
    <div class="parallax" role="presentation">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.parallax {
  height: 100%;
}
</style>
