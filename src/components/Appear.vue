<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";

const element = ref<HTMLDivElement>();
const isMounted = ref(false);
const isVisible = ref(false);

let observer: IntersectionObserver;

onBeforeMount(() => {
  isMounted.value = true;
});

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(element.value as HTMLDivElement);
      }
    }
  });

  observer.observe(element.value as HTMLDivElement);
});

onUnmounted(() => {
  observer.disconnect();
});
</script>

<template>
  <div
    ref="element"
    :class="{ appear: isMounted, appeared: isVisible }"
    role="presentation"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.appear {
  overflow-x: hidden;
  transform-origin: bottom;
}

.appear.appeared {
  animation: appear 1.5s forwards;
}

@media (prefers-reduced-motion) {
  .appear.appeared {
    animation: appear-reduced-motion 1s forwards;
  }
}

@keyframes appear {
  0% {
    opacity: 0.3;
    transform: scaleY(0.9);
  }

  67% {
    opacity: 1;
  }

  100% {
    transform: none;
  }
}

@keyframes appear-reduced-motion {
  from {
    opacity: 0.3;
  }

  to {
    opacity: 1;
  }
}
</style>
