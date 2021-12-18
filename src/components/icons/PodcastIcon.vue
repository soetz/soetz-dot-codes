<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    role="img"
  >
    <title>Microphone icon</title>
    <g>
      <path
        class="stroke-large"
        d="M13.72,21h-3.44c-2.63,0-4.78-2.15-4.78-4.78V7.78C5.5,5.15,7.65,3,10.28,3h3.44c2.63,0,4.78,2.15,4.78,4.78
	v8.44C18.5,18.85,16.35,21,13.72,21z"
      />
      <path
        d="M9.37,6.97H6v2.06h3.37c0.57,0,1.03-0.46,1.03-1.03S9.93,6.97,9.37,6.97z"
      />
      <path
        d="M9.37,10.97H6v2.06h3.37c0.57,0,1.03-0.46,1.03-1.03S9.93,10.97,9.37,10.97z"
      />
      <path
        d="M9.37,14.97H6v2.06h3.37c0.57,0,1.03-0.46,1.03-1.03S9.93,14.97,9.37,14.97z"
      />
      <path
        d="M14.63,6.97c-0.57,0-1.03,0.46-1.03,1.03s0.46,1.03,1.03,1.03H18V6.97H14.63z"
      />
      <path
        d="M14.63,10.97c-0.57,0-1.03,0.46-1.03,1.03s0.46,1.03,1.03,1.03H18v-2.06H14.63z"
      />
      <path
        d="M14.63,14.97c-0.57,0-1.03,0.46-1.03,1.03s0.46,1.03,1.03,1.03H18v-2.06H14.63z"
      />
    </g>
  </svg>
</template>

<style scoped>
path {
  fill: none;

  stroke: var(--theme-700);
}

.theme-dark path {
  stroke: var(--theme-20);
}

.theme-transition path {
  transition: stroke 0.5s ease-in-out;
}

.stroke-large {
  stroke-width: 2;
}
</style>
