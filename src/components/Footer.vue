<script setup lang="ts">
import GithubIcon from "./icons/social/GithubIcon.vue";
import GitlabIcon from "./icons/social/GitlabIcon.vue";
import { RouterLink } from "vue-router";
import TwitterIcon from "./icons/social/TwitterIcon.vue";
</script>

<template>
  <footer>
    <div class="footer-responsive-container">
      <div class="links-container">
        <ul class="social">
          <li>
            <a href="https://www.twitter.com/soetzcodes/">
              <TwitterIcon class="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/soetz/">
              <GithubIcon class="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.gitlab.com/soetz/">
              <GitlabIcon class="social-icon" />
            </a>
          </li>
        </ul>
        <RouterLink class="link-block" to="/legal">
          Legal stuff (french)
        </RouterLink>
      </div>
      <div>Made with ❤️ and Vue. Also, work.</div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  min-height: 160px;

  background-color: var(--theme-20);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.02),
    7px 14px 15px rgba(0, 0, 0, 0.032), 15px 30px 33px rgba(0, 0, 0, 0.044),
    50px 100px 120px rgba(0, 0, 0, 0.07);

  font-size: 16px;

  color: var(--theme-700);
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
}

.theme-dark footer {
  background-color: var(--theme-700);
  color: var(--theme-10);
}

@supports (
  (backdrop-filter: blur(5px)) or (-webkit-backdrop-filter: blur(5px))
) {
  footer {
    background-color: rgba(var(--theme-20-rgb), 0.6);
  }

  .theme-dark footer {
    background-color: rgba(var(--theme-700-rgb), 0.6);
  }
}

.footer-responsive-container {
  width: 100%;
  max-width: 800px;
  height: 100%;

  padding-left: 13px;
  padding-top: 4px;
  padding-right: 13px;
  padding-bottom: 15px;

  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.links-container {
  display: flex;
  flex-direction: column;
  align-items: start;
}

ul {
  width: calc(100% - 135px);
  max-width: 200px;

  display: inline-flex;
  justify-content: space-between;

  margin: 0;
  margin-bottom: 4px;
  padding: 0;

  list-style-type: none;
}

li {
  padding-top: 2px;
}

a {
  color: var(--theme-700);
  transition: color 0.5s ease-in-out;
}

.social-icon {
  width: 58px;
  padding: 8px;
}

@media screen and (min-width: 600px) {
  footer {
    min-height: 84px;

    font-size: 14px;
  }

  .footer-responsive-container {
    padding-top: 0;
  }

  .links-container {
    width: calc(var(--fullWidth) - 150px);
    max-width: 750px;

    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    width: initial;

    margin-bottom: 0;
  }

  .social-icon {
    width: 40px;
  }
}

@media screen and (min-width: 800px) {
  .links-container {
    width: calc(800px - 150px + (var(--fullWidth) - 800px) * 0.5);
  }
}

@media screen and (min-width: 1100px) {
  footer {
    min-height: 94px;

    font-size: 16px;
  }

  .social-icon {
    width: 48px;
  }
}
</style>
