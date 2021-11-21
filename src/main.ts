import { createSSRApp, h } from "vue";
import App from "./App.vue";
import { Router } from "vue-router";
import { App as VueApp } from "@vue/runtime-core";
import { analyticsService } from "./services";
import { createMyRouter } from "./router";
import { updateViewportWidth } from "./utilities/ViewPortWidth";

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance.
export function createApp(): { app: VueApp; router: Router } {
  const app = createSSRApp(App);

  const router = createMyRouter();
  app.use(router);
  router.afterEach((to, from) => {
    if (to.fullPath !== from.fullPath) {
      analyticsService.registerNavigation(to.fullPath);
    }

    // updateViewportWidth() uses window and we can’t access it in an SSR context
    // so we use it only on client
    // import.meta.env.SSR is injected by Vite.
    if (!import.meta.env.SSR) {
      updateViewportWidth();
    }
  });

  app.component("VStyle", {
    render() {
      return h("style", this.$slots.default());
    },
  });
  return { app, router };
}
