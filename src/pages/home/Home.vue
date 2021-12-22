<script setup lang="ts">
import Appear from "../../components/Appear.vue";
import CyrilPhoto from "./components/CyrilPhoto.vue";
import Experience from "./components/Experience.vue";
import More from "../../components/More.vue";
import Parallax from "../../components/Parallax.vue";
import Photo from "./components/Photo.vue";
import PhotoEffect from "./components/PhotoEffect.vue";
import ProjectLink from "./components/ProjectLink.vue";
import { RouterLink } from "vue-router";
import SkillElement from "../../components/SkillElement.vue";
import SkillsList from "../../components/SkillsList.vue";
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
const moreTechonologiesShown = ref(false);
const moreOtherShown = ref(false);
const moreProjectsShown = ref(false);

const showStorytelling = () => {
  storytellingShown.value = true;
};

const showTechnologies = () => {
  moreTechonologiesShown.value = true;
};

const showOther = () => {
  moreOtherShown.value = true;
};

const showProjects = () => {
  moreProjectsShown.value = true;
};
</script>

<template>
  <section class="limited-width intro">
    <Appear>
      <h1>
        Oh, hey! <span class="waving-hand">👋</span><br />
        <em class="my-name-is">My name’s Simon Lecutiez</em>,
      </h1>
      <p class="short-bio">
        I’m {{ age }},<br />
        and I’m a frenchy junior front-end developer.
      </p>
      <p>
        Also, my pronouns are he/him. You can
        <a target="_blank" class="link-block">download my resume</a> and/or
        continue scrolling&nbsp;:)
      </p>
    </Appear>
    <div class="photo-container">
      <Parallax class="parallax-container" :speed="0.4">
        <PhotoEffect class="stack photo-effect" />
        <Photo class="stack photo" />
      </Parallax>
    </div>
  </section>
  <section class="about-me">
    <Appear class="limited-width">
      <div class="limited-width-small" role="presentation">
        <h2>Just a bit more about me</h2>
        <p>
          First of all, I’m extra excited that you came to visit my website!!
        </p>
        <p>
          I have a strong belief in the idea that we are the product of what we
          experience, especially as children, so I have a few stories that tell
          a bit about me, if you’re interested&nbsp;😇
        </p>

        <button
          v-if="!storytellingShown"
          class="more-button reset-button more-target"
          @click="showStorytelling()"
        >
          <More bold direction="down">read them</More>
        </button>
        <transition name="appear">
          <div v-show="storytellingShown">
            <p>
              I spent <em>hours</em> playing with LEGOs and Meccanos as a kid.
              My favourite were the ones with motors because I would build them
              by following the instructions, and then take the motor out and try
              to do something else with it. That was great.
            </p>
            <p>
              I also firmly remember being fascinated by the movie Dumbo&nbsp;−
              in part probably because I was a tad too young to watch it at the
              time, I guess. I was especially struck by
              <a
                class="link-block"
                href="https://youtu.be/jcZUPDMXzJ8"
                target="_blank"
                rel="nofollow noopener noreferrer"
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
              code. I feel very lucky because I got to work alongside extremely
              talented people who inspired me and encouraged me to keep pushing
              my limits. I love building and learning new stuff and the browser
              is the perfect tool for those things so I couldn’t be
              happier!&nbsp;🤓
            </p>
          </div>
        </transition>
      </div>
    </Appear>
  </section>
  <section class="skills">
    <Appear class="overflow-visible limited-width">
      <h2 class="skills-title">
        What I can handle&nbsp;<em
          >− but there’s always room for improvement</em
        >
      </h2>
      <h3>Technologies</h3>
      <SkillsList>
        <SkillElement>Typescript</SkillElement>
        <SkillElement>Vue</SkillElement>
        <SkillElement>Angular</SkillElement>
        <SkillElement
          ><abbr title="Scalable Vector Graphics">SVG</abbr></SkillElement
        >
        <transition name="appear">
          <SkillElement v-show="moreTechonologiesShown">d3</SkillElement>
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreTechonologiesShown">three.js</SkillElement>
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreTechonologiesShown"
            >Tailwind CSS</SkillElement
          >
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreTechonologiesShown"
            >Git/Gitflow</SkillElement
          >
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreTechonologiesShown">PHP</SkillElement>
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreTechonologiesShown">Laravel</SkillElement>
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreTechonologiesShown">Wordpress</SkillElement>
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreTechonologiesShown">Webflow</SkillElement>
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreTechonologiesShown">MySQL</SkillElement>
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreTechonologiesShown"
            >PostgreSQL</SkillElement
          >
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreTechonologiesShown">MongoDB</SkillElement>
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreTechonologiesShown">Cordova</SkillElement>
        </transition>
      </SkillsList>
      <button
        v-if="!moreTechonologiesShown"
        class="more-button reset-button more-target"
        @click="showTechnologies()"
      >
        <More bold direction="down">and more</More>
      </button>
      <h3>Other</h3>
      <SkillsList>
        <SkillElement>Accessibility</SkillElement>
        <SkillElement
          ><abbr title="Search Engine Optimisation">SEO</abbr></SkillElement
        >
        <SkillElement>Agile</SkillElement>
        <SkillElement>V-model</SkillElement>
        <transition name="appear">
          <SkillElement v-show="moreOtherShown"
            ><span title="Adobe Illustrator">Illustrator</span>&nbsp;+
            Inkscape</SkillElement
          >
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreOtherShown"
            ><span title="Adobe Photoshop">Photoshop</span>&nbsp;+
            <abbr title="GNU Image Manipulation Program"
              >GIMP</abbr
            ></SkillElement
          >
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreOtherShown"
            ><span title="Adobe XD">XD</span></SkillElement
          >
        </transition>
        <transition name="appear">
          <SkillElement v-show="moreOtherShown"
            ><span title="Adobe InDesign">InDesign</span></SkillElement
          >
        </transition>
      </SkillsList>
      <button
        v-if="!moreOtherShown"
        class="more-button reset-button more-target"
        @click="showOther()"
      >
        <More bold direction="down" size="m">and more</More>
      </button>
    </Appear>
  </section>
  <section class="past limited-width overflow-visible">
    <h2>What I did in the past</h2>
    <div class="two-columns">
      <Appear class="projects-container overflow-visible">
        <section>
          <h3>Cool projects</h3>
          <ul>
            <ProjectLink
              name="MIÀM - Overall project"
              type="school project"
              symbol="🏗"
              to="/work/miam"
            />
            <ProjectLink
              name="MIÀM - Teaching"
              type="school project"
              symbol="👨‍🏫"
              to="/work/miam-teaching"
            />
            <ProjectLink
              name="Proof of concept design system icon component"
              type="work project"
              symbol="📐"
              to="/work/design-system-icon-component"
            />
            <transition name="appear">
              <ProjectLink
                v-show="moreProjectsShown"
                name="Adapt GEO’s interfaces for tactile usage"
                type="work project"
                symbol="📱"
                to="/work/tactile-adaptations"
              />
            </transition>
            <transition name="appear">
              <ProjectLink
                v-show="moreProjectsShown"
                name="This site’s custom analytics"
                type="personal project"
                symbol="📊"
                to="/work/analytics"
              />
            </transition>
          </ul>
          <button
            v-if="!moreProjectsShown"
            class="more-button reset-button more-target"
            @click="showProjects()"
          >
            <More bold direction="down">more projects</More>
          </button>
        </section>
      </Appear>
      <Appear>
        <section>
          <h3>Working</h3>
          <ul>
            <Experience
              when-start="2019"
              when-end="2021"
              where="Ciril Group"
              what="Web developer (<abbr title='Research and Development'>R&D</abbr>)"
              notes="apprenticeship"
            />
            <Experience
              when-start="2019"
              when-months="four months"
              when-months-short="4"
              where="Kryzalid"
              what="Web developer"
              notes="internship in montreal, qc"
            />
            <Experience
              when-start="2018"
              when-months="three months"
              when-months-short="3"
              where="Tilkee"
              what="Web developer"
              notes="internship"
            />
            <Experience
              when-start="2017"
              when-end="2018"
              where="Lyon 1 University"
              what="Student tutor"
              notes="around two hours a week"
            />
          </ul>
        </section>
        <section>
          <h3>Studying</h3>
          <ul>
            <Experience
              when-start="2019"
              when-end="2021"
              where="Institut G4"
              what="<abbr title='Information Technology'>IT</abbr> Project Manager title (equivalent to Master’s)"
              notes="project management"
            />
            <Experience
              when-start="2018"
              when-end="2019"
              where="<abbr title='Institut de la COMmunication'>ICOM</abbr> Lyon 2"
              what="<abbr title='Licence Professionnelle'>LP</abbr> Métiers du Numérique (equivalent to Bachelor’s)"
              notes="communication + media"
            />
            <Experience
              when-start="2016"
              when-end="2018"
              where="<abbr title='Institut Universitaire de Technologie'>IUT</abbr> Lyon 1"
              what="<abbr title='Diplôme Universitaire de Technologie'>DUT</abbr> Informatique (two-year degree)"
              notes="computer science"
            />
          </ul>
        </section>
        <section>
          <h3>Volunteering</h3>
          <ul>
            <Experience
              when-start="2019"
              when-end="2020"
              where="Gaelis"
              what="Solidarity grocery shop co-manager"
            />
          </ul>
        </section>
      </Appear>
    </div>
  </section>
  <section class="limited-width overflow-visible">
    <Appear class="reference overflow-visible limited-width-medium">
      <h2>Colleagues saying stuff</h2>
      <figure aria-labelledby="cyril-name">
        <figcaption>
          <a
            class="name reset-link"
            href="https://www.linkedin.com/in/cyril-richard-73a6b3122/"
            target="_blank"
            rel="nofollow noopener"
            aria-labelledby="cyril-name"
          >
            <CyrilPhoto class="picture" />
            <div class="author">
              <span id="cyril-name" class="name">Cyril Richard</span>
              <span>Lead developer&nbsp;@ Ciril Group</span>
            </div>
          </a>
        </figcaption>
        <blockquote>
          <p>
            Simon is a talented front-end developer that I had the pleasure of
            supervising for 2 years.
          </p>
          <p>
            He is a perfectionist and his technical proficiency, his
            <abbr title="User eXperience">UX</abbr>
            sensibility and his constant attention to “small details” make him a
            great asset for a team.
          </p>
          <p>
            He will thrive particularly in contexts where he can grasp a project
            in its globality in order to carry his functional and technical
            vision.
          </p>
          <p>
            On the personal level, he is an excellent teammate, is likeable,
            mature and curious… just not very punctual&nbsp;^^
          </p>
          <p>
            He certainly still has a lot to learn, but his capacity to reassess
            himself and to regularly get out of his comfort zone bodes well for
            his professional future.
          </p>
        </blockquote>
      </figure>
    </Appear>
  </section>
  <section class="aside-from-work">
    <Appear class="limited-width">
      <div class="limited-width-small">
        <h2>Aside from work</h2>
        <ul>
          <li>
            Maybe you noticed the
            <RouterLink class="link-block" to="/podcast/regard-9"
              >Podcast</RouterLink
            >
            section to this website. This is because I host a podcast called
            Regard 9&nbsp;− it’s in french only, sorry. It’s mostly an excuse to
            get to interview cool artists.
          </li>
          <li>
            I can be a bit of a football nerd, and I’m a lifelong supporter of
            Olympique Lyonnais.
          </li>
          <li>
            I love animals. Especially dogs. I don’t own a dog though, but I
            live with a cat called Mirabelle.
          </li>
        </ul>
      </div>
    </Appear>
  </section>
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

