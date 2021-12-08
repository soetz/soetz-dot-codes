<script setup lang="ts">
import Appear from "../../components/Appear.vue";
import Experience from "./components/Experience.vue";
import Parallax from "../../components/Parallax.vue";
import Photo from "./components/Photo.vue";
import PhotoEffect from "./components/PhotoEffect.vue";
import ProjectLink from "./components/ProjectLink.vue";
import { ref } from "@vue/reactivity";

// TODO add resume download

const birthday = new Date("1998-02-14");
const today = new Date();

const beforeBirthdayInYear =
  today.getMonth() < birthday.getMonth() ||
  (today.getMonth() === birthday.getMonth() &&
    today.getDate() < birthday.getDate());

const age = beforeBirthdayInYear
  ? today.getFullYear() - birthday.getFullYear() - 1
  : today.getFullYear() - birthday.getFullYear();

const storytellingShown = ref(false);

const showStorytelling = () => {
  storytellingShown.value = true;
};
</script>

<template>
  <div class="limited-width intro">
    <Appear>
      <h1>
        Oh, hey! <span class="waving-hand">👋</span><br />
        <span class="my-name-is">My name’s Simon Lecutiez</span>,
      </h1>
      <p class="short-bio">
        I’m {{ age }},<br />
        and I’m a frenchy junior front-end developer.
      </p>
      <p>
        Also, I’m a he/him. You can
        <a class="link-block" target="_blank">download my resume</a> and/or
        continue scrolling&nbsp;:)
      </p>
    </Appear>
    <div class="photo-container">
      <Parallax class="parallax-container" :speed="0.2">
        <PhotoEffect class="photo-effect" />
        <Photo class="photo" />
      </Parallax>
    </div>
  </div>
  <div class="about-me">
    <Appear class="limited-width">
      <div class="limited-width-small">
        <h2>Just a bit more about me</h2>
        <p>
          First of all, I’m extra excited that you came to visit my website!!
        </p>
        <p>
          I have a strong belief in the idea that we are the product of what we
          experience, especially as children, so I have
          <a class="link-block" @click="showStorytelling()">
            a few stories that tell a bit about me</a
          >, if you’re interested&nbsp;😇
        </p>
        <transition name="appear">
          <div v-show="storytellingShown">
            <p>
              I spent <em>hours</em> playing with LEGOs and Meccanos as a kid.
              My favourite were the ones with motors because I would build them
              by following the instructions, and then take the motor out and try
              to do something else with it. That was great.
            </p>
            <p>
              I also firmly remember being fascinated by the movie Dumbo − in
              part probably because I was a tad too young to watch it at the
              time, I guess. I was especially struck by
              <a
                class="link-block"
                target="_blank"
                href="https://youtu.be/jcZUPDMXzJ8"
                >this scene</a
              >
              in which Dumbo drinks alcohol, and the filmmakers took it as an
              excuse to make the most amazing visual experience that I have
              knowledge of.
            </p>
            <p>
              Fast forward more or less a decade. I open my browser’s developer
              tools for the first time… I’d pay a lot of money to see the look
              on my face at that moment! I can’t say I understood right away
              that it was what I’d do for the rest of my life, but I definitely
              knew I would have a lot of fun with it.
            </p>
            <p>
              Nowadays, I write code for a living. Specifically web, front-end
              code. I love when visual things of any kind completly capture
              attention, just like the scene from Dumbo, and I believe that
              there’s always something to learn… which probably comes from the
              time I was trying to hack my toys&nbsp;🤓 The browser is the
              perfect tool to do all that so I couldn’t be happier!
            </p>
          </div>
        </transition>
      </div>
    </Appear>
  </div>
  <div class="past limited-width">
    <h2>What I did in the past</h2>
    <div class="two-columns">
      <Appear class="projects-container">
        <h3>Cool projects</h3>
        <ul>
          <ProjectLink
            :name="'MIÀM - Overall project'"
            :type="'school project'"
            :symbol="'🏗'"
            :to="'/work/miam'"
          />
          <ProjectLink
            :name="'MIÀM - Teaching'"
            :type="'school project'"
            :symbol="'👨‍🏫'"
            :to="'/work/miam-teaching'"
          />
          <ProjectLink
            :name="'This site’s custom analytics'"
            :type="'personal project'"
            :symbol="'📊'"
            :to="'/work/analytics'"
          />
        </ul>
      </Appear>
      <Appear>
        <h3>Working</h3>
        <ul>
          <Experience
            :when-start="'2019'"
            :when-end="'2021'"
            :where="'Ciril Group'"
            :what="'Web developer (R&D)'"
            :notes="'apprenticeship'"
          />
          <Experience
            :when-start="'2019'"
            :when-months="'four months'"
            :when-months-short="'4 mos.'"
            :where="'Kryzalid'"
            :what="'Web developer'"
            :notes="'internship in montreal, qc'"
          />
          <Experience
            :when-start="'2018'"
            :when-months="'three months'"
            :when-months-short="'3 mos.'"
            :where="'Tilkee'"
            :what="'Web developer'"
            :notes="'internship'"
          />
        </ul>
        <h3>Learning</h3>
        <ul>
          <Experience
            :when-start="'2019'"
            :when-end="'2021'"
            :where="'Institut G4'"
            :what="'IT Project Manager title (equivalent to Master’s)'"
            :notes="'project management'"
          />
          <Experience
            :when-start="'2018'"
            :when-end="'2019'"
            :where="'ICOM Lyon 2'"
            :what="'LP Métiers du Numérique (equivalent to Bachelor’s)'"
            :notes="'communication + media'"
          />
          <Experience
            :when-start="'2016'"
            :when-end="'2018'"
            :where="'IUT Lyon 1'"
            :what="'DUT Informatique (two-year degree)'"
            :notes="'computer science'"
          />
        </ul>
        <h3>Colleagues saying stuff</h3>
      </Appear>
    </div>
  </div>
  <div class="future">
    <Appear class="limited-width">
      <h2>What I’d like to do now!</h2>
    </Appear>
  </div>
  <div class="aside-from-work">
    <Appear class="limited-width">
      <h2>Aside from work…</h2>
    </Appear>
  </div>
