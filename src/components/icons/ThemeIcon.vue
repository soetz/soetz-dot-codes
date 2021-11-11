<script setup lang="ts">
import {
  darkInitiation,
  darkToLightTransitionCreate,
  hoverRaysRotateCreate,
  hoverSizeCreate,
  hoverStarsCreate,
  lightInitiation,
  lightToDarkTransitionCreate,
} from "../../animations/theme";
import { onMounted, onUnmounted, watch } from "@vue/runtime-core";
import { ThemeChangeEvent } from "../../utilities/ThemeChangeEvent";
import gsap from "gsap";
import { themeService } from "../../services";

const props = defineProps({
  isHovered: Boolean,
});

// eslint-disable-next-line @typescript-eslint/no-empty-function
let hoverChangeAction = (hovered: boolean) => {};
const hoverChange = (hovered: boolean) => {
  hoverChangeAction(hovered);
};
watch(() => props.isHovered, hoverChange);

// eslint-disable-next-line no-undef
let currentAnimations: GSAPTimeline[] = [];

const killAnimations = () => {
  while (currentAnimations.length) {
    const animation = currentAnimations.pop();
    if (animation) {
      animation.kill();
    }
  }
};

const routineThemeLight = () => {
  lightInitiation();

  const hoverRaysRotateAnimation = hoverRaysRotateCreate();
  const hoverSizeAnimation = hoverSizeCreate();

  currentAnimations.push(hoverRaysRotateAnimation, hoverSizeAnimation);

  hoverChangeAction = (hovered: boolean) => {
    if (hovered) {
      hoverRaysRotateAnimation.play();
      hoverSizeAnimation.play();
    } else {
      if (hoverRaysRotateAnimation.progress() < 0.33) {
        hoverRaysRotateAnimation.tweenTo(0, { duration: 0.33 });
        hoverSizeAnimation.tweenTo(0, { duration: 0.33 });
      } else {
        hoverRaysRotateAnimation.tweenTo(hoverRaysRotateAnimation.duration(), {
          duration: 0.66,
        });
        hoverSizeAnimation.tweenTo(0, { duration: 0.66 });
      }
    }
  };
  hoverChange(props.isHovered);
};

const routineThemeDark = () => {
  darkInitiation();

  const starsAnimation = hoverStarsCreate();

  currentAnimations.push(starsAnimation);

  hoverChangeAction = (hovered: boolean) => {
    if (hovered) {
      starsAnimation.play();
    } else {
      starsAnimation.pause();
      gsap
        .to(".stars path", {
          duration: 0.6,
          alpha: 0,
        })
        .then(() => {
          starsAnimation.seek(0);
        });
    }
  };
  hoverChange(props.isHovered);
};

const transitionFromLightToDark = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  hoverChangeAction = () => {};
  killAnimations();

  const lightToDarkTransition = lightToDarkTransitionCreate(routineThemeDark);

  currentAnimations.push(lightToDarkTransition);
};

const transitionFromDarkToLight = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  hoverChangeAction = () => {};
  killAnimations();

  const darkToLightTransition = darkToLightTransitionCreate(routineThemeLight);

  currentAnimations.push(darkToLightTransition);
};

const themeChange = (event: Event) => {
  if ((event as ThemeChangeEvent).newStateIsDark) {
    transitionFromLightToDark();
  } else {
    transitionFromDarkToLight();
  }
};

onMounted(() => {
  if (themeService.isDisplayedThemeDark()) {
    routineThemeDark();
  } else {
    routineThemeLight();
  }

  themeService.addEventListener("theme-change", themeChange);
});

onUnmounted(() => {
  themeService.removeEventListener("theme-change", themeChange);
});
</script>

