<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import { analyticsService, themeService } from "./services";
import { pageDescription, pageKeywords, pageTitle } from "./utilities/pageSeo";
import { useSSRContext, watch } from "@vue/runtime-core";
import Background from "./components/Background.vue";
import ContactCallToAction from "./components/ContactCallToAction.vue";
import CookiesPopup from "./components/CookiesPopup.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import ThemeContainer from "./components/ThemeContainer.vue";

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

const route = useRoute();
themeService.setThemeColor(route.meta.color);
watch(
  () => route.meta.color,
  (newColor: string) => {
    themeService.setThemeColor(newColor);
  }
);
watch(
  () => route.meta.title,
  (newTitle?: string) => {
    document.title = pageTitle(newTitle);
  }
);
watch(
  () => route.meta.description,
  (newDescription?: string) => {
    const metaDescription = document.querySelector("meta[name=description]");
    if (metaDescription) {
      metaDescription.setAttribute("content", pageDescription(newDescription));
    }
  }
);
watch(
  () => route.meta.keywords,
  (newKeywords?: string) => {
    const metaKeywords = document.querySelector("meta[name=keywords]");
    if (metaKeywords) {
      metaKeywords.setAttribute("content", pageKeywords(newKeywords));
    }
  }
);
</script>

<template>
  <ThemeContainer class="general-container">
    <Header />
    <div class="footer-spacer">
      <main>
        <RouterView />
        <div v-if="route.name !== 'home'" class="reached-bottom">
          Looks like you reached the bottom of this page. Want to
          <RouterLink class="link-block" to="/">go back home</RouterLink>?
        </div>
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

main {
  padding-bottom: 80px;
}

.footer-spacer {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.reached-bottom {
  max-width: 800px;

  margin-left: auto;
  margin-top: 50px;
  margin-right: auto;
  padding-left: 13px;
  padding-right: 13px;
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
