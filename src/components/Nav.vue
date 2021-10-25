<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <ul>
      <li class="active">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/podcast">Podcast</RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/ethics">Ethics</RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/links">Links</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  padding-top: 32px;
  padding-left: 12px;
}

ul {
  margin: 0;
  padding: 0;

  list-style-type: none;
}

li {
  display: inline-block;

  position: relative;

  margin-right: 20px;
  margin-bottom: 54px;

  pointer-events: all;
}

li.active::after {
  display: block;

  position: absolute;
  bottom: -36px;
  left: 18px;

  width: 100px;

  content: "↑ you’re here";
}

.nav-link {
  padding: 4px;

  background-color: var(--theme-60);
  color: var(--theme-900);

  font-size: 22px;
  font-weight: 500;
  text-decoration: none;

  border-color: var(--theme-20);
  border-width: 6px;
  border-style: solid;

  box-shadow: var(--theme-20) 6px 6px;
}

.nav-link:hover {
  animation: menu-hover 0.3s ease-in-out alternate infinite;
}

@keyframes menu-hover {
  from {
    box-shadow: var(--theme-20) 6px 6px;
  }

  to {
    box-shadow: var(--theme-20) 10px 10px;
  }
}
</style>
