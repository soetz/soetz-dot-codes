import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Ethics from "./pages/ethics/Ethics.vue";
import Home from "./pages/Home.vue";
import { createApp } from "vue";

const routes = [
  { path: "/", component: Home, meta: { color: "orange" } },
  { path: "/ethics", component: Ethics, meta: { color: "green" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
