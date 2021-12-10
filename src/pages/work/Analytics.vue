<script setup lang="ts">
import Appear from "../../components/Appear.vue";
import NextProject from "./components/NextProject.vue";
import Parallax from "../../components/Parallax.vue";
import Skills from "./components/Skills.vue";
</script>

<template>
  <div class="limited-width">
    <Appear>
      <h1>This site’s custom analytics</h1>
    </Appear>
    <Appear>
      <Skills>
        <li>Node</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Vue</li>
        <li>Vite</li>
        <li>SSR</li>
      </Skills>
    </Appear>
    <div class="two-columns">
      <div class="limited-width-small text">
        <Appear>
          <h2>Summary</h2>
          <p>
            I spent a couple days building a super simple analytics system
            specifically for this site, using primarily Express and MongoDB.
          </p>
        </Appear>

        <Appear>
          <h2>Context & project aim</h2>

          <p>
            I wanted to be able to measure how this site is performing and what
            the typical user journey was, but I also really care about people’s
            right to privacy (and didn’t want to show an ugly GDPR banner) so I
            couldn’t rely on Google’s or any other third-party system (that I
            have knowledge of). And I’ve also been wanting to conduct some
            experiments with server-side rendering for some time.
          </p>

          <p>
            Since my needs were really simple (only recording what pages were
            presented to each user and in what order), I decided to spend some
            time and to do it myself.
          </p>
        </Appear>

        <Appear>
          <h2>Technical choices</h2>

          <p>
            My database needs were ridiculously simple and the main concern I
            had identified was speed. A new analytics entry would be inserted on
            each server-side page render, so the server response would be
            delayed by the time it took to insert. MongoDB seemed like a good
            option and I wanted to refresh my knowledge of it so it was a great
            opportunity.
          </p>

          <p>
            The app may be server-side rendered, it’s still an SPA, so
            navigations don’t require a new server render (at least when
            JavaScript is enabled). Which means we need some kind of server to
            record navigations. I could’ve used a websocket for this because the
            ‘connected’ philosophy made sense, but I was concerned with the
            server-side cost of maintaining a certain number of connections.
            That is why I chose to make it a good old REST API. I used Express
            for it because the needs were extra simple and that is what the
            client app is using for SSR.
          </p>
        </Appear>

        <Appear>
          <h2>Problem solving strategy</h2>

          <p>
            I’ve read a few
            <a
              href="https://www.joshwcomeau.com/blog/how-i-built-my-blog/#api-routes"
              target="_blank"
              class="link-block"
              >stories of people building that kind of system and getting
              trolled</a
            >
            so I wanted to make sure mine gave the trolls at least a little
            challenge.
          </p>

          <p>
            I put two mechanisms in place to make it harder to fake page visits.
            First, each server-side render generates a new ‘session token’ that
            is required to register navigations afterwards. And second, a
            session is ‘confirmed’ if the user is still active 20 seconds after
            the first page was loaded by the browser. This filters out users
            that stay less than 20 seconds, but they were not very relevant
            anyway.
          </p>

          <p>
            Of course it’s still feasible to troll my system, but it requires a
            little more than just making requests so I’m confident that it will
            discourage most malicious people. There must be a million ways to
            abuse it and I’d be glad if someone found a way and told me,
            actually.
          </p>
        </Appear>

        <Appear>
          <h2>Lessons learned</h2>

          <ul>
            <li>
              A GDPR banner is only necessary if you store some kind of personal
              information, which is not my case
            </li>
            <li>
              Using MongoDB with Node is super easy (which is not surprising
              since MongoDB is very Javascript-friendly)
            </li>
          </ul>
        </Appear>
      </div>
      <div class="visual">
        <Parallax :speed="0.6">
          <span class="symbol">📊</span>
        </Parallax>
      </div>
    </div>
    <Appear class="overflow-visible">
      <NextProject
        title="Did you know I was front-end technical manager on a 1K+ man-days project?"
        see="see how it went"
        symbol="🏗"
        to="/work/miam"
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
