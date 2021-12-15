import {
  Router,
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import Analytics from "./pages/work/Analytics.vue";
import Contact from "./pages/Contact.vue";
import DesignSystemIconComponent from "./pages/work/DesignSystemIconComponent.vue";
import Home from "./pages/home/Home.vue";
import Legal from "./pages/Legal.vue";
import LinksList from "./pages/links/LinksList.vue";
import Miam from "./pages/work/Miam.vue";
import MiamTeaching from "./pages/work/MiamTeaching.vue";
import PodcastList from "./pages/podcast/PodcastList.vue";
import TactileAdaptations from "./pages/work/TactileAdaptations.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: { color: "orange" },
    name: "home",
  },
  {
    path: "/contact",
    component: Contact,
    meta: { color: "orange", title: "Contact" },
  },
  {
    path: "/legal",
    component: Legal,
    meta: { color: "orange", title: "Mentions légales" },
  },
  {
    path: "/work/miam",
    component: Miam,
    meta: { color: "blue", title: "MIÀM - Overall project" },
  },
  {
    path: "/work/miam-teaching",
    component: MiamTeaching,
    meta: { color: "blue", title: "MIÀM - Teaching" },
  },
  {
    path: "/work/design-system-icon-component",
    component: DesignSystemIconComponent,
    meta: {
      color: "blue",
      title: "Proof of concept design system icon component",
    },
  },
  {
    path: "/work/tactile-adaptations",
    component: TactileAdaptations,
    meta: { color: "blue", title: "Adapt GEO’s interfaces for tactile usage" },
  },
  {
    path: "/work/analytics",
    component: Analytics,
    meta: { color: "blue", title: "This site’s custom analytics" },
  },
  {
    path: "/podcast",
    component: PodcastList,
    meta: { color: "purple", title: "Podcast" },
  },
  {
    path: "/links",
    component: LinksList,
    meta: { color: "gold", title: "Links" },
  },
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
