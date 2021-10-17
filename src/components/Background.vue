<script setup lang="ts">
import { Camera, Plane, Renderer, Scene, ShaderMaterial } from "troisjs";
import { Vector2, Vector3 } from "three";
import { palette } from "../colors";
import { useRoute } from "vue-router";
import { watch } from "@vue/runtime-core";

const fragmentShader = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_background_color;
uniform vec3 u_primary_color;
uniform vec3 u_secondary_color;
// simplex noise borrowed from Nikita Miroposkiy (https://www.shadertoy.com/view/XsX3zB)

#define PI 3.141592

/* discontinuous pseudorandom uniformly distributed in [-0.5, +0.5]^3 */
vec3 pseudoRandom3(vec3 seed) {
	float multiplier = 4096.0 * sin(dot(seed, vec3(17.0, 59.4, 15.0)));
	vec3 pseudoRandomOutput;
	pseudoRandomOutput.z = fract(512.0 * multiplier);
	multiplier *= .125;
	pseudoRandomOutput.x = fract(512.0 * multiplier);
	multiplier *= .125;
	pseudoRandomOutput.y = fract(512.0 * multiplier);
	return pseudoRandomOutput - 0.5;
}

/* skew constants for 3d simplex functions */
const float F3 =  0.3333333;
const float G3 =  0.1666667;

/* 3d simplex noise */
float simplex3(vec2 xy, float z, float size, float offset) {
    /* 1. find current tetrahedron T and its four vertices */
    /* s, s+i1, s+i2, s+1.0 - absolute skewed (integer) coordinates of T vertices */
    /* x, x1, x2, x3 - unskewed coordinates of p relative to each of T vertices*/

    vec3 p = vec3(xy, z);
    p.xy *= size;
    p.xy += offset;

    /* calculate s and x */
    vec3 s = floor(p + dot(p, vec3(F3)));
    vec3 x = p - s + dot(s, vec3(G3));

    /* calculate i1 and i2 */
    vec3 e = step(vec3(0.0), x - x.yzx);
    vec3 i1 = e*(1.0 - e.zxy);
    vec3 i2 = 1.0 - e.zxy*(1.0 - e);

    /* x1, x2, x3 */
    vec3 x1 = x - i1 + G3;
    vec3 x2 = x - i2 + 2.0*G3;
    vec3 x3 = x - 1.0 + 3.0*G3;

    /* 2. find four surflets and store them in d */
    vec4 w, d;

    /* calculate surflet weights */
    w.x = dot(x, x);
    w.y = dot(x1, x1);
    w.z = dot(x2, x2);
    w.w = dot(x3, x3);

    /* w fades from 0.6 at the center of the surflet to 0.0 at the margin */
    w = max(0.6 - w, 0.0);

    /* calculate surflet components */
    d.x = dot(pseudoRandom3(s), x);
    d.y = dot(pseudoRandom3(s + i1), x1);
    d.z = dot(pseudoRandom3(s + i2), x2);
    d.w = dot(pseudoRandom3(s + 1.0), x3);

    /* multiply d by w^4 */
    w *= w;
    w *= w;
    d *= w;

    /* 3. return the sum of the four surflets */
    return 0.5 + 0.5 * dot(d, vec4(52.0));
}

float stereotype(float x, float factor, float center) {
    return (-cos(PI * clamp(x - (center - 0.5/factor), 0.0, 1.0/factor) * factor) + 1.0) / 2.0;
}

void main()
{
    vec2 normalizedCoordinates = (gl_FragCoord/max(u_resolution.x, u_resolution.y)).xy;
    float time = u_time * 0.01;

    float secondaryColorHardeningFactor = stereotype(simplex3(normalizedCoordinates, time * 2.0, 0.5, 0.0), 4.0, 0.6);
    float secondaryColorNoise = simplex3(normalizedCoordinates, time, 1.0, 10.0);
    float firstMix = stereotype(secondaryColorNoise, 8.0 + secondaryColorHardeningFactor * 248.0, 0.65);
    vec3 result = mix(u_background_color, u_secondary_color, firstMix);

    float primaryColorHardeningFactor = stereotype(simplex3(normalizedCoordinates, time * 2.0, 1.0, 20.0), 4.0, 0.6);
    float primaryColorNoise = simplex3(normalizedCoordinates, time, 1.8, 30.0);
    float secondMix = stereotype(primaryColorNoise, 1.0 + primaryColorHardeningFactor * 248.0, 0.3);
    result = mix(u_primary_color, result, secondMix);

    float grainNoise = stereotype(simplex3(normalizedCoordinates, time * 5.0, max(u_resolution.x, u_resolution.y) / 2.0, 40.0), 0.8, 0.8);
    result = result + result * vec3(grainNoise / 6.0);

    gl_FragColor = vec4(result, 1.0);
}
`;

const hexColorToVec3 = (color: string) => {
  color = color[0] === "#" ? color.slice(1, 8) : color.slice(0, 7);
  const red = parseInt(color.slice(0, 2), 16);
  const green = parseInt(color.slice(2, 4), 16);
  const blue = parseInt(color.slice(4, 6), 16);
  return new Vector3(red / 255.0, green / 255.0, blue / 255.0);
};

const uniforms = {
  u_time: { type: "f", value: 1.0 },
  u_resolution: {
    type: "v2",
    value: new Vector2(window.innerWidth, window.innerHeight),
  },
  u_background_color: {
    type: "v3",
    value: hexColorToVec3(palette.orange[900]),
  },
  u_primary_color: {
    type: "v3",
    value: hexColorToVec3(palette.orange[700]),
  },
  u_secondary_color: {
    type: "v3",
    value: hexColorToVec3(palette.orange[100]),
  },
};

const animate = () => {
  renderShader();
  requestAnimationFrame(animate);
};

let initialTime = performance.now();

const renderShader = () => {
  const elapsedTime = performance.now() - initialTime;
  uniforms.u_time.value = elapsedTime / 1000.0;
  uniforms.u_resolution.value.x = window.innerWidth;
  uniforms.u_resolution.value.y = window.innerHeight;
};

animate();

const route = useRoute();

watch(
  () => route.meta.color,
  (newColor: string) => {
    uniforms.u_background_color.value = hexColorToVec3(palette[newColor][900]);
    uniforms.u_primary_color.value = hexColorToVec3(palette[newColor][700]);
    uniforms.u_secondary_color.value = hexColorToVec3(palette[newColor][100]);
  }
);
</script>

<template>
  <Renderer class="background" resize="window">
    <Camera :position="{ z: 1 }" />
    <Scene>
      <Plane :width="2" :height="2">
        <ShaderMaterial
          :props="{ uniforms: uniforms, fragmentShader: fragmentShader }"
        />
      </Plane>
    </Scene>
  </Renderer>
</template>

<style>
.background {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>
