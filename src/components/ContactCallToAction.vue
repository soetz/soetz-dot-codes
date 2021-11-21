<script setup lang="ts">
import MailIcon from "./icons/MailIcon.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink to="/contact" class="contact-call-to-action">
    <div class="call-to-action-background"></div>
    <MailIcon class="mail-icon" />
    <div class="call-to-action-text-transform-container">
      <svg
        class="call-to-action-text"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 90 90"
      >
        <defs>
          <g id="contact-me-text">
            <path
              d="M22.5,18c0.4-0.4,0.8-0.6,1.1-0.7c0.1,0,0.1,0,0.2,0l0.6,0.6c0.1,0.1,0,0.1-0.1,0.2c-0.3,0.1-0.7,0.4-1,0.7
		c-0.8,0.7-0.8,1.5,0,2.4c0.8,0.9,1.7,1,2.4,0.3c0.3-0.3,0.6-0.6,0.8-0.9c0.1-0.1,0.1-0.1,0.2-0.1l0.5,0.6c0,0,0.1,0.1,0,0.2
		c-0.1,0.3-0.5,0.6-1,1.1c-1.3,1.1-2.7,1-3.9-0.4C20.8,20.3,21.5,18.9,22.5,18z"
            />
            <path
              d="M26.2,18.6c-0.9-1.5-0.8-2.9,0.6-3.8s2.7-0.3,3.6,1.2s0.8,2.9-0.6,3.8C28.4,20.7,27.2,20.2,26.2,18.6z M29.5,16.7
		c-0.7-1.1-1.3-1.3-2-0.9s-0.8,1.1-0.2,2.2c0.7,1.1,1.3,1.3,2,0.9S30.1,17.8,29.5,16.7z"
            />
            <path
              d="M35.7,17c-0.1,0-0.1,0-0.1,0l-3.1-2.9l1.3,3.5c0,0,0,0.1,0,0.1l-0.9,0.3c0,0-0.1,0-0.1,0l-1.9-5.1c0,0,0-0.1,0-0.1l1.2-0.4
		c0.1,0,0.1,0,0.1,0l3.1,2.9L34,11.8c0,0,0-0.1,0-0.1l0.9-0.3c0,0,0.1,0,0.1,0l1.9,5.1c0,0,0,0.1,0,0.1L35.7,17z"
            />
            <path
              d="M39.3,16.1C39.3,16.1,39.2,16.1,39.3,16.1l-0.9-4.5l-1.7,0.3c0,0-0.1,0-0.1-0.1L36.6,11c0,0,0-0.1,0.1-0.1l4.5-0.8
		c0,0,0.1,0,0.1,0.1l0.2,0.9c0,0,0,0.1-0.1,0.1l-1.7,0.3l0.8,4.4c0,0,0,0.1-0.1,0.1L39.3,16.1z"
            />
            <path
              d="M45.2,14.5l-2,0.1l-0.3,1c0,0-0.1,0.1-0.1,0.1l-1,0c-0.1,0-0.1-0.1-0.1-0.1l1.8-5.5c0,0,0.1-0.1,0.1-0.1l1,0
		c0,0,0.1,0,0.1,0.1l2,5.4c0,0.1,0,0.1,0,0.1l-1,0c0,0-0.1,0-0.1-0.1L45.2,14.5z M43.4,13.5l1.4,0l-0.8-2.1L43.4,13.5z"
            />
            <path
              d="M50.4,10.3c0.6,0.1,1,0.2,1.3,0.4c0.1,0,0.1,0.1,0.1,0.1l-0.1,0.8c0,0.1-0.1,0.1-0.2,0c-0.3-0.1-0.7-0.2-1.1-0.3
		c-1-0.1-1.7,0.4-1.9,1.6c-0.2,1.2,0.4,1.9,1.4,2c0.4,0.1,0.8,0.1,1.2,0c0.1,0,0.2,0,0.2,0.1l-0.1,0.8c0,0.1,0,0.1-0.1,0.1
		c-0.3,0.1-0.8,0.1-1.5,0c-1.6-0.2-2.5-1.4-2.3-3.2C47.6,10.5,49.1,10.1,50.4,10.3z"
            />
            <path
              d="M53.3,16.7c0,0-0.1-0.1-0.1-0.1l1.3-4.3l-1.6-0.5c0,0-0.1-0.1-0.1-0.1l0.3-0.8c0,0,0.1-0.1,0.1-0.1l4.3,1.3
		c0,0,0.1,0.1,0.1,0.1l-0.3,0.8c0,0-0.1,0.1-0.1,0.1l-1.6-0.5L54.3,17c0,0-0.1,0.1-0.1,0.1L53.3,16.7z"
            />
            <path
              d="M62.2,21c0,0-0.1-0.1,0-0.1l2-3.2l-3,2.6c0,0-0.1,0-0.1,0l-0.9-0.6c0,0-0.1-0.1,0-0.1l1.1-3.8l-2,3.2c0,0-0.1,0.1-0.1,0
		l-0.8-0.5c0,0-0.1-0.1,0-0.1l2.9-4.6c0,0,0.1-0.1,0.1,0l1.3,0.8c0,0,0.1,0.1,0,0.1l-1.2,4.1l3.2-2.8c0,0,0.1,0,0.1,0l1.3,0.8
		c0,0,0,0.1,0,0.1l-2.9,4.6c0,0-0.1,0.1-0.1,0L62.2,21z"
            />
            <path
              d="M63.9,22.3c0,0,0-0.1,0-0.1l3.7-4c0,0,0.1,0,0.1,0l2.7,2.6c0,0,0,0.1,0,0.1l-0.6,0.6c0,0-0.1,0-0.1,0l-1.9-1.8l-0.8,0.9
		l1.8,1.7c0,0,0,0.1,0,0.1l-0.6,0.6c0,0-0.1,0-0.1,0l-1.8-1.7l-0.9,0.9l2,1.9c0,0,0,0.1,0,0.1l-0.6,0.6c0,0-0.1,0-0.1,0L63.9,22.3z"
            />
            <path
              d="M67.2,27.3c0-0.1,0-0.1,0-0.1l6.7-2.4c0,0,0.1,0,0.1,0l0.4,0.6c0,0.1,0,0.1,0,0.1l-6.7,2.4c0,0-0.1,0-0.1,0L67.2,27.3z"
            />
            <path
              d="M68.7,29.4c0-0.1,0-0.1,0-0.1l6.9-1.8c0,0,0.1,0,0.1,0l0.3,0.6c0,0.1,0,0.1,0,0.1L69.1,30c0,0-0.1,0-0.1,0L68.7,29.4z"
            />
          </g>
        </defs>
        <use xlink:href="#contact-me-text" />
        <use
          xlink:href="#contact-me-text"
          transform="rotate(120)"
          transform-origin="45 45"
        />
        <use
          xlink:href="#contact-me-text"
          transform="rotate(240)"
          transform-origin="45 45"
        />
      </svg>
    </div>
  </RouterLink>
