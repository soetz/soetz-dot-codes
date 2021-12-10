<script setup lang="ts">
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
    <RouterLink class="project-link" :to="props.to">
      <div class="visual">
        <span class="symbol">{{ props.symbol }}</span>
      </div>
      <div class="description">
        <div class="project-type">{{ props.type }}</div>
        <div class="project-name">{{ props.name }}</div>
        <div class="see-more">
          see more
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <polyline points="5.93,19.07 12,12 5.93,4.93" />
            <polyline points="13.93,19.07 21,12 13.93,4.93" />
          </svg>
        </div>
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

.project-link:hover .symbol {
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
  display: flex;
  align-items: flex-end;

  position: absolute;

  left: 14px;
  bottom: 8px;

  font-size: 14px;
}

.see-more svg {
  display: inline-block;

  height: 15px;

  margin-left: 4px;

  transform: translateX(-6px);

  transition: transform 0.2s ease-out;
}

.see-more svg polyline {
  fill: none;
  stroke: var(--theme-900);
  stroke-width: 2;

  transition: opacity 0.2s ease-out;
}

.theme-dark .see-more svg polyline {
  stroke: var(--theme-10);
}

.theme-transition .see-more svg polyline {
  transition: opacity 0.2s ease-out, stroke 0.5s ease-in-out;
}

.see-more svg polyline:first-child {
  opacity: 0;
}

.project-link:hover .see-more svg {
  transform: translateX(0);
}

.project-link:hover .see-more svg polyline:first-child {
  opacity: 1;
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
</style>
