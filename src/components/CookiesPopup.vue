<script setup lang="ts">
import CookieIcon from "./icons/CookieIcon.vue";
import { onMounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";

const hidden = ref(true);

const hide = () => {
  hidden.value = true;
  localStorage.setItem("cookies-popup", "true");
};

onMounted(() => {
  hidden.value = !!localStorage.getItem("cookies-popup");
});
</script>

<template>
  <aside v-if="!hidden">
    <CookieIcon class="cookie-icon" />
    <div class="message-container">
      <h2>I won’t eat your cookies</h2>
      <p>
        I have no interest in collecting any of your personal data. The only
        thing that I record is the number of visits per page. Also, I try to use
        as few third-party software as possible. You can browse safely!
      </p>
      <button class="button-block" @click="hide()">Cool, I guess?</button>
    </div>
  </aside>
</template>

<style scoped>
aside {
  display: none;

  position: fixed;

  left: 0;
  top: 50%;

  transform: translateY(-50%);

  width: 200px;

  font-size: 12px;
}

.cookie-icon {
  width: 80px;

  position: absolute;

  left: 50%;
  top: -40px;

  transform: translateX(-50%);
}

.message-container {
  padding-left: 15px;
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;

  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  background-color: var(--theme-10);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.01),
    7px 14px 15px rgba(0, 0, 0, 0.016), 15px 30px 33px rgba(0, 0, 0, 0.022),
    50px 100px 120px rgba(0, 0, 0, 0.035);

  text-align: center;
}

.theme-dark .message-container {
  background-color: var(--theme-700);
}

.theme-transition .message-container {
  transition: background-color 0.5s ease-in-out;
}

@supports (
  (backdrop-filter: blur(5px)) or (-webkit-backdrop-filter: blur(5px))
) {
  .message-container {
    background-color: rgba(var(--theme-20-rgb), 0.6);
  }

  .theme-dark .message-container {
    background-color: rgba(var(--theme-700-rgb), 0.6);
  }
}

h2 {
  margin-top: 0;

  font-size: 18px;
}

p {
  text-align: left;
}

@media screen and (min-width: 1300px) {
  aside {
    display: block;
  }
}
</style>
