<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { ref, watch } from "vue";
import Appear from "../../components/Appear.vue";
import Link from "./components/Link.vue";
import More from "../../components/More.vue";
import axios from "axios";
import { environment } from "../../../environment.client";

interface LinkData {
  title: string;
  description: string;
  url: string;
}

const route = useRoute();

const initPage = route.query.page ? parseInt(route.query.page as string) : 0;

const page = ref(initPage);
const numberOfPages = ref(0);
const links = ref<LinkData[]>([]);

const updateLinks = async () => {
  await axios
    .get(
      `http://${environment.server.domain}:${environment.server.port}/links`,
      {
        params: {
          page: page.value,
        },
      }
    )
    .then((response) => {
      numberOfPages.value = response.data.numberOfPages;
      links.value = response.data.links;
    });
};

await updateLinks();

watch(
  () => route.query,
  async (query) => {
    page.value = query.page ? parseInt(query.page as string) : 0;
    await updateLinks();
  }
);
</script>

<template>
  <section class="limited-width">
    <Appear class="overflow-visible">
      <h1>Cool links</h1>
      <p class="limited-width-small">
        A curated list of links to cool stuff on the internet on various
        subjects. Chances are there’ll be a lot of web/art/design or whatever
        stuff done with computers as that’s what interests me the most! Maybe
        politics too, you’ve been warned.
      </p>
    </Appear>
    <ul>
      <Link
        v-for="(link, index) in links"
        :key="link.url"
        v-bind="link"
        :index="index"
      />
    </ul>
    <div class="pagination limited-width-small">
      <RouterLink
        class="more-target page-previous"
        :class="{ disabled: page < 1 }"
        :to="`/links${page < 2 ? '' : `?page=${page - 1}`}`"
        ><More :bold="page >= 1" size="m" direction="left"
          >previous page</More
        ></RouterLink
      >
      <RouterLink
        class="more-target page-next"
        :class="{ disabled: page >= numberOfPages - 1 }"
        :to="`/links?page=${
          page >= numberOfPages - 1 ? numberOfPages - 1 : page + 1
        }`"
        ><More :bold="page < numberOfPages - 1" size="m"
          >next page</More
        ></RouterLink
      >
    </div>
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
  padding-left: 0;
}

.pagination {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
</style>