</template>

<style scoped>
.contact-call-to-action {
  z-index: 20;

  display: block;

  position: fixed;
  right: max(20px, calc(50% - 530px));
  bottom: 30px;

  width: 110px;
  height: 110px;

  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}

.contact-call-to-action > * {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}

.call-to-action-background {
  width: 100%;
  height: 100%;

  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.02),
    7px 14px 15px rgba(0, 0, 0, 0.032), 15px 30px 33px rgba(0, 0, 0, 0.044),
    50px 100px 120px rgba(0, 0, 0, 0.07);

  transform: translate(-50%, -50%) scale(80%);

  background-color: var(--theme-40);
  transition: transform 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.theme-transition .call-to-action-background {
  transition: transform 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6),
    background-color 0.5s ease-in-out;
}

.contact-call-to-action:hover .call-to-action-background {
  transform: translate(-50%, -50%);
}

.mail-icon {
  width: 42px;

  transform: translate(-50%, -50%) scale(80%);

  transition: transform 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.contact-call-to-action:hover .mail-icon {
  transform: translate(-50%, -50%);
}

.call-to-action-text-transform-container {
  width: 120px;
  height: 120px;

  transform: translate(-50%, -50%) scale(85%);

  transition: transform 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);

  pointer-events: none;
}

.contact-call-to-action:hover .call-to-action-text-transform-container {
  transform: translate(-50%, -50%);
}

.call-to-action-text {
  width: 100%;

  animation: rotating-text 20s linear infinite;
}

path {
  fill: var(--theme-700);
}

.theme-transition path {
  transition: fill 0.5s ease-in-out;
}

@keyframes rotating-text {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@media screen and (min-width: 1100px) {
  .contact-call-to-action {
    width: 130px;
    height: 130px;
  }
  .mail-icon {
    width: 52px;
  }

  .call-to-action-text-transform-container {
    width: 140px;
    height: 140px;
  }
}
</style>
