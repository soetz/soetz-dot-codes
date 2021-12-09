<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "@vue/runtime-core";
import { ThemeTransitionEvent } from "../utilities/ThemeTransitionEvent";
import { palette } from "../colors";
import { themeService } from "../services";

const themeIsDark = ref(true);
const themeColor = ref("gray");
const themeTransition = ref(false);
const documentBackgroundColor = ref(palette[themeColor.value][900]);

const setThemeTransition = (transitionEvent: Event) => {
  themeTransition.value = (transitionEvent as ThemeTransitionEvent).transition;
};

const changeThemeColor = () => {
  themeColor.value = themeService.getThemeColor();

  const currentThemeStateIsDark = themeService.isDisplayedThemeDark();
  documentBackgroundColor.value = currentThemeStateIsDark
    ? palette[themeColor.value][900]
    : palette[themeColor.value][10];

  themeIsDark.value = currentThemeStateIsDark;
};

onMounted(() => {
  themeService.initiate();
  changeThemeColor();
  themeService.addEventListener("theme-transition", setThemeTransition);
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
      themeColor ? 'theme-' + themeColor : 'theme-gray',
      themeIsDark ? 'theme-dark' : 'theme-light',
      themeTransition ? 'theme-transition' : '',
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

  --link-block-opacity: 0.5;
  --link-block-color: var(--theme-60-rgb);

  --button-block-color: var(--theme-90);
  --button-block-side-color: var(--theme-100);
}

::selection {
  background-color: var(--theme-60);
}

.theme-container.theme-dark {
  color: var(--theme-10);

  --link-block-color: var(--theme-90-rgb);
}

.theme-dark ::selection {
  background-color: var(--theme-100);
}

.theme-container.theme-transition {
  transition: color 0.5s ease-in-out;
}

.link-block,
a.link-block {
  font-family: boreal, Helvetica, Arial, sans-serif;
  font-weight: 600;

  z-index: 1;

  box-shadow: inset 0 -9px 0 rgba(var(--link-block-color), var(--link-block-opacity));

  color: var(--theme-900);

  cursor: pointer;
}

.theme-dark .link-block,
.theme-dark a.link-block {
  color: var(--theme-10);
}

.theme-transition .link-block,
.theme-transition a.link-block {
  transition: color 0.5s ease-in-out, box-shadow 0.2s ease-out;
}

.link-block:hover,
a.link-block:hover,
.link-block:focus,
a.link-block:focus {
  box-shadow: inset 0 -6px 0 rgba(var(--link-block-color), var(--link-block-opacity));

  --link-block-opacity: 0.9;
}

.button-block,
button.button-block {
  margin-top: 12px;
  padding-left: 8px;
  padding-top: 6px;
  padding-right: 8px;
  padding-bottom: 6px;

  border-left-style: none;
  border-top-style: none;
  border-right-style: none;
  border-bottom-color: var(--button-block-side-color);
  border-bottom-style: solid;
  border-bottom-width: 4px;
  background-color: var(--button-block-color);

  color: var(--theme-10);

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;

  transition: border-bottom-width 0.05s ease-out, margin-bottom 0.05s ease-out,
    transform 0.05s ease-out;
}

.button-block:active,
button.button-block:active {
  margin-bottom: 3px;
  transform: translateY(3px);

  border-bottom-width: 1px;
}

.theme-transition .button-block,
.theme-transition button.button-block {
  transition: border-bottom-width 0.05s ease-out, margin-bottom 0.05s ease-out,
    transform 0.05s ease-out, background-color 0.5s ease-in-out,
    border-bottom-color 0.5s ease-in-out;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: new-spirit, serif;
}
</style>
