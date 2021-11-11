<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "@vue/runtime-core";
import { palette } from "../colors";
import { themeService } from "../services";

const themeIsDark = ref(false);
const themeColor = ref("orange");
const documentBackgroundColor = ref("white");

const changeThemeColor = () => {
  themeColor.value = themeService.getThemeColor();

  const currentThemeStateIsDark = themeService.isDisplayedThemeDark();
  documentBackgroundColor.value = currentThemeStateIsDark
    ? palette[themeColor.value][900]
    : palette[themeColor.value][10];

  themeIsDark.value = currentThemeStateIsDark;
};

onMounted(() => {
  changeThemeColor();
  themeService.addEventListener("theme-color", changeThemeColor);
  themeService.addEventListener("theme-change", changeThemeColor);
});

onUnmounted(() => {
  themeService.removeEventListener("theme-color", changeThemeColor);
  themeService.removeEventListener("theme-change", changeThemeColor);
});
</script>

<template>
  <div
    class="theme-container"
    :class="[
      themeColor ? 'theme-' + themeColor : 'theme-orange',
      themeIsDark ? 'theme-dark' : 'theme-light',
    ]"
  >
    <VStyle> html { background-color: {{ documentBackgroundColor }}; } </VStyle>
    <slot></slot>
  </div>
</template>

<style>
@import "../assets/colors.css";
@import "../assets/theme.css";

.theme-container {
  color: var(--theme-900);
  transition: color 0.5s ease-in-out;
}

.theme-container.theme-dark {
  color: var(--theme-10);
}
</style>
