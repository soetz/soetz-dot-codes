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

  --link-block-opacity: 0.5;
  --link-block-color: var(--theme-60-rgb);
}

.theme-container.theme-dark {
  color: var(--theme-10);

  --link-block-color: var(--theme-90-rgb);
}

.link-block,
a.link-block {
  font-weight: 600;

  z-index: 1;

  box-shadow: inset 0 -9px 0 rgba(var(--link-block-color), var(--link-block-opacity));

  color: var(--theme-900);
  transition: color 0.5s ease-in-out, box-shadow 0.2s ease-out;
}

.theme-dark .link-block,
.theme-dark a.link-block {
  color: var(--theme-10);
}

.link-block:hover,
a.link-block:hover,
.link-block:focus,
a.link-block:focus {
  box-shadow: inset 0 -6px 0 rgba(var(--link-block-color), var(--link-block-opacity));

  --link-block-opacity: 0.9;
}
</style>
