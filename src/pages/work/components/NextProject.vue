<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps({
  title: {
    default: "",
    type: String,
  },
  see: {
    default: "",
    type: String,
  },
  symbol: {
    default: "",
    type: String,
  },
  to: {
    default: "",
    type: String,
  },
});
</script>

<template>
  <RouterLink class="next-project" :to="props.to">
    <div class="visual">
      <span class="symbol">{{ props.symbol }}</span>
    </div>
    <div class="description">
      <span class="title">{{ props.title }}</span>
      <span class="see-how"
        >{{ props.see }}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
        >
          <polyline points="5.93,19.07 12,12 5.93,4.93" />
          <polyline points="13.93,19.07 21,12 13.93,4.93" />
        </svg>
      </span>
    </div>
  </RouterLink>
</template>

<style scoped>
.next-project {
  display: flex;

  margin-top: 50px;
}

.visual {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  min-height: 80px;
  flex-shrink: 0;

  font-size: 35px;

  text-shadow: 0.4px 0.7px 0.8px rgba(0, 0, 0, 0.06),
    0.8px 1.7px 1.9px rgba(0, 0, 0, 0.09),
    1.8px 3.6px 4.1px rgba(0, 0, 0, 0.125), 6px 12px 15px rgba(0, 0, 0, 0.2);
}

.symbol {
  transform: scale(1);

  transition: transform 0.2s ease-out;
}

.next-project:hover .symbol {
  transform: scale(1.2);
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: var(--theme-900);
}

.theme-dark .description {
  color: var(--theme-10);
}

.theme-transition .description {
  transition: color 0.5s ease-in-out;
}

.description .title {
  margin-bottom: 4px;

  font-size: 20px;
  font-weight: 500;
}
.see-how {
  display: flex;
  align-items: flex-end;

  font-size: 16px;
}

.see-how svg {
  display: inline-block;

  height: 17px;

  margin-left: 4px;

  transform: translateX(-6px);

  transition: transform 0.2s ease-out;
}

.see-how svg polyline {
  fill: none;
  stroke: var(--theme-900);
  stroke-width: 2;

  transition: opacity 0.2s ease-out;
}

.theme-dark .see-how svg polyline {
  stroke: var(--theme-10);
}

.theme-transition .see-how svg polyline {
  transition: opacity 0.2s ease-out, stroke 0.5s ease-in-out;
}

.see-how svg polyline:first-child {
  opacity: 0;
}

.next-project:hover .see-how svg {
  transform: translateX(0);
}

.next-project:hover .see-how svg polyline:first-child {
  opacity: 1;
}
</style>
