<script setup lang="ts">
import avif1xUrl from "../../../assets/cyril/1x.avif";
import avif2xUrl from "../../../assets/cyril/2x.avif";
import jpg1xUrl from "../../../assets/cyril/1x.jpg";
import jpg2xUrl from "../../../assets/cyril/2x.jpg";
import webp1xUrl from "../../../assets/cyril/1x.webp";
import webp2xUrl from "../../../assets/cyril/2x.webp";

const avif1x = avif1xUrl;
const avif2x = avif2xUrl;
const jpg1x = jpg1xUrl;
const jpg2x = jpg2xUrl;
const webp1x = webp1xUrl;
const webp2x = webp2xUrl;

const mediaDevicePixelRatio = "(-webkit-min-device-pixel-ratio: 1.5)";
</script>

<template>
  <picture>
    <source
      type="image/avif"
      :media="mediaDevicePixelRatio"
      :srcset="`${avif2x} 128w`"
    />
    <source
      type="image/webp"
      :media="mediaDevicePixelRatio"
      :srcset="`${webp2x} 128w`"
    />
    <source :media="mediaDevicePixelRatio" :srcset="`${jpg2x} 128w`" />
    <source type="image/avif" :srcset="`${avif1x} 64w`" />
    <source type="image/webp" :srcset="`${webp1x} 64w`" />
    <source :srcset="`${jpg1x} 64w`" />
    <img :src="jpg2x" alt="The face of Cyril Richard." />
  </picture>
</template>

<style scoped>
img {
  min-width: 64px;
  height: 64px;

  margin-right: 12px;

  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;

  box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.02),
    7px 14px 15px rgba(0, 0, 0, 0.032), 15px 30px 33px rgba(0, 0, 0, 0.044),
    50px 100px 120px rgba(0, 0, 0, 0.07);
}
</style>
