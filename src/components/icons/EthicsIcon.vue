<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
  >
    <g>
      <path
        d="M12,19.52c1.98-1,6.33-3.64,8-8c0.53-1.39,0.88-3.34,0-5c-0.76-1.43-2.05-2.23-4-2
	c-1.68,0.2-3.33,1.67-3.93,3.29c-0.02,0.07-0.11,0.07-0.13,0C11.33,6.19,9.68,4.72,8,4.52c-1.95-0.23-3.24,0.57-4,2
	c-0.88,1.66-0.53,3.61,0,5C5.67,15.88,10.02,18.52,12,19.52z"
      />
    </g>
  </svg>
</template>

<style scoped>
path {
  fill: none;
  stroke-width: 2;

  stroke: var(--theme-700);
}

.theme-dark path {
  stroke: var(--theme-20);
}

.theme-transition path {
  transition: stroke 0.5s ease-in-out;
}
</style>
