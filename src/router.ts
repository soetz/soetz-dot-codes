import {
  Router,
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import Analytics from "./pages/work/Analytics.vue";
import Contact from "./pages/Contact.vue";
import Home from "./pages/home/Home.vue";
import Legal from "./pages/Legal.vue";
import LinksList from "./pages/links/LinksList.vue";
import Miam from "./pages/work/Miam.vue";
import MiamTeaching from "./pages/work/MiamTeaching.vue";
import PodcastList from "./pages/podcast/PodcastList.vue";

const routes = [
  { path: "/", component: Home, meta: { color: "orange" } },
  { path: "/contact", component: Contact, meta: { color: "orange" } },
  { path: "/legal", component: Legal, meta: { color: "orange" } },
  { path: "/work/miam", component: Miam, meta: { color: "blue" } },
  {
    path: "/work/miam-teaching",
    component: MiamTeaching,
    meta: { color: "blue" },
  },
  { path: "/work/analytics", component: Analytics, meta: { color: "blue" } },
  { path: "/podcast", component: PodcastList, meta: { color: "purple" } },
  { path: "/links", component: LinksList, meta: { color: "gold" } },
];

export function createMyRouter(): Router {
  return createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    scrollBehavior: (to, from, savedPosition) => {
      if (to.hash) {
        return {
          el: to.hash,
        };
      } else if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    },
    routes,
  });
}
