<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
  >
    <g>
      <polyline points="8,8 4,12 8,16 	" />
      <polyline points="16,8 20,12 16,16 	" />
      <polygon points="13.006,4.5 8.921,19.5 10.994,19.5 15.079,4.5 	" />
    </g>
  </svg>
</template>

<style scoped>
polyline {
  fill: none;
  stroke-width: 2;

  stroke: var(--theme-700);
}

.theme-dark polyline {
  stroke: var(--theme-20);
}

.theme-transition polyline {
  transition: stroke 0.5s ease-in-out;
}

polygon {
  fill: var(--theme-700);
}

.theme-dark polygon {
  fill: var(--theme-20);
}

.theme-transition polygon {
  transition: fill 0.5s ease-in-out;
}
</style>
