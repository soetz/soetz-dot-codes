<script setup lang="ts">
import ThemeIcon from "./icons/ThemeIcon.vue";
import { ref } from "vue";
import { themeService } from "../services";

const themeHovered = ref(false);

const themeHoverChange = (hovered: boolean) => {
  themeHovered.value = hovered;
};
const themeToggle = () => {
  themeService.explicitlySetThemeIsDark(!themeService.isDisplayedThemeDark());
};
</script>

<template>
  <div class="controls-container">
    <ThemeIcon
      class="control theme-icon"
      :is-hovered="themeHovered"
      @mouseenter="themeHoverChange(true)"
      @mouseleave="themeHoverChange(false)"
      @click="themeToggle"
    />
  </div>
</template>

<style scoped>
.controls-container {
  display: flex;
}

.control {
  height: 65px;

  padding-left: 15px;
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;

  cursor: pointer;
}

.theme-icon {
  display: none;
}

.theme-transition .theme-icon {
  display: block;
}

@media screen and (min-width: 600px) {
  .control {
    height: 42px;

    padding-left: 8px;
    padding-top: 4px;
    padding-right: 8px;
    padding-bottom: 4px;
  }
}
</style>
