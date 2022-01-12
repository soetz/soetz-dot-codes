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

  --button-block-color: var(--theme-400);
  --button-block-side-color: var(--theme-700);
}

.theme-container * {
  outline-color: var(--theme-900);
  outline-style: none;
  outline-width: 3px;
  outline-offset: 3px;
}

.theme-container *:focus {
  outline-style: solid;
}

.theme-container *:focus:not(:focus-visible) {
  outline-style: none;
}

.theme-container *:focus-visible {
  outline-style: solid;
}

::selection {
  background-color: rgba(var(--theme-90-rgb), 0.6);
}

.theme-container.theme-dark {
  color: var(--theme-10);

  --link-block-color: var(--theme-90-rgb);
}

.theme-container.theme-dark * {
  outline-color: var(--theme-10);
}

.theme-dark ::selection {
  background-color: rgba(var(--theme-90-rgb), 0.6);
}

.theme-container.theme-transition {
  transition: color 0.5s ease-in-out;
}

.theme-transition ::selection {
  transition: background-color 0.5s ease-in-out;
}

.theme-transition *:focus {
  transition: outline-color 0.5s ease-in-out;
}

.theme-transition *:focus-visible {
  transition: outline-color 0.5s ease-in-out;
}

.reset-link {
  color: inherit;
}

.reset-button {
  margin-left: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  padding-left: 0;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;

  overflow-x: visible;
  overflow-y: visible;

  border-left-style: none;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;

  color: inherit;
  background-color: transparent;

  font-family: inherit;
  font-size: 100%;
  text-transform: none;

  -webkit-appearance: none;
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

  transition: box-shadow 0.2s ease-out;
}

.theme-transition .link-block,
.theme-transition a.link-block {
  transition: color 0.5s ease-in-out, box-shadow 0.2s ease-out;
}

.link-block:hover,
a.link-block:hover {
  box-shadow: inset 0 -6px 0 rgba(var(--link-block-color), var(--link-block-opacity));

  --link-block-opacity: 0.9;
}

.link-block:focus-visible,
a.link-block:focus-visible {
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

  box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.02),
    7px 14px 15px rgba(0, 0, 0, 0.032), 15px 30px 33px rgba(0, 0, 0, 0.044),
    50px 100px 120px rgba(0, 0, 0, 0.07);

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

h1 {
  font-size: 2em;
}

hr {
  height: 2px;

  background-color: var(--theme-900);

  border-left-style: none;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
}

.theme-dark hr {
  background-color: var(--theme-10);
}

.theme-transition hr {
  transition: background-color 0.5s ease-in-out;
}

code {
  padding-left: 6px;
  padding-right: 6px;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  background-color: rgba(var(--theme-60-rgb), 0.4);

  font-family: source-code-pro, monospace;
  font-size: 0.96em;
}

abbr {
  text-decoration-line: none;
}

@media (prefers-reduced-motion) {
  .theme-dark .link-block,
  .theme-dark a.link-block {
    transition: none;
  }

  .theme-transition .link-block,
  .theme-transition a.link-block {
    transition: color 0.5s ease-in-out;
  }

  .button-block,
  button.button-block {
    transition: none;
  }

  .theme-transition .button-block,
  .theme-transition button.button-block {
    transition: background-color 0.5s ease-in-out,
      border-bottom-color 0.5s ease-in-out;
  }
}
</style>
