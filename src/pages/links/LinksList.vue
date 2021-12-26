<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Appear from "../../components/Appear.vue";
import Link from "./components/Link.vue";
import Pagination from "../../components/Pagination.vue";
import axios from "axios";
import { environment } from "../../../environment.client";

interface LinkData {
  title: string;
  description: string;
  url: string;
}

const route = useRoute();
const router = useRouter();

const initPage = route.query.page ? parseInt(route.query.page as string) : 0;

const page = ref(initPage);
const numberOfPages = ref(0);
const links = ref<LinkData[]>([]);

const updateLinks = async () => {
  try {
    const response = await axios.get(
      `http://${environment.server.domain}:${environment.server.port}/links`,
      {
        params: {
          page: page.value,
        },
      }
    );

    numberOfPages.value = response.data.numberOfPages;
    links.value = response.data.links;
  } catch (error) {
    router.push("/links/not-found");
  }
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
        A curated collection of links to cool stuff on the internet spanning
        various subjects. Chances are you’ll find a lot of web/art/design or
        whatever stuff done with computers as that’s what interests me the most!
        Maybe politics too, you’ve been warned.
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
    <Pagination :page="page" :number-of-pages="numberOfPages" />
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

  list-style-type: none;
}
</style>
