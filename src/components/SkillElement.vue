<template>
  <li>
    <span><slot></slot></span>
  </li>
</template>

<style scoped>
li {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 60px;

  padding-left: 8px;
  padding-top: 8px;
  padding-right: 8px;
  padding-bottom: 8px;

  background-color: rgba(var(--theme-20-rgb), 0.6);
  box-shadow: 0.7px 1.5px 1.5px rgba(0, 0, 0, 0.01),
    1.75px 3.5px 4px rgba(0, 0, 0, 0.018), 3.5px 7.5px 8px rgba(0, 0, 0, 0.025),
    12px 25px 30px rgba(0, 0, 0, 0.04);
}

.theme-dark li {
  background-color: rgba(var(--theme-700-rgb), 0.6);
}

.theme-transition li {
  transition: background-color 0.5s ease-in-out;
}
</style>
