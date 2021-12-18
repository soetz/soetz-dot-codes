import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    color: string;
    title?: string;
    description?: string;
    keywords?: string;
    socialImage?: string;
    robots?: string; // control search engine indexation of pages
  }
}
