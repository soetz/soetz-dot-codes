<script setup lang="ts">
const props = defineProps({
  keepSmall: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div>
    <ul :class="{ 'keep-small': props.keepSmall }">
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

  color: var(--theme-700);

  list-style-type: none;

  font-weight: 500;
  text-align: center;
}

ul.keep-small {
  grid-template-columns: 1fr 1fr;
}

.theme-dark ul {
  color: var(--theme-30);
}

.theme-transition ul {
  transition: color 0.5s ease-in-out;
}

@media screen and (min-width: 500px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
