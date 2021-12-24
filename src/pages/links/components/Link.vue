<script setup lang="ts">
/* eslint-disable vue/no-v-html */
import Appear from "../../../components/Appear.vue";
import { computed } from "vue";
import { marked } from "marked";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
  },
  index: {
    type: Number,
    default: 0,
  },
});

const options = {
  headerIds: false,
  xhtml: true,
};

const htmlTitle = computed(() => {
  return marked.parseInline(props.title, options);
});

const htmlDescription = computed(() => {
  return marked.parseInline(props.description, options);
});
</script>

<template>
  <li>
    <a
      class="link"
      :href="props.url"
      target="_blank"
      rel="noopener"
      :aria-labelledby="`title-${props.index}`"
      :aria-describedby="`description-${props.index}`"
    >
      <Appear>
        <span
          :id="`title-${props.index}`"
          class="title"
          v-html="htmlTitle"
        ></span>
        <p
          :id="`description-${props.index}`"
          class="description"
          v-html="htmlDescription"
        ></p>
      </Appear>
    </a>
  </li>
</template>

<style scoped>
li {
  margin-top: 56px;
}

.link {
  display: block;

  width: 100%;
  max-width: 600px;

  color: var(--theme-900);
}

.theme-dark .link {
  color: var(--theme-10);
}

.theme-transition .link {
  transition: color 0.5s ease-in-out;
}

.title {
  font-size: 22px;
  font-weight: 500;
}

.description {
  margin-top: 12px;
  padding-left: 16px;
  padding-right: 16px;

  font-style: italic;

  transition: transform 0.3s ease-in-out;
}

a:hover .description,
a:focus-visible .description {
  transform: translateX(8px);
}
</style>
