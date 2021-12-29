<script setup lang="ts">
/* eslint-disable vue/no-v-html */
import { RouterLink, useRoute, useRouter } from "vue-router";
import { computed, ref, watch } from "vue";
import Appear from "../../components/Appear.vue";
import More from "../../components/More.vue";
import axios from "axios";
import { environment } from "../../../environment.client";
import { formatDateNormal } from "../../utilities/formatDate";
import { marked } from "marked";
import { updatePageSeo } from "../../utilities/pageSeo";

// TODO replace native <audio controls> with more accessible custom solution

interface PodcastData {
  number: number;
  date: Date;
  title: string;
  description: string;
  file: string;
  image: string;
  imageAlt: string;
  nextEpisode?: string;
  previousEpisode?: string;
  seo?: {
    description?: string;
    keywords?: string;
    socialImage?: string;
  };
}

const route = useRoute();
const router = useRouter();

const podcast = ref<PodcastData | Record<string, never>>({});

const updateData = async () => {
  if (route.params.programme && route.params.code) {
    try {
      const response = await axios.get(
        `http${environment.server.secure ? "s" : ""}://${
          environment.server.domain
        }:${environment.server.port}/podcast/${route.params.programme}/${
          route.params.code
        }`
      );

      podcast.value = { ...response.data, date: new Date(response.data.date) };
      updatePageSeo({
        title: `${podcast.value.title} - Regard 9 #${podcast.value.number}`,
        description: podcast.value.seo?.description,
        keywords: podcast.value.seo?.keywords,
        socialImage: podcast.value.seo?.socialImage,
        path: route.path,
      });
    } catch (error) {
      router.push("/podcast/not-found");
    }
  }
};

await updateData();

watch(
  () => route.params,
  async () => {
    await updateData();
  }
);

const textDate = computed(() => {
  return formatDateNormal(podcast.value.date);
});

const renderer = {
  link: (href: string, title: string, text: string) => {
    return `<a class="link-block" target="_blank" rel="noopener" href="${href}">${text}</a>`;
  },
};

marked.use({ renderer });

const htmlDescription = computed(() => {
  if (podcast.value.description) {
    return marked(podcast.value.description);
  } else {
    return "";
  }
});
</script>

<template>
  <section class="limited-width-large">
    <div class="player-container">
      <Appear class="image-container">
        <img :src="podcast.image" :alt="podcast.imageAlt" />
      </Appear>
      <audio
        controls
        preload="metadata"
        :src="podcast.file"
        class="player"
      ></audio>
      <div class="player-spacer"></div>
    </div>
    <div class="limited-width">
      <div class="text-spacer"></div>
      <section class="limited-width-small">
        <Appear class="title-container">
          <h1>{{ podcast.title }}</h1>
          <div class="subtitle"
            ><strong>Épisode #{{ podcast.number }}</strong
            >&nbsp;− {{ textDate }}</div
          >
        </Appear>
        <Appear class="description-container">
          <div v-html="htmlDescription"></div>
        </Appear>
      </section>
      <div class="pagination">
        <RouterLink
          class="more-target page-previous"
          :class="{ disabled: !podcast.nextEpisode }"
          :aria-disabled="!podcast.nextEpisode ? true : false"
          :tabindex="!podcast.nextEpisode ? -1 : undefined"
          :to="
            podcast.nextEpisode
              ? `/podcast/${route.params.programme}/${podcast.nextEpisode}`
              : ''
          "
          ><More :bold="!!podcast.nextEpisode" size="m" direction="left"
            >épisode suivant</More
          ></RouterLink
        >
        <RouterLink
          class="more-target page-next"
          :class="{ disabled: !podcast.previousEpisode }"
          :aria-disabled="!podcast.previousEpisode ? true : false"
          :tabindex="!podcast.previousEpisode ? -1 : undefined"
          :to="
            podcast.previousEpisode
              ? `/podcast/${route.params.programme}/${podcast.previousEpisode}`
              : ''
          "
          ><More :bold="!!podcast.previousEpisode" size="m"
            >épisode précédent</More
          ></RouterLink
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.limited-width-large {
  width: 100%;
  max-width: 1100px;

  margin-left: auto;
  margin-right: auto;
}

.limited-width {
  width: 100%;
  max-width: 800px;

  margin-left: auto;
  margin-right: auto;

  padding-left: 13px;
  padding-right: 13px;
  padding-bottom: 13px;
}

.limited-width-small {
  max-width: 480px;
}

.player-container {
  display: flex;
  flex-direction: column;

  position: relative;

  margin-top: 24px;
  padding-left: 13px;
  padding-right: 13px;
}

.player-container .image-container {
  width: 100%;
  max-width: 300px;

  margin-left: auto;
  margin-right: auto;

  overflow-x: visible;
  overflow-y: visible;
}

.player-container img {
  width: 100%;

  box-shadow: 0.7px 1.5px 1.5px rgba(0, 0, 0, 0.01),
    1.75px 3.5px 4px rgba(0, 0, 0, 0.018), 3.5px 7.5px 8px rgba(0, 0, 0, 0.025),
    12px 25px 30px rgba(0, 0, 0, 0.04);
}

.player {
  width: 100%;
  height: 40px;

  margin-top: 18px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  box-shadow: 0.7px 1.5px 1.5px rgba(0, 0, 0, 0.01),
    1.75px 3.5px 4px rgba(0, 0, 0, 0.018), 3.5px 7.5px 8px rgba(0, 0, 0, 0.025),
    12px 25px 30px rgba(0, 0, 0, 0.04);
}

.player-spacer {
  display: none;

  min-width: 300px;

  margin-left: 24px;
}

.text-spacer {
  display: none;

  float: right;

  width: 300px;
  height: 200px;

  margin-left: 24px;
  margin-bottom: 24px;
}

.title-container {
  display: flex;
  flex-direction: column-reverse;

  margin-top: 48px;
  margin-bottom: 32px;
}

h1 {
  margin-top: 4px;
  margin-bottom: 0;
}

.subtitle {
  font-style: italic;
}

.title-container strong {
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
}

.description-container {
  overflow-x: visible;
}

.description-container p:first-child {
  margin-top: 0;
}

.pagination {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 480px;

  margin-left: auto;
  margin-top: 32px;
  margin-right: auto;
}

.page-next {
  align-self: flex-end;
}

.page-previous,
.page-next {
  color: var(--theme-900);
}

.theme-dark .page-previous,
.theme-dark .page-next {
  color: var(--theme-10);
}

.theme-transition .page-previous,
.theme-transition .page-next {
  transition: color 0.5s ease-in-out;
}

.page-previous.disabled,
.page-next.disabled {
  opacity: 0.6;
  pointer-events: none;
}

@media screen and (min-width: 350px) {
  .pagination {
    flex-direction: row;
  }
}

@media screen and (min-width: 700px) {
  .player-container {
    flex-direction: row;
  }

  .player-container .image-container {
    position: absolute;

    top: 0;
    right: 13px;
  }

  .player-spacer,
  .text-spacer {
    display: block;
  }
}
</style>
