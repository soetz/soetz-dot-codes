<script setup lang="ts">
import NextProject from "./components/NextProject.vue";
import Project from "./components/Project.vue";
import SkillElement from "../../components/SkillElement.vue";
</script>

<template>
  <Project title="This site’s custom analytics" symbol="📊">
    <template #skills>
      <SkillElement>Node</SkillElement>
      <SkillElement>Express</SkillElement>
      <SkillElement>MongoDB</SkillElement>
      <SkillElement>Vue</SkillElement>
      <SkillElement>Vite</SkillElement>
      <SkillElement
        ><abbr title="Server-Side Rendering">SSR</abbr></SkillElement
      >
    </template>
    <template #summary>
      <p>
        I spent a couple days building a super simple analytics system
        specifically for this site, using primarily Express and MongoDB.
      </p>
    </template>
    <template #context>
      <p>
        I wanted to be able to measure how this site is performing and what the
        typical user journey was, but I also really care about people’s right to
        privacy (and didn’t want to show an ugly
        <abbr title="General Data Protection Regulation">GDPR</abbr> banner) so
        I couldn’t rely on Google’s or any other third-party system (that I have
        knowledge of). And I’ve also been wanting to conduct some experiments
        with server-side rendering for some time.
      </p>

      <p>
        Since my needs were really simple (only recording what pages were
        presented to each user and in what order), I decided to spend some time
        and to do it myself.
      </p>
    </template>
    <template #choices>
      <p>
        My database needs were ridiculously simple and the main concern I had
        identified was speed. A new analytics entry would be inserted on each
        server-side page render, so the server response would be delayed by the
        time it took to insert. MongoDB seemed like a good option and I wanted
        to refresh my knowledge of it so it was a great opportunity.
      </p>

      <p>
        The app may be server-side rendered, it’s still an
        <abbr title="Single-Page Application">SPA</abbr>, so navigations don’t
        require a new server render (at least when JavaScript is enabled on the
        client side). Which means we need some kind of server to record
        navigations. I could’ve used a websocket for this because the
        ‘connected’ philosophy made sense, but I was concerned with the
        server-side cost of maintaining a certain number of connections. That is
        why I chose to make it a good old
        <abbr title="REpresentational State Transfer">REST</abbr>
        <abbr title="Application Programming Interface">API</abbr>. I used
        Express for it because the needs were extra simple and that is what the
        client app is using for <abbr title="Server-Side Rendering">SSR</abbr>.
      </p>
    </template>
    <template #problem-solving>
      <p>
        I’ve read a few
        <a
          class="link-block"
          href="https://www.joshwcomeau.com/blog/how-i-built-my-blog/#api-routes"
          target="_blank"
          rel="nofollow noopener"
          >stories of people building that kind of system and getting trolled</a
        >
        so I wanted to make sure mine gave the trolls at least a little
        challenge.
      </p>

      <p>
        I put two mechanisms in place to make it harder to fake page visits.
        First, each server-side render generates a new ‘session token’ that is
        required to register navigations afterwards. And second, a session is
        ‘confirmed’ if the user is still active 20 seconds after the first page
        was loaded by the browser. This is useful to distinguish between people
        really wanting to visit the site and bounce (or bots).
      </p>

      <p>
        Of course it’s still feasible to troll my system, but it requires a
        little more than just making requests so I’m confident that it will
        discourage most malicious people. There must be a million ways to abuse
        it and I’d be glad if someone found a way and told me, actually.
      </p>
    </template>
    <template #lessons>
      <li>
        A <abbr title="General Data Protection Regulation">GDPR</abbr> banner is
        only necessary if you store some kind of personal information, which is
        not my case
      </li>
      <li>
        Using MongoDB with Node is super easy (which is not surprising since
        MongoDB is very Javascript-friendly)
      </li>
    </template>
    <template #next-project>
      <NextProject
        title="Did you know I was front-end technical manager on a 1K+ man-days project?"
        see="see how it went"
        symbol="🏗"
        to="/work/miam"
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
