<script setup lang="ts">
import NextProject from "./components/NextProject.vue";
import Project from "./components/Project.vue";
import SkillElement from "../../components/SkillElement.vue";
</script>

<template>
  <Project title="MIÀM - Overall project" symbol="🏗">
    <template #skills>
      <SkillElement>Typescript</SkillElement>
      <SkillElement>Angular</SkillElement>
      <SkillElement>Laravel</SkillElement>
      <SkillElement>Git</SkillElement>
      <SkillElement>Developing responsive interfaces</SkillElement>
      <SkillElement>Working as a team</SkillElement>
      <SkillElement>Leading a team</SkillElement>
      <SkillElement>Making code architecture choices</SkillElement>
      <SkillElement>Prensenting advancements during committees</SkillElement>
      <SkillElement>Helping developers achieve their tasks</SkillElement>
      <SkillElement>Using V-model as a development process</SkillElement>
    </template>
    <template #summary>
      <p>
        I participated (along with 45 other students) in building and managing
        the final annual project at Institut G4, which took more than 1.000
        man-days to complete. I held the role of front-end technical manager.
      </p>
    </template>
    <template #context>
      <p>
        That year, the project (named <em>MIÀM</em> for ‘Mon Intranet À Moi’)
        consisted in building an app that would help NGO
        <a
          class="link-block"
          href="https://www.entrepreneursdumonde.org/en/"
          target="_blank"
          rel="noopener"
          >Entrepreneurs du Monde</a
        >
        in managing their
        <a
          class="link-block"
          href="https://www.entrepreneursdumonde.org/en/interactive-map/#6744"
          target="_blank"
          rel="noopener"
          >ICI programme</a
        >. The app needed to support management of training, hindrances,
        contacts, documents and more by the entrepreneurs participating in the
        programme and the Entrepreneurs du Monde staff, and to have built-in
        permissions, calendar and notification systems. The app also needed to
        be available both using desktop and mobile.
      </p>

      <p>
        These final projects exist in part to teach V-model to Institut G4
        students so obviously that was one of the constraints. And most of the
        project was (sadly) done remotely due to Covid.
      </p>

      <p>
        It was a great experience to work on this project with my whole year
        group, especially since we were building software for the greater good!
        The system is still used by Entrepreneurs du Monde to this day so it’s
        always good to know you did something useful :)
      </p>
    </template>
    <template #choices>
      <p>
        We chose to build a web app because that would allow us to develop once
        and deploy on all platforms, and the back-end team chose Laravel + Orion
        as their framework.
      </p>

      <p>
        Angular made sense since the app would be complex and require a lot of
        shared context and processes, in addition to a strong components system.
        We also liked that it encourages a lot (and even forces, sometimes) to
        use best practices because most developers on the project didn’t have an
        extensive experience with front-end development prior to it.
      </p>

      <p>
        We leveraged Nextcloud and its API as the document-management system of
        the app. We also made an extensive use of GitLab’s
        <abbr title="Continuous Integration/Continuous Development">CI/CD</abbr>
        pipelines throughout the project, and that made us save a lot of
        testing/merging time and complexity.
      </p>
    </template>
    <template #problem-solving>
      <p>
        Of course we ran into a lot of bumps throughout a big project like this,
        but one of the biggest bottlenecks was probably the time it took to
        measure quality.
      </p>

      <p>
        Our response was to integrate SonarQube to the
        <abbr title="Continuous Integration/Continuous Development">CI/CD</abbr>
        pipeline so that it would generate a report each time a developer pushes
        on his branch. This saved us a lot of time because most of the issues
        were detected by the system and didn’t require any human input.
      </p>

      <p>
        We kept a human review process because the automated system didn’t catch
        all the issues, especially architectural issues or those more specific
        to our project, and ignoring them wasn’t compatible with our quality
        standards. But this review process was made a lot faster and easier for
        everyone!
      </p>
    </template>
    <template #lessons>
      <li>
        You have to really design how the different participants in a project
        should communicate (when and using what tool depending on the kind of
        information) for it to be really smooth, and I think we found a good
        balance in the context of remote work
      </li>
      <li>
        It’s really important to ask the person that will eventually perform a
        task to make the estimation, and to stick to it even if you have doubts
      </li>
      <li>
        I think this project helped to solidify a lot my ability to review other
        developers’ code and specifically to select the most relevant feedback
        to give
      </li>
    </template>
    <template #next-project>
      <NextProject
        title="Did I tell you I taught Angular as part of this project?"
        see="see how it went"
        symbol="👨‍🏫"
        to="/work/miam-teaching"
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
