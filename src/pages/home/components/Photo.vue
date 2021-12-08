<script setup lang="ts">
import avif1xBigUrl from "../../../assets/me_cut/1x-big.avif";
import avif1xSmallUrl from "../../../assets/me_cut/1x-small.avif";
import avif2xBigUrl from "../../../assets/me_cut/2x-big.avif";
import avif2xSmallUrl from "../../../assets/me_cut/2x-small.avif";
import png1xBigUrl from "../../../assets/me_cut/1x-big.png";
import png1xSmallUrl from "../../../assets/me_cut/1x-small.png";
import png2xBigUrl from "../../../assets/me_cut/2x-big.png";
import png2xSmallUrl from "../../../assets/me_cut/2x-small.png";
import webp1xBigUrl from "../../../assets/me_cut/1x-big.webp";
import webp1xSmallUrl from "../../../assets/me_cut/1x-small.webp";
import webp2xBigUrl from "../../../assets/me_cut/2x-big.webp";
import webp2xSmallUrl from "../../../assets/me_cut/2x-small.webp";

const avif1xBig = avif1xBigUrl;
const avif1xSmall = avif1xSmallUrl;
const avif2xBig = avif2xBigUrl;
const avif2xSmall = avif2xSmallUrl;
const png1xBig = png1xBigUrl;
const png1xSmall = png1xSmallUrl;
const png2xBig = png2xBigUrl;
const png2xSmall = png2xSmallUrl;
const webp1xBig = webp1xBigUrl;
const webp1xSmall = webp1xSmallUrl;
const webp2xBig = webp2xBigUrl;
const webp2xSmall = webp2xSmallUrl;

const mediaDevicePixelRatio = "(-webkit-min-device-pixel-ratio: 1.5)";
const responsiveSizes = `
  (min-height: 700px) 289px,
  (min-height: 600px) and (min-width: 540px) 289px,
  193px
`;
</script>

<template>
  <picture>
    <source
      type="image/avif"
      :media="mediaDevicePixelRatio"
      :srcset="`${avif2xSmall} 386w, ${avif2xBig} 579w`"
      :sizes="responsiveSizes"
    />
    <source
      type="image/webp"
      :media="mediaDevicePixelRatio"
      :srcset="`${webp2xSmall} 386w, ${webp2xBig} 579w`"
      :sizes="responsiveSizes"
    />
    <source
      :media="mediaDevicePixelRatio"
      :srcset="`${png2xSmall} 386w, ${png2xBig} 579w`"
      :sizes="responsiveSizes"
    />
    <source
      type="image/avif"
      :srcset="`${avif1xSmall} 193w, ${avif1xBig} 289w`"
      :sizes="responsiveSizes"
    />
    <source
      type="image/webp"
      :srcset="`${webp1xSmall} 193w, ${webp1xBig} 289w`"
      :sizes="responsiveSizes"
    />
    <source
      :srcset="`${png1xSmall} 193w, ${png1xBig} 289w`"
      :sizes="responsiveSizes"
    />
    <img
      :src="png2xBig"
      alt="A cut photo of Simon with his hands on his hips, like he’s ready for anything."
    />
  </picture>
</template>

<style scoped>
picture,
picture > * {
  height: 100%;
}
</style>
