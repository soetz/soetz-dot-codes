import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Contact from "./pages/Contact.vue";
import Ethics from "./pages/ethics/Ethics.vue";
import Home from "./pages/Home.vue";
import LinksList from "./pages/links/LinksList.vue";
import PodcastList from "./pages/podcast/PodcastList.vue";
import { createApp } from "vue";

const routes = [
  { path: "/", component: Home, meta: { color: "orange" } },
  { path: "/contact", component: Contact, meta: { color: "orange" } },
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

app.mount("#app");
