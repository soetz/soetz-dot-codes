<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Appear from "../../components/Appear.vue";
import Pagination from "../../components/Pagination.vue";
import PodcastLink from "./components/PodcastLink.vue";
import RssIcon from "../../components/icons/RssIcon.vue";
import axios from "axios";
import { environment } from "../../../environment.client";

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
const router = useRouter();

const initPage = route.query.page ? parseInt(route.query.page as string) : 0;

const page = ref(initPage);
const numberOfPages = ref(0);
const podcasts = ref<PodcastData[]>([]);

const updatePodcasts = async () => {
  try {
    const response = await axios.get(
      `http${environment.server.secure ? "s" : ""}://${
        environment.server.domain
      }:${environment.server.port}/podcast`,
      {
        params: {
          programme: "regard-9",
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
  } catch (error) {
    router.push("/podcast/not-found");
  }
};

await updatePodcasts();

// TODO add link to RSS feed in the page

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
      <div class="title-container">
        <h1>Regard&nbsp;9</h1>
        <a
          href="https://rss.soetz.codes/podcast/regard-9"
          target="_blank"
          rel="noopener"
        >
          <RssIcon class="rss-icon" />
        </a>
      </div>

      <p class="limited-width-small">
        Le podcast qui t’en met plein la vue ! Je pars à la rencontre d’artistes
        d’horizons divers mais qui ont une chose en commun : leur travail
        s’apprécie avec les yeux.
      </p>
      <p>
        Écoutez Regard 9 sur votre plateforme préférée : tous les liens
        <a
          class="link-block"
          href="https://linktr.ee/regard9"
          target="_blank"
          rel="noopener"
          >ici</a
        >.
      </p>
    </Appear>
    <Appear class="overflow-visible">
      <p v-if="podcasts.length <= 0" class="limited-width-small no-podcast">
        Il semble qu’aucun épisode ne soit sorti pour le moment. Rassurez-vous,
        ça ne saurait tarder ! :)
      </p>
      <ul v-if="podcasts.length >= 1">
        <PodcastLink
          v-for="podcast in podcasts"
          :key="podcast.code"
          v-bind="podcast"
        />
      </ul>
      <Pagination
        v-if="podcasts.length >= 1"
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

.title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.rss-icon {
  width: 64px;
  height: 64px;

  margin-left: 16px;
  padding-left: 8px;
  padding-top: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
}

.no-podcast {
  margin-top: 42px;

  font-size: 20px;
  font-style: italic;
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

@media screen and (min-width: 400px) {
  .title-container {
    justify-content: initial;
  }
}

@media screen and (min-width: 600px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
