<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
  >
    <g>
      <circle class="stroke" cx="12" cy="12" r="8.5" />
      <path
        class="stroke"
        d="M6.9,12c0,2.82,2.28,5.1,5.1,5.1s5.1-2.28,5.1-5.1"
      />
      <circle class="fill" cx="9.45" cy="9.02" r="1.27" />
      <circle class="fill" cx="14.55" cy="9.02" r="1.27" />
    </g>
  </svg>
</template>

<style scoped>
.stroke {
  fill: none;
  stroke-width: 2;

  stroke: var(--theme-700);
}

.theme-dark .stroke {
  stroke: var(--theme-20);
}

.theme-transition .stroke {
  transition: stroke 0.5s ease-in-out;
}

.fill {
  fill: var(--theme-700);
}

.theme-dark .fill {
  fill: var(--theme-20);
}

.theme-transition .fill {
  transition: fill 0.5s ease-in-out;
}
</style>
