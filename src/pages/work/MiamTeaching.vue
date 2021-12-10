<script setup lang="ts">
import Appear from "../../components/Appear.vue";
import NextProject from "./components/NextProject.vue";
import Parallax from "../../components/Parallax.vue";
import Skills from "./components/Skills.vue";
</script>

<template>
  <div class="limited-width">
    <Appear>
      <h1>MIÀM - Teaching</h1>
    </Appear>
    <Appear>
      <Skills>
        <li>Typescript</li>
        <li>Angular</li>
        <li>Working as a team</li>
        <li>Teaching (obviously)</li>
        <li>Writing and documenting</li>
      </Skills>
    </Appear>
    <div class="two-columns">
      <div class="limited-width-small text">
        <Appear>
          <h2>Summary</h2>
          <p>
            <a
              href="https://www.linkedin.com/in/jonathan-germain/"
              target="_blank"
              class="link-block"
              >Jonathan</a
            >
            and I taught the basics of Angular to a class of ~20 students (one
            day live + several hours of coding and problem solving videos +
            exercises + tests).
          </p>
        </Appear>

        <Appear>
          <h2>Context & project aim</h2>

          <p>
            At Institut G4 the final annual projects are managed by fifth year
            students and the third year students join them for one week during
            the production phase. As the front-end technical leads of the
            project and because we knew most third year students didn’t know
            Angular at all, we decided to get ahead and teach them what we knew
            before the start of the common week.
          </p>
        </Appear>

        <Appear>
          <h2>Choices</h2>

          <p>
            One of the first things we did was building a big Notion page with
            explanations of some Angular and Typescript concepts that would
            serve both as course material and as reference for the students. We
            prioritised the concepts we anticipated they would use the most
            during production.
          </p>

          <p>
            Because we knew that one day of teaching would not be sufficient for
            anyone that didn’t know it before to at least be at ease with
            Angular, we also prepared exercises reproducing common problems and
            videos of us resolving them.
          </p>
        </Appear>

        <Appear>
          <h2>Problem solving strategy</h2>

          <p>
            One of the key challenges that we faced was how to keep track of the
            students’ individual progression. That is why we set the training
            goals even before starting redacting, and a series of questions
            evaluating the level of a student relative to these goals. We made
            everyone (even fifth year students) answer these questions
            individually so that we could assess who needed the most training.
          </p>

          <p>
            And most importantly, we made everyone answer those exact same
            questions after we trained them. Now we, the students and even the
            Institut G4 administration had a proof that the training was useful
            and not a waste of time and efforts. Great!
          </p>

          <p>
            I didn’t realise at the time, but it was a lot like implementing
            <em>software</em> tests on our students!!
          </p>
        </Appear>

        <Appear>
          <h2>Lessons learned</h2>

          <ul>
            <li>
              In the context of teaching, it’s usually better to switch
              regularly between explaining concepts and implementing them,
              rather than explaining a lot of concepts and then trying to
              implement them all at once
            </li>
            <li>
              You have to adapt a lot to your audience, not only individually
              (how a specific person operates/learns) but also as a whole (the
              dynamics between people), and this can be very subtle
            </li>
            <li>
              Teaching something is definitely one of the best ways to get
              better at it
            </li>
          </ul>
        </Appear>
      </div>
      <div class="visual">
        <Parallax :speed="0.6">
          <span class="symbol">👨‍🏫</span>
        </Parallax>
      </div>
    </div>
    <Appear class="overflow-visible">
      <NextProject
        title="Did you know the analytics on the site you’re visiting are completely custom?"
        see="see how I did it"
        symbol="📊"
        to="/work/analytics"
      />
    </Appear>
  </div>
</template>

<style scoped>
.text {
  font-family: source-serif-4-small-text, serif;
}

h1 {
  text-align: center;
}

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

.overflow-visible {
  overflow-x: visible;
  overflow-y: visible;
}

.two-columns {
  display: grid;
  grid-template-columns: auto 1fr;
}

.visual {
  display: none;
  justify-content: center;

  width: 100%;
  height: 200px;

  font-size: 80px;

  text-shadow: 0.4px 0.7px 0.8px rgba(0, 0, 0, 0.06),
    0.8px 1.7px 1.9px rgba(0, 0, 0, 0.09),
    1.8px 3.6px 4.1px rgba(0, 0, 0, 0.125), 6px 12px 15px rgba(0, 0, 0, 0.2);

  cursor: default;
}

@media screen and (min-width: 800px) {
  .visual {
    display: flex;
  }
}
</style>
