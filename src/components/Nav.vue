<script setup lang="ts">
import HomeIcon from "./icons/HomeIcon.vue";
import LinksIcon from "./icons/LinksIcon.vue";
import PodcastIcon from "./icons/PodcastIcon.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <div class="title-menu">Menu</div>
    <ul>
      <li>
        <RouterLink class="nav-link" to="/">
          <div class="nav-text">Home</div>
          <HomeIcon class="nav-icon" />
        </RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/podcast">
          <div class="nav-text">Podcast</div>
          <PodcastIcon class="nav-icon" />
        </RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/links">
          <div class="nav-text">Links</div>
          <LinksIcon class="nav-icon" />
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

  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;

  color: var(--theme-700);
}

.theme-dark .title-menu {
  color: var(--theme-20);
}

.theme-transition .title-menu {
  transition: color 0.5s ease-in-out;
}

ul {
  margin-left: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  padding-left: 0;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;

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

  border-top-color: var(--theme-700);
  border-top-style: solid;
  border-top-width: 2px;

  transition: width 0.2s ease-out;
}

.theme-dark li:before {
  border-top-color: var(--theme-20);
}

.theme-transition li:before {
  transition: width 0.2s ease-out, border-top-color 0.5s ease-in-out;
}

.menu-open li:before {
  width: 100%;

  transition: width 0.5s ease-out;
}

.theme-transition .menu-open li:before {
  transition: width 0.5s ease-out, border-top-color 0.5s ease-in-out;
}

.nav-link {
  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  overflow-x: hidden;

  width: 100%;

  padding-top: 10px;
  padding-bottom: 13px;

  font-size: 28px;
  font-weight: 300;
  text-decoration-line: none;

  color: var(--theme-700);
}

.theme-dark .nav-link {
  color: var(--theme-20);
}

.theme-transition .nav-link {
  transition: color 0.5s ease-in-out;
}

.nav-icon {
  width: 35px;

  padding-top: 2px;

  transform: translateX(40px) rotate(-45deg);
  transform-origin: top;

  transition: transform 0.3s ease-in-out;
}

.nav-link:hover .nav-icon {
  transform: none;
}

.menu-open li:nth-child(2):before {
  transition: width 0.5s 0.1s ease-out, border-top-color 0.5s ease-in-out;
}

.menu-open li:nth-child(3):before {
  transition: width 0.5s 0.2s ease-out, border-top-color 0.5s ease-in-out;
}

.menu-open li:nth-child(4):before {
  transition: width 0.5s 0.3s ease-out, border-top-color 0.5s ease-in-out;
}

.menu-open li:nth-child(5):before {
  transition: width 0.5s 0.4s ease-out, border-top-color 0.5s ease-in-out;
}

.menu-open li:nth-child(6):before {
  transition: width 0.5s 0.5s ease-out, border-top-color 0.5s ease-in-out;
}

.menu-open li:nth-child(7):before {
  transition: width 0.5s 0.6s ease-out, border-top-color 0.5s ease-in-out;
}

.menu-open li:nth-child(8):before {
  transition: width 0.5s 0.7s ease-out, border-top-color 0.5s ease-in-out;
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
    justify-content: space-around;

    padding-top: 4px;
    padding-bottom: 12px;

    font-size: 22px;
  }

  .nav-text {
    transition: transform 0.2s ease-in-out;
  }

  .nav-link:hover .nav-text {
    transform: translateY(-6px);
  }

  .nav-text:after {
    content: "";

    display: block;

    position: absolute;

    left: 50%;
    transform: translate(-50%, 6px);

    height: 4px;
    width: 4px;

    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;

    opacity: 0;

    background-color: var(--theme-700);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .theme-dark .nav-text:after {
    background-color: var(--theme-20);
  }

  .theme-transition .nav-text:after {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
      background-color 0.5s ease-in-out;
  }

  .nav-link:hover .nav-text:after {
    transform: translate(-50%, 0px);
    opacity: 1;
  }

  .nav-icon {
    display: none;
  }

  .extra-line {
    display: none;
  }
}
</style>
