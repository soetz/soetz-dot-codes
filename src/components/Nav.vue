<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <div class="title-menu">Menu</div>
    <ul>
      <li>
        <RouterLink class="nav-link" to="/">
          <div class="nav-text">Home</div>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/podcast">
          <div class="nav-text">Podcast</div>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/ethics">
          <div class="nav-text">Ethics</div>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/links">
          <div class="nav-text">Links</div>
        </RouterLink>
      </li>
      <li class="extra-line"></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  padding-top: 18px;
  padding-left: 12px;
}

.title-menu {
  margin-bottom: 13px;

  color: var(--theme-20);

  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
}

ul {
  margin: 0;
  padding: 0;

  list-style-type: none;
}

li {
  display: block;

  position: relative;

  margin-right: 20px;

  pointer-events: all;
}

li:before {
  content: "";

  display: block;

  width: 0;

  border-top: solid 2px var(--theme-20);

  transition: width 0.2s ease-out;
}

.menu-open li:before {
  width: 100%;

  transition: width 0.5s ease-out;
}

.nav-link {
  display: block;

  width: 100%;

  padding-top: 10px;
  padding-bottom: 13px;

  color: var(--theme-20);

  font-size: 28px;
  font-weight: 300;
  text-decoration: none;
}

.menu-open li:nth-child(2):before {
  transition: width 0.5s 0.1s ease-out;
}

.menu-open li:nth-child(3):before {
  transition: width 0.5s 0.2s ease-out;
}

.menu-open li:nth-child(4):before {
  transition: width 0.5s 0.3s ease-out;
}

.menu-open li:nth-child(5):before {
  transition: width 0.5s 0.4s ease-out;
}

.menu-open li:nth-child(6):before {
  transition: width 0.5s 0.5s ease-out;
}

.menu-open li:nth-child(7):before {
  transition: width 0.5s 0.6s ease-out;
}

.menu-open li:nth-child(8):before {
  transition: width 0.5s 0.7s ease-out;
}

@media screen and (min-width: 600px) {
  .title-menu {
    display: none;
  }

  nav {
    padding-left: 0;
    padding-top: 0;
  }

  ul {
    display: flex;
  }

  li {
    flex-grow: 1;

    margin-right: 0;
  }

  li:before {
    content: none;
  }

  .nav-link {
    padding-top: 4px;
    padding-bottom: 12px;

    font-size: 22px;
    text-align: center;
  }

  .nav-link .nav-text {
    transition: transform 0.2s ease-in-out;
  }

  .nav-link:hover .nav-text {
    transform: translateY(-6px);
  }

  .nav-link .nav-text:after {
    content: "";

    display: block;

    position: absolute;

    left: 50%;
    transform: translate(-50%, 6px);

    height: 4px;
    width: 4px;

    border-radius: 100%;

    background-color: var(--theme-20);
    opacity: 0;

    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .nav-link:hover .nav-text:after {
    transform: translate(-50%, 0px);
    opacity: 1;
  }

  .extra-line {
    display: none;
  }
}
</style>
