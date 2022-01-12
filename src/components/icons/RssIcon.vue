<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    role="img"
  >
    <title>Aller au flux RSS</title>
    <g>
      <path
        d="M6.5,16C7.3,16,8,16.7,8,17.5S7.3,19,6.5,19S5,18.3,5,17.5S5.7,16,6.5,16 M6.5,15C5.1,15,4,16.1,4,17.5S5.1,20,6.5,20
			S9,18.9,9,17.5S7.9,15,6.5,15L6.5,15z"
      />
      <path
        d="M5,4.5C12.8,5,19,11.2,19.5,19h-1C18,11.8,12.2,6,5,5.5V4.5 M4,3.5v3c7.4,0,13.5,6.1,13.5,13.5h3
			C20.5,10.9,13.1,3.5,4,3.5L4,3.5z"
      />
      <path
        d="M5,9c5.3,0.5,9.5,4.7,10,10h-1c-0.5-4.7-4.2-8.5-9-9V9 M4,8v3c5,0,9,4,9,9h3C16,13.4,10.6,8,4,8L4,8z"
      />
    </g>
  </svg>
</template>

<style scoped>
path {
  fill: var(--theme-700);
}

.theme-dark path {
  fill: var(--theme-20);
}

.theme-transition path {
  transition: fill 0.5s ease-in-out;
}
</style>
