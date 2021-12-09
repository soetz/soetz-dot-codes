<template>
  <div>
    <h2>Skills used</h2>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 13px;
  row-gap: 13px;

  padding-left: 0;

  list-style-type: none;

  font-weight: 500;
}

@media screen and (min-width: 800px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
