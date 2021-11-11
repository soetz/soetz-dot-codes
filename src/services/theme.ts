import { KeptEventListener } from "../utilities/KeptEventListener";
import { ThemeChangeEvent } from "../utilities/ThemeChangeEvent";
import { ThemeColorEvent } from "../utilities/ThemeColorEvent";

interface ThemeService extends EventTarget {
  explicitlySetThemeIsDark(themeIsDark: boolean): void;
  isDisplayedThemeDark(): boolean;
  setThemeColor(color: string): void;
  getThemeColor(): string;
}

const themeServiceFactory = (): ThemeService => {
  let displayedThemeIsDark = false;
  let explicitlyDefinedThemeIsDark: null | boolean = null;
  let implicitlyDefinedThemeIsDark: null | boolean = null;
  let themeColor = "orange";

  const eventListeners: KeptEventListener[] = [];

  const service: ThemeService = {
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions | undefined
    ) {
      eventListeners.push({
        type,
        listener,
        options,
      });
    },
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions | undefined
    ) {
      for (let iteration = 0; iteration < eventListeners.length; iteration++) {
        const currentEventListener = eventListeners[iteration];
        if (
          type === currentEventListener.type &&
          listener === currentEventListener.listener &&
          options === currentEventListener.options
        ) {
          eventListeners.splice(iteration, 1);
          break;
        }
      }
    },
    dispatchEvent(event: Event) {
      for (const eventListener of eventListeners) {
        if (eventListener.type === event.type) {
          if (
            (eventListener.listener as EventListenerObject).handleEvent &&
            typeof (eventListener.listener as EventListenerObject)
              .handleEvent === "function"
          ) {
            (eventListener.listener as EventListenerObject).handleEvent(event);
          } else if (typeof eventListener.listener === "function") {
            (eventListener.listener as EventListener)(event);
          }
        }
      }

      return !(event.cancelable && event.defaultPrevented);
    },
    explicitlySetThemeIsDark: (themeIsDark: boolean) => {
      explicitlyDefinedThemeIsDark = themeIsDark;
      localStorage.setItem(
        "theme",
        explicitlyDefinedThemeIsDark ? "dark" : "light"
      );
      updateDisplayedTheme();
    },
    isDisplayedThemeDark: () => {
      return displayedThemeIsDark;
    },
    setThemeColor: (color: string) => {
      if (themeColor !== color) {
        themeColor = color;

        const themeColorEvent = new Event("theme-color") as ThemeColorEvent;
        themeColorEvent.color = themeColor;
        service.dispatchEvent(themeColorEvent);
      }
    },
    getThemeColor: () => {
      return themeColor;
    },
  };

  const updateDisplayedTheme = () => {
    const oldDisplayedThemeIsDark = displayedThemeIsDark;

    if (explicitlyDefinedThemeIsDark !== null) {
      displayedThemeIsDark = explicitlyDefinedThemeIsDark;
    } else if (implicitlyDefinedThemeIsDark !== null) {
      displayedThemeIsDark = implicitlyDefinedThemeIsDark;
    }

    if (oldDisplayedThemeIsDark !== displayedThemeIsDark) {
      const themeChangeEvent = new Event("theme-change") as ThemeChangeEvent;
      themeChangeEvent.newStateIsDark = displayedThemeIsDark;
      service.dispatchEvent(themeChangeEvent);
    }
  };

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    explicitlyDefinedThemeIsDark = localStorage.getItem("theme") === "dark";
  }
  implicitlyDefinedThemeIsDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  updateDisplayedTheme();

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (mediaQueryChange) => {
      implicitlyDefinedThemeIsDark = mediaQueryChange.matches;
      updateDisplayedTheme();
    });

  return service;
};

export { themeServiceFactory };
