<script setup lang="ts">
import More from "../../../components/More.vue";
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
  <RouterLink
    class="next-project more-target"
    :to="props.to"
    :aria-label="props.title"
  >
    <div class="visual">
      <span class="symbol">{{ props.symbol }}</span>
    </div>
    <div class="description">
      <span class="title">{{ props.title }}</span>
      <More>{{ props.see }}</More>
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

.next-project:hover .symbol,
.next-project:focus .symbol {
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
</style>
