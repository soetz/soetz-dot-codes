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
import NotFound from "./pages/NotFound.vue";
import PodcastDetail from "./pages/podcast/PodcastDetail.vue";
import PodcastList from "./pages/podcast/PodcastList.vue";
import TactileAdaptations from "./pages/work/TactileAdaptations.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      // see utilities/pageSeo for title and meta
      color: "orange",
      socialImage: "home.0",
    },
    name: "home",
  },
  {
    path: "/contact",
    component: Contact,
    meta: {
      color: "orange",
      title: "Contact me",
      description:
        "Want to get in touch with Simon Lecutiez? This is the place.",
      socialImage: "contact.0",
    },
  },
  {
    path: "/legal",
    component: Legal,
    meta: { color: "orange", title: "Mentions légales", robots: "none" },
  },
  {
    path: "/work/miam",
    component: Miam,
    meta: {
      color: "blue",
      title: "MIÀM - Overall project",
      description:
        "I participated (along with 45 other students) in building and managing the final annual project at Institut G4.",
      socialImage: "work.miam.0",
    },
  },
  {
    path: "/work/miam-teaching",
    component: MiamTeaching,
    meta: {
      color: "blue",
      title: "MIÀM - Teaching",
      description:
        "Jonathan Germain and I taught the basics of Angular to a class of ~20 students.",
      socialImage: "work.miam-teaching.0",
    },
  },
  {
    path: "/work/design-system-icon-component",
    component: DesignSystemIconComponent,
    meta: {
      color: "blue",
      title: "Proof of concept design system icon component",
      description:
        "I spent around a week studying the best way to implement icons as part of the new global design system at Ciril Group.",
      socialImage: "work.design-system-icon-component.0",
    },
  },
  {
    path: "/work/tactile-adaptations",
    component: TactileAdaptations,
    meta: {
      color: "blue",
      title: "Adapt GEO’s interfaces for tactile usage",
      description:
        "I spent around two weeks making sure GEO’s different interfaces had maximum usability on tactile and smaller devices.",
      socialImage: "work.tactile-adaptations.0",
    },
  },
  {
    path: "/work/analytics",
    component: Analytics,
    meta: {
      color: "blue",
      title: "This site’s custom analytics",
      description:
        "I spent a couple days building a super simple analytics system specifically for this site, using primarily Express and MongoDB.",
      socialImage: "work.analytics.0",
    },
  },
  {
    path: "/podcast/regard-9",
    component: PodcastList,
    meta: {
      color: "purple",
      title: "Regard 9",
      description:
        "Regard 9, le podcast qui t’en met plein la vue. Discussions avec des artistes qui évoluent dans le domaine du visuel.",
      keywords:
        "podcast, artiste, regard 9, Simon Lecutiez, visuel, art visuel, discussion, illustration, France, Lyon",
      socialImage: "podcast.regard-9.0",
      rssLink: {
        title: "Regard 9",
        url: "https://rss.soetz.codes/podcast/regard-9",
      },
    },
  },
  {
    path: "/podcast/:programme/:code",
    component: PodcastDetail,
    meta: {
      color: "purple",
    },
  },
  {
    path: "/links",
    component: LinksList,
    meta: {
      color: "gold",
      title: "Cool links",
      description:
        "A collection of links that lead to cool stuff on the internet. Curated by Simon Lecutiez.",
      socialImage: "links.0",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "not-found",
    meta: {
      color: "orange",
      title: "Not found",
      robots: "none",
    },
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
