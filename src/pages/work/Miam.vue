<script setup lang="ts">
import Appear from "../../components/Appear.vue";
import NextProject from "./components/NextProject.vue";
import Parallax from "../../components/Parallax.vue";
import Skills from "./components/Skills.vue";
</script>

<template>
  <div class="limited-width">
    <Appear>
      <h1>MIÀM - Overall project</h1>
    </Appear>
    <Appear>
      <Skills>
        <li>Typescript</li>
        <li>Angular</li>
        <li>Laravel</li>
        <li>Git</li>
        <li>Gitlab CI</li>
        <li>Working as a team</li>
        <li>Leading a team</li>
        <li>Making code architecture choices</li>
        <li>Helping developers achieve their tasks</li>
        <li>Using V-model as a development process</li>
      </Skills>
    </Appear>
    <div class="two-columns">
      <div class="limited-width-small text">
        <Appear>
          <h2>Summary</h2>
          <p>
            I participated (along with 45 other students) in building and
            managing the final annual project at Institut G4, which took more
            than 1.000 man-days to complete. I held the role of front-end
            technical manager.
          </p>
        </Appear>

        <Appear>
          <h2>Context & project aim</h2>

          <p>
            That year, the project (named <em>MIÀM</em> for ‘Mon Intranet À
            Moi’) consisted in building an app that would help NGO
            <a
              href="https://www.entrepreneursdumonde.org/en/"
              target="_blank"
              class="link-block"
              >Entrepreneurs du Monde</a
            >
            in managing their
            <a
              href="https://www.entrepreneursdumonde.org/en/interactive-map/#6744"
              target="_blank"
              class="link-block"
              >ICI programme</a
            >. The app needed to support management of training, hindrances,
            contacts, documents and more by the entrepreneurs participating in
            the programme and the Entrepreneurs du Monde staff, and to have
            built-in permissions, calendar and notification systems. The app
            also needed to be available both using desktop and mobile.
          </p>

          <p>
            These final projects exist in part to teach V-model to Institut G4
            students so obviously that was one of the constraints. And most of
            the project was done remotely due to Covid.
          </p>
        </Appear>

        <Appear>
          <h2>Technical choices</h2>

          <p>
            We chose to build a web app because that would allow us to develop
            once and deploy on all platforms, and the back-end team chose
            Laravel + Orion as their framework.
          </p>

          <p>
            Angular made sense since the app would be complex and require a lot
            of shared context and processes, in addition to a strong components
            system. We also liked that it encourages a lot (and even forces,
            sometimes) to use best practices because most developers on the
            project didn’t have an extensive experience with front-end
            development prior to it.
          </p>

          <p>
            We leveraged Nextcloud and its API as the document-management system
            of the app. We also made an extensive use of GitLab’s CI/CD
            pipelines throughout the project, and that made us save a lot of
            testing/merging time and complexity.
          </p>
        </Appear>

        <Appear>
          <h2>Problem solving strategy</h2>

          <p>
            Of course we ran into a lot of bumps throughout a big project like
            this, but one of the biggest bottlenecks was probably the time it
            took to measure quality.
          </p>

          <p>
            Our response was to integrate SonarQube to the CI/CD pipeline so
            that it would generate a report each time a developer pushes on his
            branch. This saved us a lot of time because most of the issues were
            detected by the system and didn’t require any human input.
          </p>

          <p>
            We kept a human review process because the automated system didn’t
            catch all the issues, especially architectural issues or those more
            specific to our project, and ignoring them wasn’t compatible with
            our quality standards. But this review process was made a lot faster
            and easier for everyone!
          </p>
        </Appear>

        <Appear>
          <h2>Lessons learned</h2>

          <ul>
            <li>
              You have to really design how the different participants in a
              project should communicate (when and using what tool depending on
              the kind of information) for it to be really smooth, and I think
              we found a good balance in the context of remote work
            </li>
            <li>
              It’s really important to ask the person that will eventually
              perform a task to make the estimation, and to stick to it even if
              you have doubts
            </li>
            <li>
              I think this project helped to solidify a lot my ability to review
              other developers’ code and specifically to select the most
              relevant feedback to give
            </li>
          </ul>
        </Appear>
      </div>
      <div class="visual">
        <Parallax :speed="0.6">
          <span class="symbol">🏗</span>
        </Parallax>
      </div>
    </div>
    <Appear class="overflow-visible">
      <NextProject
        title="Did I tell you I taught Angular as part of this project?"
        see="see how it went"
        symbol="👨‍🏫"
        to="/work/miam-teaching"
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
  width: 100%;
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
}

@media screen and (min-width: 800px) {
  .visual {
    display: flex;
  }
}
</style>
