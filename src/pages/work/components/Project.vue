<script setup lang="ts">
import Appear from "../../../components/Appear.vue";
import Parallax from "../../../components/Parallax.vue";
import SkillsList from "../../../components/SkillsList.vue";

const props = defineProps({
  nonTechnical: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  symbol: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <article class="limited-width overflow-visible">
    <Appear>
      <h1>{{ props.title }}</h1>
    </Appear>
    <Appear class="overflow-visible">
      <section>
        <h2>Skills used</h2>
        <SkillsList>
          <slot name="skills"></slot>
        </SkillsList>
      </section>
    </Appear>
    <div class="two-columns">
      <div class="limited-width-small text">
        <Appear>
          <section>
            <h2>Summary</h2>

            <slot name="summary"></slot>
          </section>
        </Appear>

        <Appear>
          <section>
            <h2>Context & project aim</h2>

            <slot name="context"></slot>
          </section>
        </Appear>

        <Appear>
          <section>
            <h2>{{ props.nonTechnical ? "Choices" : "Technical choices" }}</h2>

            <slot name="choices"></slot>
          </section>
        </Appear>

        <Appear>
          <section>
            <h2>Problem solving strategy</h2>

            <slot name="problem-solving"></slot>
          </section>
        </Appear>

        <Appear>
          <section>
            <h2>Lessons learned</h2>
            <ul>
              <slot name="lessons"></slot>
            </ul>
          </section>
        </Appear>
      </div>
      <div class="visual">
        <Parallax :speed="0.6">
          <span class="symbol">{{ props.symbol }}</span>
        </Parallax>
      </div>
    </div>
    <Appear class="overflow-visible">
      <slot name="next-project"></slot>
    </Appear>
  </article>
</template>

<style scoped>
.overflow-visible {
  overflow-x: visible;
  overflow-y: visible;
}

h1 {
  text-align: center;
}

.text {
  font-family: source-serif-4-small-text, serif;
  font-size: 18px;
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
  max-width: 600px;
}

.two-columns {
  display: grid;
  grid-template-columns: auto 1fr;
}

.text li {
  margin-bottom: 12px;
}

.text li:last-child {
  margin-bottom: 0;
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
