<script setup lang="ts">
import More from "../../../components/More.vue";

const props = defineProps({
  name: {
    default: "",
    type: String,
  },
  type: {
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
  <li>
    <RouterLink
      class="project-link more-target"
      :to="props.to"
      :aria-label="props.name"
    >
      <div class="visual" role="presentation">
        <span class="symbol">{{ props.symbol }}</span>
      </div>
      <div class="description" role="presentation">
        <div class="project-type">{{ props.type }}</div>
        <div class="project-name">{{ props.name }}</div>
        <More size="s" class="see-more" aria-hidden="true"
          >see the details</More
        >
      </div>
    </RouterLink>
  </li>
</template>

<style scoped>
li {
  margin-bottom: 20px;
}

li:last-child {
  margin-bottom: 0;
}

.project-link {
  display: flex;
  box-shadow: 0.7px 1.5px 1.5px rgba(0, 0, 0, 0.01),
    1.75px 3.5px 4px rgba(0, 0, 0, 0.018), 3.5px 7.5px 8px rgba(0, 0, 0, 0.025),
    12px 25px 30px rgba(0, 0, 0, 0.04);
}

.visual {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  min-height: 100px;
  flex-shrink: 0;

  font-size: 40px;
  text-align: center;

  text-shadow: 0.4px 0.7px 0.8px rgba(0, 0, 0, 0.06),
    0.8px 1.7px 1.9px rgba(0, 0, 0, 0.09),
    1.8px 3.6px 4.1px rgba(0, 0, 0, 0.125), 6px 12px 15px rgba(0, 0, 0, 0.2);

  background-color: var(--theme-20);
}

.theme-dark .visual {
  background-color: var(--theme-700);
}

.theme-transition .visual {
  transition: background-color 0.5s ease-in-out;
}

.symbol {
  transform: scale(1);

  transition: transform 0.2s ease-out;
}

.project-link:hover .symbol,
.project-link:focus-visible .symbol {
  transform: scale(1.2);
}

.description {
  width: 100%;

  padding-left: 14px;
  padding-top: 8px;
  padding-right: 14px;
  padding-bottom: 40px;

  position: relative;

  background-color: rgba(var(--theme-10-rgb), 0.6);
  color: var(--theme-900);
}

.theme-dark .description {
  background-color: rgba(var(--theme-700-rgb), 0.6);
  color: var(--theme-10);
}

.theme-transition .description {
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
}

.project-name {
  font-size: 20px;
}

.project-type {
  font-size: 14px;
  font-style: italic;
}

.see-more {
  position: absolute;

  left: 14px;
  bottom: 8px;
}

@media screen and (min-width: 800px) {
  .project-link {
    flex-direction: column;
  }

  .visual {
    width: 100%;
    height: 150px;

    font-size: 65px;
  }
}

@media (prefers-reduced-motion) {
  .symbol {
    transition: none;
  }
}
</style>