<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
  >
    <defs>
      <mask id="sun-to-moon">
        <rect x="0" y="0" width="24" height="24" />
        <circle cx="16.5" cy="9.5" r="8" />
      </mask>
      <mask id="moon-limit">
        <rect x="0" y="0" width="24" height="24" />
        <circle cx="12" cy="12" r="7" />
      </mask>
      <mask id="rays-large-limit">
        <rect x="0" y="0" width="24" height="24" />
        <circle class="outer-rays" cx="12" cy="12" r="12" />
        <circle class="inner-rays" cx="12" cy="12" r="8" />
      </mask>
      <mask id="rays-small-limit">
        <rect x="0" y="0" width="24" height="24" />
        <circle class="outer-rays" cx="12" cy="12" r="10" />
        <circle class="inner-rays" cx="12" cy="12" r="8" />
      </mask>
    </defs>
    <g class="moon-container">
      <circle class="moon" cx="16.5" cy="9.5" r="8" />
    </g>
    <circle class="sun" cx="12" cy="12" r="5" />
    <g class="rays">
      <g class="rays-large">
        <line x1="12" y1="0" x2="12" y2="12" />
        <line x1="0.6" y1="8.3" x2="12" y2="12" />
        <line x1="4.9" y1="21.7" x2="12" y2="12" />
        <line x1="19.1" y1="21.7" x2="12" y2="12" />
        <line x1="23.4" y1="8.3" x2="12" y2="12" />
      </g>
      <g class="rays-small">
        <line x1="4.9" y1="2.3" x2="12" y2="12" />
        <line x1="0.6" y1="15.7" x2="12" y2="12" />
        <line x1="12" y1="24" x2="12" y2="12" />
        <line x1="23.4" y1="15.7" x2="12" y2="12" />
        <line x1="19.1" y1="2.3" x2="12" y2="12" />
      </g>
    </g>
    <g class="stars">
      <path
        class="star-1"
        style="opacity: 0"
        d="M13.7,6.9c0.3,0.2,0.6,0.4,0.9,0.9c0.5,0.7,0.6,1.4,0.6,1.7c0-0.3,0.1-1,0.6-1.7c0.3-0.4,0.7-0.7,0.9-0.9
		c-0.3-0.2-0.6-0.4-0.9-0.9c-0.5-0.7-0.6-1.4-0.6-1.7c0,0.3-0.1,1-0.6,1.7C14.3,6.5,13.9,6.8,13.7,6.9z"
      />
      <path
        class="star-2"
        style="opacity: 0"
        d="M17.4,11.4c0.3,0.2,0.6,0.4,0.9,0.9c0.5,0.7,0.6,1.4,0.6,1.7c0-0.3,0.1-1,0.6-1.7c0.3-0.4,0.7-0.7,0.9-0.9
		c-0.3-0.2-0.6-0.4-0.9-0.9C19.1,9.9,19,9.2,19,8.9c0,0.3-0.1,1-0.6,1.7C18,11,17.6,11.3,17.4,11.4z"
      />
      <path
        class="star-3"
        style="opacity: 0"
        d="M19.4,4.9c0.3,0.2,0.6,0.4,0.9,0.9c0.5,0.7,0.6,1.4,0.6,1.7c0-0.3,0.1-1,0.6-1.7c0.3-0.4,0.7-0.7,0.9-0.9
		c-0.3-0.2-0.6-0.4-0.9-0.9C21.1,3.4,21,2.7,21,2.4c0,0.3-0.1,1-0.6,1.7C20,4.5,19.6,4.8,19.4,4.9z"
      />
    </g>
  </svg>
</template>

<style scoped>
.sun,
.moon {
  fill: none;
  stroke-width: 2;

  stroke: var(--theme-700);
  transition: stroke 0.5s ease-in-out;
}

.theme-dark .sun,
.theme-dark .moon {
  stroke: var(--theme-20);
}

.sun {
  mask: url(#sun-to-moon);
}

.moon-container {
  mask: url(#moon-limit);
}

.rays {
  fill: none;

  stroke: var(--theme-700);
  transition: stroke 0.5s ease-in-out;
}

.theme-dark .rays {
  stroke: var(--theme-20);
}

.rays-large {
  stroke-width: 2;

  mask: url(#rays-large-limit);
}

.rays-small {
  mask: url(#rays-small-limit);
}

.stars {
  fill: var(--theme-700);
  transition: fill 0.5s ease-in-out;
}

.theme-dark .stars {
  fill: var(--theme-20);
}

#sun-to-moon rect,
#moon-limit circle {
  fill: white;
}

#sun-to-moon circle,
#moon-limit rect {
  fill: black;
}

#rays-large-limit rect,
#rays-small-limit rect,
.inner-rays {
  fill: black;
}

.outer-rays {
  fill: white;
}
</style>
