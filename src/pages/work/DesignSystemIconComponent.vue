<script setup lang="ts">
import NextProject from "./components/NextProject.vue";
import Project from "./components/Project.vue";
import SkillElement from "../../components/SkillElement.vue";
</script>

<template>
  <Project title="Proof of concept design system icon component" symbol="📐">
    <template #skills>
      <SkillElement>Vue</SkillElement>
      <SkillElement>Angular</SkillElement>
      <SkillElement>Web Components</SkillElement>
      <SkillElement>Apache</SkillElement>
      <SkillElement>Making code architecture choices</SkillElement>
      <SkillElement>Writing documentation</SkillElement>
    </template>
    <template #summary>
      <p>
        I spent around a week studying the best way to implement icons as part
        of the new global design system at Ciril Group.
      </p>
    </template>
    <template #context>
      <p>
        We’ve started working on a common Ciril Group design system around the
        end of 2020. It was a really exciting project that required that we
        build a lot of different components (buttons, inputs, images, cards, …
        you name it) and I was tasked with exploring how to manage icons to make
        them as easy to use as possible for the implementers.
      </p>

      <p>
        As you can imagine, the icon component is a pretty central part of a
        design system since a lot of other components depend on it and that was
        a little intimidating at first. I was also not provided specific
        constraints or targets so a lot of the work actually consisted in
        sorting out what problems were the most common when trying to use icons
        and finding a way to abstract the majority of them.
      </p>

      <p>
        I delivered a very simple working component showcasing the kind of
        solution I advocated for, along with a few pages of documentation
        describing my conclusions.
      </p>
    </template>
    <template #choices>
      <p>
        I went with Angular at first because it was the framework we intended to
        use at the time for the design system internals. I changed my mind
        though when I tried to build Web Components with it and chose Vue
        instead. It wouldn’t have been impossible to do it with Angular but it
        required a lot of configuration and I was aiming for the quickest
        solution since I was prototyping, and Vue was much more straightforward
        in that regard.
      </p>

      <p>
        The solution I suggested involved using inline SVG over webfonts or
        <code>img</code>
        tags because it is the most flexible solution in terms of styling, and
        providing an icon server because that would allow for leveraging the
        browser’s cache system.
      </p>
    </template>
    <template #problem-solving>
      <p>
        As I mentioned earlier the biggest issue for me was with choosing what
        the most important problems were. To solve it I decided to put myself in
        the shoes of a developer trying to implement icons in an interface (not
        so hard considering that I’m this person a lot of the time) and to make
        a list of the problems I was too lazy to solve.
      </p>

      <p>
        Once I had my list I ordered it and started pondering on an
        implementation that would solve the major part of those problems.
      </p>

      <p>
        This method helped me quickly eliminate approaches that would not have
        given satisfaction. For instance I knew right away that I couldn’t
        consider icon sprites since one of the main problems was that the
        transfer size must be the smallest possible (implying that users
        shouldn’t download icons that won’t be used).
      </p>
    </template>
    <template #lessons>
      <li>
        I think it was the first time that my work involved trying to think like
        a senior, as in having to anticipate other developers’ problems on top
        of the <em>product</em> problems
      </li>
      <li>
        You can take advantage of the browser’s cache system, but that means
        taking care of the special headers first
      </li>
      <li>
        I think Web Components can be useful to solve some problems, I just
        don’t see which ones
      </li>
    </template>
    <template #next-project>
      <NextProject
        title="Did you know I worked on adapting interfaces for tactile usage?"
        see="see how I did"
        symbol="📱"
        to="/work/tactile-adaptations"
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
