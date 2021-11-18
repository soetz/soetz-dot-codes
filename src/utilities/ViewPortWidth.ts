import { nextTick } from "@vue/runtime-core";
import { throttle } from "lodash";

export const updateViewportWidth = (): void => {
  nextTick(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;

    document.body.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
  });
};

// can’t access window in SSR context
// import.meta.env.SSR is injected by Vite.
if (!import.meta.env.SSR) {
  window.addEventListener(
    "resize",
    throttle(() => {
      updateViewportWidth();
    }, 100)
  );
}
