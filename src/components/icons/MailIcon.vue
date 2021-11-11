<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
  >
    <g>
      <rect x="4" y="6" width="16" height="12" />
      <polyline points="4,6 12,12 20,6 " />
    </g>
  </svg>
</template>

<style scoped>
rect,
polyline {
  fill: none;

  stroke: var(--theme-700);
  transition: stroke 0.5s ease-in-out;
}

rect {
  stroke-width: 2;
}
</style>