</template>

<style scoped>
.limited-width {
  width: 100%;
  max-width: 800px;

  margin-left: auto;
  margin-right: auto;

  padding-left: 13px;
  padding-right: 13px;
  padding-bottom: 13px;

  overflow-x: hidden;
}

.intro {
  display: flex;
  flex-direction: column;

  position: relative;

  width: 100%;

  overflow-y: hidden;

  z-index: 1;
}

.waving-hand {
  display: inline-block;
  transform-origin: 80% 80%;

  animation: waving-hand 0.8s ease-in-out infinite alternate;
}

h1 {
  margin-bottom: 0;
}

h1,
.short-bio {
  font-weight: 400;
}

.my-name-is {
  font-weight: 600;
}

.short-bio {
  margin-top: 0;

  font-family: new-spirit, serif;
  font-size: 2em;
}

.photo-container {
  align-self: center;

  width: var(--fullWidth);
  max-width: 300px;
  height: 300px;

  margin-top: 30px;
  margin-left: 40px;
  margin-bottom: -50px;

  z-index: -1;
}

.parallax-container {
  height: 100%;
}

.parallax-container > * {
  height: 100%;

  position: absolute;

  left: 0;
  top: 0;
}

.photo {
  animation: photo-wave 2.5s ease-in-out -2s infinite alternate;
}

.about-me {
  margin-bottom: 30px;

  background-color: var(--theme-20);

  box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.02),
    7px 14px 15px rgba(0, 0, 0, 0.032), 15px 30px 33px rgba(0, 0, 0, 0.044),
    50px 100px 120px rgba(0, 0, 0, 0.07);
}

.theme-dark .about-me {
  background-color: var(--theme-700);
}

.theme-transition .about-me {
  transition: background-color 0.5s ease-in-out;
}

.limited-width-small {
  max-width: 480px;
}

.appear-enter-active {
  transform-origin: bottom;
  transition: opacity 1s, transform 1.5s;
}

.appear-enter-from {
  opacity: 0.3;
  transform: translateY(100px) scaleY(0.9);
}

.two-columns {
  display: grid;
  column-gap: 20px;
}

.projects-container {
  overflow-x: visible;
  overflow-y: visible;
}

.past {
  overflow-x: visible;
  overflow-y: visible;
}

.past h3 {
  font-family: boreal, Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
}

.past ul {
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

@media screen and (min-width: 800px) {
  .two-columns {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-height: 700px),
  screen and (min-height: 600px) and (min-width: 540px) {
  .photo-container {
    width: 400px;
    height: 450px;

    margin-left: 0;
  }
}

@keyframes waving-hand {
  from {
    transform: rotate(-15deg);
  }
  to {
    transform: rotate(15deg);
  }
}

@keyframes photo-wave {
  from {
    transform: translateY(-4px);
  }
  to {
    transform: translateY(-12px);
  }
}
</style>
