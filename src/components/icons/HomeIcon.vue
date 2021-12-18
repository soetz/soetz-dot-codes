<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    role="img"
  >
    <title>Home icon</title>
    <g>
      <polyline points="2,12.56 12,4.78 22,12.56 	" />
      <polyline points="6.44,9.22 6.44,19.22 17.56,19.22 17.56,9.22 	" />
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
</style>
