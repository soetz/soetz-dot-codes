<script setup lang="ts">
import NextProject from "./components/NextProject.vue";
import Project from "./components/Project.vue";
import SkillElement from "../../components/SkillElement.vue";
</script>

<template>
  <Project title="MIÀM - Teaching" symbol="👨‍🏫" non-technical>
    <template #skills>
      <SkillElement>Typescript</SkillElement>
      <SkillElement>Angular</SkillElement>
      <SkillElement>Working as a team</SkillElement>
      <SkillElement>Teaching (obviously)</SkillElement>
      <SkillElement>Writing and documenting</SkillElement>
    </template>
    <template #summary>
      <p>
        <a
          href="https://www.linkedin.com/in/jonathan-germain/"
          target="_blank"
          class="link-block"
          >Jonathan</a
        >
        and I taught the basics of Angular to a class of ~20 students (one day
        live + several hours of coding and problem solving videos + exercises +
        tests).
      </p>
    </template>
    <template #context>
      <p>
        At Institut G4 the final annual projects are managed by fifth year
        students and the third year students join them for one week during the
        production phase. As the front-end technical leads of the project and
        because we knew most third year students didn’t know Angular at all, we
        decided to get ahead and teach them what we knew before the start of the
        common week.
      </p>
    </template>
    <template #choices>
      <p>
        One of the first things we did was building a big Notion page with
        explanations of some Angular and Typescript concepts that would serve
        both as course material and as reference for the students. We
        prioritised the concepts we anticipated they would use the most during
        production.
      </p>

      <p>
        Because we knew that one day of teaching would not be sufficient for
        anyone that didn’t know it before to at least be at ease with Angular,
        we also prepared exercises reproducing common problems and videos of us
        resolving them.
      </p>
    </template>
    <template #problem-solving>
      <p>
        One of the key challenges that we faced was how to keep track of the
        students’ individual progression. That is why we set the training goals
        even before starting writing the course, and a series of questions
        evaluating the level of a student relative to these goals. We made
        everyone (even fifth year students) answer these questions individually
        so that we could assess who needed the most training.
      </p>

      <p>
        And most importantly, we made everyone answer those exact same questions
        after we trained them. Now we, the students and even the Institut G4
        administration had a proof that the training was useful and not a waste
        of time and efforts. Great!
      </p>

      <p>
        I didn’t realise at the time, but it was a lot like implementing
        <em>software</em> tests on our students!!
      </p>
    </template>
    <template #lessons>
      <li>
        In the context of teaching, it’s usually better to switch regularly
        between explaining concepts and implementing them, rather than
        explaining a lot of concepts and then trying to implement them all at
        once
      </li>
      <li>
        You have to adapt a lot to your audience, not only individually (how a
        specific person operates/learns) but also as a whole (the dynamics
        between people), and this can be very subtle
      </li>
      <li>
        Teaching something is definitely one of the best ways to get better at
        it
      </li>
    </template>
    <template #next-project>
      <NextProject
        title="Did you know I studied the best way to implement an icon component into a design system?"
        see="see what I have to say about it"
        symbol="📐"
        to="/work/design-system-icon-component"
      />
    </template>
  </Project>
</template>

<style scoped>
.text li {
  margin-bottom: 12px;
}

.text li:last-child {
  margin-bottom: 0;
}
</style>
