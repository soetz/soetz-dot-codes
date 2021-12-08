import {
  Router,
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import Contact from "./pages/Contact.vue";
import Home from "./pages/home/Home.vue";
import Legal from "./pages/Legal.vue";
import LinksList from "./pages/links/LinksList.vue";
import PodcastList from "./pages/podcast/PodcastList.vue";

const routes = [
  { path: "/", component: Home, meta: { color: "orange" } },
  { path: "/contact", component: Contact, meta: { color: "orange" } },
  { path: "/legal", component: Legal, meta: { color: "orange" } },
  { path: "/podcast", component: PodcastList, meta: { color: "purple" } },
  { path: "/links", component: LinksList, meta: { color: "gold" } },
];

export function createMyRouter(): Router {
  return createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  });
}
