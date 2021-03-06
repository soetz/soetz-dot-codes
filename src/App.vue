<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { analyticsService, themeService } from "./services";
import { useSSRContext, watch } from "@vue/runtime-core";
import Background from "./components/Background.vue";
import ContactCallToAction from "./components/ContactCallToAction.vue";
import CookiesPopup from "./components/CookiesPopup.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import ThemeContainer from "./components/ThemeContainer.vue";
import consoleWelcome from "./utilities/consoleWelcome";

declare global {
  const SESSION_TOKEN: string;
}

const assignSessionTokenRoutine = () => {
  let sessionToken = "";
  if (import.meta.env.SSR) {
    sessionToken = (useSSRContext() as Record<string, string>).sessionToken;
  } else {
    if (SESSION_TOKEN) {
      sessionToken = SESSION_TOKEN;
    }
  }
  analyticsService.setCurrentSessionToken(sessionToken);
  if (!import.meta.env.SSR) {
    setTimeout(() => {
      analyticsService.registerConfirmation();
    }, 20000);
  }
};

assignSessionTokenRoutine();

if (!import.meta.env.SSR) {
  consoleWelcome();
}

const route = useRoute();
themeService.setThemeColor(route.meta.color);
watch(
  () => route.meta.color,
  (newColor: string) => {
    themeService.setThemeColor(newColor);
  }
);
</script>

<template>
  <ThemeContainer class="general-container">
    <a class="skip-to-content" href="#main">Skip to main content</a>
    <Header />
    <div class="footer-spacer">
      <main id="main">
        <RouterView v-slot="{ Component }">
          <Suspense>
            <component :is="Component" />
          </Suspense>
        </RouterView>
      </main>
      <Footer />
    </div>
    <ContactCallToAction />
    <CookiesPopup />
    <Background class="background" />
  </ThemeContainer>
</template>

<style>
* {
  box-sizing: border-box;
}

a {
  text-decoration-line: none;
}

body {
  margin-left: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;

  --scrollbar-width: 0px;
  --fullWidth: calc(100vw - var(--scrollbar-width));
}

#app {
  font-family: boreal, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--theme-900);

  width: 100%;
  height: 100vh;
}

.general-container {
  width: 100%;
  height: 100%;

  padding-top: 102px;
}

.skip-to-content {
  position: fixed;

  left: 0;
  top: -100px;

  width: 100%;

  padding-top: 10px;
  padding-bottom: 10px;

  background-color: var(--theme-400);
  color: var(--theme-10);

  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration-line: underline;

  z-index: 20;
}

.skip-to-content:focus {
  top: 0;
}

main {
  padding-bottom: 80px;
}

.footer-spacer {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
</style>
