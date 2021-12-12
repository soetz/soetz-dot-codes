<script setup lang="ts">
import { onMounted, ref } from "vue";

const firstArrowShape = ref("5.93,19.07 12,12 5.93,4.93");
const secondArrowShape = ref("13.93,19.07 21,12 13.93,4.93");

const props = defineProps({
  bold: {
    type: Boolean,
    default: false,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "m",
  },
});

onMounted(() => {
  if (props.vertical) {
    firstArrowShape.value = "19.07,5.93 12,12 4.93,5.93";
    secondArrowShape.value = "19.07,13.93 12,21 4.93,13.93";
  }
});
</script>

<template>
  <span
    class="more"
    :class="[
      props.bold ? 'bold' : '',
      props.vertical ? 'vertical' : '',
      'size-' + props.size,
    ]"
    ><slot></slot>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
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

.more.vertical svg {
  transform: translateY(-4px);
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

.more-target:hover svg,
.more-target:focus svg {
  transform: translateX(0);
}

.more-target:hover .vertical svg,
.more-target:focus .vertical svg {
  transform: translateY(0);
}

.more-target:hover svg polyline:first-child,
.more-target:focus svg polyline:first-child {
  opacity: 1;
}
</style>
