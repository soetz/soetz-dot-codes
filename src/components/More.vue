<script setup lang="ts">
import { ref } from "vue";

const firstArrowShape = ref("5.93,19.07 13,12 5.93,4.93");
const secondArrowShape = ref("13.93,19.07 21,12 13.93,4.93");

const props = defineProps({
  bold: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String,
    default: "right",
  },
  size: {
    type: String,
    default: "m",
  },
});

if (props.direction === "down") {
  firstArrowShape.value = "19.07,5.93 12,13 4.93,5.93";
  secondArrowShape.value = "19.07,13.93 12,21 4.93,13.93";
} else if (props.direction === "left") {
  firstArrowShape.value = "18.07,4.93 11,12 18.07,19.07";
  secondArrowShape.value = "10.07,4.93 3,12 10.07,19.07";
} else if (props.direction === "up") {
  firstArrowShape.value = "4.93,18.07 12,11 19.07,18.07";
  secondArrowShape.value = "4.93,10.07 12,3 19.07,10.07";
}
</script>

<template>
  <span
    class="more"
    :class="[
      props.bold ? 'bold' : '',
      `direction-${props.direction}`,
      `size-${props.size}`,
    ]"
    ><slot></slot>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <polyline :points="firstArrowShape" />
      <polyline :points="secondArrowShape" />
    </svg>
  </span>
</template>

<style scoped>
.more {
  display: inline-flex;
  align-items: flex-end;

  font-size: 14px;
}

.more.bold {
  font-weight: 600;
}

.more.direction-left {
  flex-direction: row-reverse;
}

.more.size-m {
  font-size: 16px;
}

.more svg {
  display: inline-block;

  height: 15px;

  margin-left: 4px;

  transform: translateX(-6px);

  transition: transform 0.2s ease-out;
}

.more.size-m svg {
  height: 17px;
}

.more.direction-down svg {
  transform: translateY(-4px);
}

.more.direction-left svg {
  margin-left: 0;
  margin-right: 4px;

  transform: translateX(6px);
}

.more.direction-up svg {
  transform: translateY(4px);
}

.more svg polyline {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;

  transition: opacity 0.2s ease-out;
}

.more.bold svg polyline {
  stroke-width: 3;
}

.more svg polyline:first-child {
  opacity: 0;
}

.more-target:hover svg {
  transform: translate(0);
}

.more-target:focus-visible svg {
  transform: translate(0);
}

.more-target:hover svg polyline:first-child {
  opacity: 1;
}

.more-target:focus-visible svg polyline:first-child {
  opacity: 1;
}

@media (prefers-reduced-motion) {
  .more svg {
    transition: none;
  }
}
</style>
