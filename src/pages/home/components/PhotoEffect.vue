<script setup lang="ts">
import { onMounted, onUnmounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import { themeService } from "../../../services";

const removeColorAnimation = ref(false);
const hideEffect = ref(false);

/*
  Don’t ask me why, but it seems to me that Safari does not recalculate
  animations that depend on css variables when they change, at least in some
  cases.

  That’s why we need to hack a bit and add and remove very quickly ("blink") a
  class that removes the animation in question to force Safari to recalculate
  it. It has no impact since the effect is hidden at that moment anyway.
*/
const forceColorAnimationRecalculation = () => {
  removeColorAnimation.value = true;
  setTimeout(() => {
    removeColorAnimation.value = false;
  }, 10);
};

const hideEffectDuringTransition = () => {
  hideEffect.value = true;
  setTimeout(() => {
    hideEffect.value = false;
  }, 500);
};

onMounted(() => {
  forceColorAnimationRecalculation();
  hideEffectDuringTransition();
  themeService.addEventListener("theme-change", hideEffectDuringTransition);
});

onUnmounted(() => {
  themeService.removeEventListener("theme-change", hideEffectDuringTransition);
});
</script>

<template>
  <svg
    :class="{
      'hide-effect': hideEffect,
      'remove-color-animation': removeColorAnimation,
    }"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 900 1400"
    aria-hidden="true"
  >
    <defs>
      <path
        id="shape"
        d="M858.1,857.4c-4.2-27.1-17.8-55.4-15.6-82.5c5.1-5.6,10.9-9.8,7.1-18.6c-5.2-16.5-1.1-35.1-9.9-51.2
	c-10.8-24.3-22.4-48.2-30-73.8c-24.1-49.1-42.6-101.6-75.1-146c-23.5-27.4-52.4-49.1-83.6-66.9c-24.2-16.7-49.8-30.9-76-44.3
	c-7.7-6.9-16-10.9-26-13.2c-7-3.5-19-7.6-20.7-16.4c-1.9-25.2,10.8-47,14.2-71.7c17.4-18.4,21.6-44,24-68.6
	c1.3-17.2-7.2-33.2-8.9-50.1c5.2-17.1-7.1-28-2.4-44.1c1.8-6.1-1.2-10.1-5.5-13.2c-3.2-2.3-5.1-4.5-6.1-8.7c-2.2-7.3-7.9-14-11.3-21
	c-2.7-4.2-7.8-7.6-9.4-12.2c0-4.5-3.1-5.7-6.4-6.2c-11.5-1.4-19-10.3-28.5-15.3c-11.2-2.4-22.4-4.5-33.5-6.8
	c-57.9-14.1-97.6,35.7-130.3,75.3c-9.1,10.9-11.1,23.8-10.7,37.4c-0.1,6.4,4.7,12.8,0.2,18.7c-10.2,21.9-0.8,14.3-2.3,27.9
	c-2,22.7-6.1,52.9,7.8,72.4c3,3.1,3.3,9.3,4.1,14.2c3.1,18,8.4,35.1,17.7,50.9c7.5,12.1,16.4,23,17.7,37.7
	c11.5,28.3-76.2,46.4-95,64.8c-27.8,19.6-63.3,26.9-85.4,54.1c-22.6,22.8-33.8,52.9-47.3,81.3c-12.2,19.5-23.7,39.4-34.2,59.9
	c-6.6,9.9-16.6,15.4-18.3,28.6c-2.5,11,2.8,17.4,7.5,24.7c9.2,12.9-8,40.1-11.2,55.8c-6,16.2-7.5,33.3-10.6,50
	c-5.2,22.4-11.7,44.6-10.7,67.8c1.5,48.7,0.7,97.7,10,145.7c11.5,91,10.6,187.6,55.8,270c4.8,12.9,23.2,42.4,33.5,27
	c7.3,10.2,11.2,35.1,28.2,24.5c5.9,15.1,12.1,7.4,16,16c3.3,23,2.4,46.4,9.3,68.8h501.1c1.6-13.3-14.5-41.3-7.1-49.4
	c14.5-11.3,27.7-24.2,41.3-36.5c13.2-12.1,30.9-21.1,35.6-39.6c31.3-89.6,66.8-179.3,70.8-275.1c0.4-21.1,1.3-42.2,3.9-63.1
	C852.3,909.5,865,884.1,858.1,857.4z"
      />
    </defs>
    <g class="silhouettes">
      <use xlink:href="#shape" x="800" />
      <use xlink:href="#shape" x="720" />
      <use xlink:href="#shape" x="640" />
      <use xlink:href="#shape" x="560" />
      <use xlink:href="#shape" x="480" />
      <use xlink:href="#shape" x="400" />
      <use xlink:href="#shape" x="320" />
      <use xlink:href="#shape" x="240" />
      <use xlink:href="#shape" x="160" />
      <use xlink:href="#shape" x="80" />
    </g>
  </svg>
</template>

<style scoped>
svg {
  overflow-x: visible;
  overflow-y: visible;
}

.silhouettes > * {
  animation-name: silhouette-wave, color-wheel-light;
  animation-duration: 2.5s, 2s;
  animation-timing-function: ease-in-out, linear;
  animation-delay: 0s, 0s;
  animation-iteration-count: infinite, infinite;
  animation-direction: alternate, alternate;
}

.theme-dark .silhouettes > * {
  animation-name: silhouette-wave, color-wheel-dark;
}

.theme-transition .silhouettes > * {
  transition: fill 1s ease-in-out;
}

.theme-transition .silhouettes {
  opacity: 1;

  transition: opacity 0.5s ease-in-out;
}

.remove-color-animation .silhouettes > * {
  animation-name: silhouette-wave;
}

.hide-effect .silhouettes {
  opacity: 0;

  transition: none;
}

.silhouettes :nth-child(2) {
  animation-delay: -0.2s, -0.4s;
}

.silhouettes :nth-child(3) {
  animation-delay: -0.4s, -0.8s;
}

.silhouettes :nth-child(4) {
  animation-delay: -0.6s, -1.2s;
}

.silhouettes :nth-child(5) {
  animation-delay: -0.8s, -1.6s;
}

.silhouettes :nth-child(6) {
  animation-delay: -1s, 0s;
}

.silhouettes :nth-child(7) {
  animation-delay: -1.2s, -0.4s;
}

.silhouettes :nth-child(8) {
  animation-delay: -1.4s, -0.8s;
}

.silhouettes :nth-child(9) {
  animation-delay: -1.6s, -1.2s;
}

.silhouettes :nth-child(10) {
  animation-delay: -1.8s, -1.6s;
}

@media (prefers-reduced-motion) {
  .silhouettes > * {
    animation-name: none, color-wheel-light;
  }

  .theme-dark .silhouettes > * {
    animation-name: none, color-wheel-dark;
  }
}

@keyframes color-wheel-light {
  0% {
    fill: var(--theme-10);
  }
  33% {
    fill: var(--theme-20);
  }
  67% {
    fill: var(--theme-30);
  }
  100% {
    fill: var(--theme-40);
  }
}

@keyframes color-wheel-dark {
  0% {
    fill: var(--theme-900);
  }
  33% {
    fill: var(--theme-700);
  }
  67% {
    fill: var(--theme-400);
  }
  100% {
    fill: var(--theme-100);
  }
}

@keyframes silhouette-wave {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50px);
  }
}
</style>
