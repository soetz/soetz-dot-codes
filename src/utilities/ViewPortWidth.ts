import { nextTick } from "@vue/runtime-core";
import { throttle } from "lodash";

export const updateViewportWidth = (): void => {
  nextTick(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;

    document.body.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
  });
};

window.addEventListener(
  "resize",
  throttle(() => {
    updateViewportWidth();
  }, 100)
);
