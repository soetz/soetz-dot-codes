import { createApp, h } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Contact from "./pages/Contact.vue";
import Ethics from "./pages/ethics/Ethics.vue";
import Home from "./pages/Home.vue";
import Legal from "./pages/Legal.vue";
import LinksList from "./pages/links/LinksList.vue";
import PodcastList from "./pages/podcast/PodcastList.vue";
import { updateViewportWidth } from "./utilities/ViewPortWidth";

const routes = [
  { path: "/", component: Home, meta: { color: "orange" } },
  { path: "/contact", component: Contact, meta: { color: "orange" } },
  { path: "/legal", component: Legal, meta: { color: "orange" } },
  { path: "/podcast", component: PodcastList, meta: { color: "purple" } },
  { path: "/ethics", component: Ethics, meta: { color: "green" } },
  { path: "/links", component: LinksList, meta: { color: "gold" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

router.afterEach(() => {
  updateViewportWidth();
});

app.component("VStyle", {
  render() {
    return h("style", this.$slots.default());
  },
});

app.mount("#app");
