<script setup lang="ts">
import NextProject from "./components/NextProject.vue";
import Project from "./components/Project.vue";
import SkillElement from "../../components/SkillElement.vue";
</script>

<template>
  <Project title="Adapt GEO’s interfaces for tactile usage" symbol="📱">
    <template #skills>
      <SkillElement>AngularJS</SkillElement>
      <SkillElement>Developing responsive interfaces</SkillElement>
    </template>
    <template #summary>
      <p>
        GEO is a flexible
        <abbr title="Geographic Information System">GIS</abbr> engine/app from
        Ciril Group. I spent around two weeks making sure its different
        interfaces had maximum usability on tactile and smaller devices.
      </p>
    </template>
    <template #context>
      <p>
        To be fair, GEO’s interfaces weren’t <em>unusable</em> in tactile
        contexts before this project. They were just not designed for it, only
        slightly adapted from their desktop counterparts, and that sometimes
        created friction and frustration on the users’ side.
      </p>

      <p>
        GEO has a lot of different interfaces and solving this issue entirely
        would’ve involved rethinking the whole app presentation (layout,
        workflows, etc), but unfortunately we didn’t have enough time to invest
        on this right away. That’s why we split the issue in half: the quick and
        easy solutions on one side (this project), and those that needed more
        pondering on the other. I worked on defining what should this other
        side’s main concerns be, though unfortunately I couldn’t implement
        anything related to it before the end of my contract.
      </p>
    </template>
    <template #choices>
      <p>
        That’s why 95% of the changes made in the context of this project were
        CSS-only modifications. This part of GEO uses AngularJS so the last 5
        percents of the changes involved tweaking the templates slightly
        depending on the device. And that’s about it!
      </p>
    </template>
    <template #problem-solving>
      <p>
        The changes consisted in a million little tweaks so it was a pain to
        communicate with amazing product owner
        <a
          href="https://www.linkedin.com/in/loic-picavet/"
          target="_blank"
          class="link-block"
          rel="nofollow noopener"
          >Loïc</a
        >
        to know what his opinion about every one of them was. That’s why we
        agreed on the general ‘rules’ (e.g. a button’s size must be 45 per 45
        pixels minimum) first, and then I used the browser’s devtools to quickly
        demo what the result would look like so that we could discuss it
        further. This saved us a lot of back-and-forth.
      </p>
    </template>
    <template #lessons>
      <li>
        You must test on a real device when doing responsive work because the
        browser’s ‘responsive design mode’ devtool can be misleading
      </li>
      <li>
        The devtools can be a secret weapon when you want to prototype quickly
      </li>
    </template>
    <template #next-project>
      <NextProject
        title="Did you know the analytics on the site you’re visiting are completely custom?"
        see="see how I did it"
        symbol="📊"
        to="/work/analytics"
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