.limited-width-small {
  max-width: 480px;
}

.limited-width-medium {
  max-width: 560px;
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
  font-style: normal;
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

  position: relative;
}

.stack {
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

.more-button {
  padding-bottom: 22px;

  cursor: pointer;
}

.appear-enter-active,
.theme-transition li.appear-enter-active {
  transform-origin: bottom;
  transition: opacity 1s, transform 1.5s;
}

.appear-enter-from {
  opacity: 0.3;
  transform: scaleY(0.9);
}

.skills h3,
.past h3 {
  font-family: boreal, Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
}

.skills {
  margin-top: 60px;
}

.skills-title em {
  font-weight: 400;
}

.projects-container li:last-child {
  margin-bottom: 30px;
}

.two-columns {
  display: grid;
  column-gap: 20px;
}

.two-columns section:first-child h3 {
  margin-top: 0;
}

.overflow-visible {
  overflow-x: visible;
  overflow-y: visible;
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

.reference {
  margin-top: 40px;
}

.reference figure,
.reference blockquote {
  margin-left: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
}

.reference .name {
  display: flex;
}

.reference .author {
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-style: italic;
}

.reference .author .name {
  margin-bottom: 4px;

  font-size: 20px;
  font-weight: 500;
  font-style: normal;
}

.reference blockquote {
  margin-top: 28px;

  position: relative;

  font-size: 18px;
  text-indent: 40px;
}

.reference blockquote p:first-child:before,
.reference blockquote p:last-child:after {
  z-index: -10;

  color: rgba(var(--theme-60-rgb), 0.8);

  font-family: new-spirit, serif;
  font-size: 64px;
  line-height: 0;
}

.theme-dark .reference blockquote p:first-child:before,
.theme-dark .reference blockquote p:last-child:after {
  color: rgba(var(--theme-90-rgb), 0.8);
}

.theme-transition .reference blockquote p:first-child:before,
.theme-transition .reference blockquote p:last-child:after {
  transition: color 0.5s ease-in-out;
}

.reference blockquote p:first-child:before {
  content: "‘ ";

  display: block;

  position: absolute;

  left: -22px;
  top: 26px;
}

.reference blockquote p:last-child:after {
  content: "’";

  position: relative;

  right: -4px;
  bottom: -38px;
}

.aside-from-work {
  margin-top: 20px;
}

.aside-from-work h2 {
  margin-top: 0;
}

.aside-from-work li {
  margin-bottom: 12px;
}

.aside-from-work li:last-child {
  margin-bottom: 0;
}

@media screen and (min-width: 800px) {
  .two-columns {
    grid-template-columns: 1fr 1fr;
  }

  .reference {
    margin-top: 20px;
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

@media (prefers-reduced-motion) {
  .waving-hand {
    animation: none;
  }

  .photo {
    animation: none;
  }

  .appear-enter-active,
  .theme-transition li.appear-enter-active {
    transition: opacity 1s;
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
