<script setup lang="ts">
import { ref, watch } from "vue";
import Appear from "../../components/Appear.vue";
import Pagination from "../../components/Pagination.vue";
import PodcastLink from "./components/PodcastLink.vue";
import axios from "axios";
import { environment } from "../../../environment.client";
import { useRoute } from "vue-router";

interface PodcastSkeleton {
  code: string;
  programme: string;
  number: number;
  title: string;
  duration: number;
  image: string;
  imageAlt: string;
}

interface PodcastResponse extends PodcastSkeleton {
  date: string;
}

interface PodcastData extends PodcastSkeleton {
  date: Date;
}

const route = useRoute();

const initPage = route.query.page ? parseInt(route.query.page as string) : 0;

const page = ref(initPage);
const numberOfPages = ref(0);
const podcasts = ref<PodcastData[]>([]);

const updatePodcasts = async () => {
  const response = await axios.get(
    `http://${environment.server.domain}:${environment.server.port}/podcast`,
    {
      params: {
        page: page.value,
      },
    }
  );

  numberOfPages.value = response.data.numberOfPages;
  podcasts.value = response.data.podcasts.map((podcast: PodcastResponse) => {
    return {
      ...podcast,
      date: new Date(podcast.date),
    };
  });
};

await updatePodcasts();

watch(
  () => route.query,
  async (query) => {
    page.value = query.page ? parseInt(query.page as string) : 0;
    await updatePodcasts();
  }
);
</script>

<template>
  <section class="limited-width" lang="fr-FR">
    <Appear class="overflow-visible">
      <h1>Regard 9</h1>
      <p class="limited-width-small">
        Le podcast qui t’en met plein la vue ! Je pars à la rencontre d’artistes
        d’horizons divers mais qui ont une chose en commun : leur travail
        s’apprécie avec les yeux.
      </p>
    </Appear>
    <Appear class="overflow-visible">
      <ul>
        <PodcastLink
          v-for="podcast in podcasts"
          :key="podcast.code"
          v-bind="podcast"
        />
      </ul>
      <Pagination
        class="pagination"
        :page="page"
        :number-of-pages="numberOfPages"
        language="fr"
      />
    </Appear>
  </section>
</template>

<style scoped>
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

.overflow-visible {
  overflow-x: visible;
  overflow-y: visible;
}

ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 26px;
  row-gap: 26px;

  margin-top: 56px;
  padding-left: 0;

  list-style-type: none;
}

.pagination {
  margin-top: 48px;
}

@media screen and (min-width: 600px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
