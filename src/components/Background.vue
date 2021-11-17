<script setup lang="ts">
import { Clock, Vector3 } from "three";
import { MyScene, createScene } from "../3d/scene";
import { onMounted, onUnmounted } from "@vue/runtime-core";
import { ThemeTransitionEvent } from "../utilities/ThemeTransitionEvent";
import gsap from "gsap/all";
import { hexColorToVector3 } from "../utilities/hexColorToVector3";
import { palette } from "../colors";
import { ref } from "@vue/reactivity";
import { themeService } from "../services";

const canvas = ref<HTMLCanvasElement>();

const clock = new Clock();
let sceneProps: MyScene | undefined;

let shouldTransition = false;

const setShouldTransition = (transitionEvent: Event) => {
  shouldTransition = (transitionEvent as ThemeTransitionEvent).transition;
};

const transitionColors = () => {
  if (sceneProps) {
    const themeColor = themeService.getThemeColor();

    let newBackgroundColor = new Vector3();
    let newPrimaryColor = new Vector3();
    let newSecondaryColor = new Vector3();

    if (themeService.isDisplayedThemeDark()) {
      newBackgroundColor = hexColorToVector3(palette[themeColor][900]);
      newPrimaryColor = hexColorToVector3(palette[themeColor][700]);
      newSecondaryColor = hexColorToVector3(palette[themeColor][400]);
    } else {
      newBackgroundColor = hexColorToVector3(palette[themeColor][10]);
      newPrimaryColor = hexColorToVector3(palette[themeColor][30]);
      newSecondaryColor = hexColorToVector3(palette[themeColor][40]);
    }
    if (shouldTransition) {
      gsap.to(sceneProps.uniforms.u_background_color.value, {
        duration: 0.5,
        ease: "power1.inOut",
        x: newBackgroundColor.x,
        y: newBackgroundColor.y,
        z: newBackgroundColor.z,
      });
      gsap.to(sceneProps.uniforms.u_primary_color.value, {
        duration: 0.5,
        ease: "power1.inOut",
        x: newPrimaryColor.x,
        y: newPrimaryColor.y,
        z: newPrimaryColor.z,
      });
      gsap.to(sceneProps.uniforms.u_secondary_color.value, {
        duration: 0.5,
        ease: "power1.inOut",
        x: newSecondaryColor.x,
        y: newSecondaryColor.y,
        z: newSecondaryColor.z,
      });
    } else {
      gsap.set(sceneProps.uniforms.u_background_color.value, {
        ease: "power1.inOut",
        x: newBackgroundColor.x,
        y: newBackgroundColor.y,
        z: newBackgroundColor.z,
      });
      gsap.set(sceneProps.uniforms.u_primary_color.value, {
        ease: "power1.inOut",
        x: newPrimaryColor.x,
        y: newPrimaryColor.y,
        z: newPrimaryColor.z,
      });
      gsap.set(sceneProps.uniforms.u_secondary_color.value, {
        ease: "power1.inOut",
        x: newSecondaryColor.x,
        y: newSecondaryColor.y,
        z: newSecondaryColor.z,
      });
    }
  }
};

onMounted(() => {
  sceneProps = createScene(
    canvas.value as HTMLCanvasElement,
    hexColorToVector3(palette.gray[900]),
    hexColorToVector3(palette.gray[700]),
    hexColorToVector3(palette.gray[400])
  );

  const initiateColors = () => {
    if (sceneProps) {
      const themeColor = themeService.getThemeColor();

      sceneProps.uniforms.u_background_color.value =
        themeService.isDisplayedThemeDark()
          ? hexColorToVector3(palette[themeColor][900])
          : hexColorToVector3(palette[themeColor][10]);
      sceneProps.uniforms.u_primary_color.value =
        themeService.isDisplayedThemeDark()
          ? hexColorToVector3(palette[themeColor][700])
          : hexColorToVector3(palette[themeColor][20]);
      sceneProps.uniforms.u_secondary_color.value =
        themeService.isDisplayedThemeDark()
          ? hexColorToVector3(palette[themeColor][400])
          : hexColorToVector3(palette[themeColor][30]);
    }
  };

  const tick = () => {
    if (sceneProps) {
      const elapsedTime = clock.getElapsedTime();
      sceneProps.uniforms.u_time.value = elapsedTime / 1.0;
      sceneProps.uniforms.u_resolution.value.x =
        document.documentElement.clientWidth;
      sceneProps.uniforms.u_resolution.value.y =
        document.documentElement.clientHeight;

      const pixelRatio = Math.min(window.devicePixelRatio, 2);

      sceneProps.renderer.setSize(
        (canvas.value as HTMLCanvasElement).clientWidth / pixelRatio,
        (canvas.value as HTMLCanvasElement).clientHeight / pixelRatio,
        false
      );

      sceneProps.renderer.render(sceneProps.scene, sceneProps.camera);
    }

    requestAnimationFrame(tick);
  };

  initiateColors();
  tick();

  themeService.addEventListener("theme-transition", setShouldTransition);
  themeService.addEventListener("theme-color", transitionColors);
  themeService.addEventListener("theme-change", transitionColors);
});

onUnmounted(() => {
  themeService.addEventListener("theme-color", transitionColors);
  themeService.removeEventListener("theme-change", transitionColors);
});
</script>

<template>
  <div class="background-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped>
.background-container {
  overflow: hidden;
}

canvas {
  width: 100vw;
  height: 100vh;
}
</style>
