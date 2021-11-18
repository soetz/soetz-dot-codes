<script setup lang="ts">
import { RouterLink } from "vue-router";
import SmileIcon from "./icons/SmileIcon.vue";
import ThemeIcon from "./icons/ThemeIcon.vue";
import gsap from "gsap";
import { ref } from "vue";
import { themeService } from "../services";

const themeHovered = ref(false);
const contactHovered = ref(false);

const themeHoverChange = (hovered: boolean) => {
  themeHovered.value = hovered;
};
const themeToggle = () => {
  themeService.explicitlySetThemeIsDark(!themeService.isDisplayedThemeDark());
};
const contactHoverChange = (hovered: boolean) => {
  contactHovered.value = hovered;
  if (hovered) {
    gsap.to(".contact-icon", {
      duration: 1.5,
      ease: "elastic",
      transformOrigin: "center",
      rotation: 30,
    });
  } else {
    gsap.to(".contact-icon", {
      duration: 1.5,
      ease: "elastic",
      transformOrigin: "center",
      rotation: 0,
    });
  }
};
</script>

<template>
  <div class="controls-container">
    <ThemeIcon
      class="control"
      :is-hovered="themeHovered"
      @mouseenter="themeHoverChange(true)"
      @mouseleave="themeHoverChange(false)"
      @click="themeToggle"
    />
    <RouterLink
      to="/contact"
      @mouseenter="contactHoverChange(true)"
      @mouseleave="contactHoverChange(false)"
    >
      <SmileIcon class="control contact-icon" />
    </RouterLink>
  </div>
</template>

<style scoped>
.controls-container {
  display: flex;
}

.control {
  height: 65px;

  padding: 15px;

  cursor: pointer;
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
