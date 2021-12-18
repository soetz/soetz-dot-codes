<script setup lang="ts">
import ThemeIcon from "./icons/ThemeIcon.vue";
import { ref } from "vue";
import { themeService } from "../services";

const themeHoveredOrFocused = ref(false);
let themeHovered = false;
let themeFocused = false;

const themeHoverOrFocusChange = () => {
  themeHoveredOrFocused.value = themeHovered || themeFocused;
};

const themeHoverChange = (hovered: boolean) => {
  themeHovered = hovered;
  themeHoverOrFocusChange();
};

const themeFocusChange = (focused: boolean) => {
  themeFocused = focused;
  themeHoverOrFocusChange();
};

const themeToggle = () => {
  themeService.explicitlySetThemeIsDark(!themeService.isDisplayedThemeDark());
};
</script>

<template>
  <div class="controls-container">
    <button
      class="control reset-button"
      @mouseenter="themeHoverChange(true)"
      @mouseleave="themeHoverChange(false)"
      @focus="themeFocusChange(true)"
      @blur="themeFocusChange(false)"
      @click="themeToggle"
    >
      <ThemeIcon class="theme-icon" :is-hovered="themeHoveredOrFocused" />
    </button>
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

  width: 100%;
  height: 100%;
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
