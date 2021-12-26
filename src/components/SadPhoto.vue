<script setup lang="ts">
import avif1xUrl from "../assets/me_sad/1x.avif";
import avif2xUrl from "../assets/me_sad/2x.avif";
import png1xUrl from "../assets/me_sad/1x.png";
import png2xUrl from "../assets/me_sad/2x.png";
import webp1xUrl from "../assets/me_sad/1x.webp";
import webp2xUrl from "../assets/me_sad/2x.webp";

const avif1x = avif1xUrl;
const avif2x = avif2xUrl;
const png1x = png1xUrl;
const png2x = png2xUrl;
const webp1x = webp1xUrl;
const webp2x = webp2xUrl;

const mediaDevicePixelRatio = "(-webkit-min-device-pixel-ratio: 1.5)";
</script>

<template>
  <picture>
    <source
      type="image/avif"
      :media="mediaDevicePixelRatio"
      :srcset="`${avif2x} 600w`"
    />
    <source
      type="image/webp"
      :media="mediaDevicePixelRatio"
      :srcset="`${webp2x} 600w`"
    />
    <source :media="mediaDevicePixelRatio" :srcset="`${png2x} 600w`" />
    <source type="image/avif" :srcset="`${avif1x} 300w`" />
    <source type="image/webp" :srcset="`${webp1x} 300w`" />
    <source :srcset="`${png1x} 300w`" />
    <img
      :src="png2x"
      alt="A cut photo of Simon’s face but the smile has been replaced with the drawing of a pout."
    />
  </picture>
</template>

<style scoped>
img {
  width: 100%;
  max-width: 300px;

  margin-left: auto;
  margin-right: auto;

  filter: drop-shadow(7px 14px 15px rgba(0, 0, 0, 0.15));
}
</style>
