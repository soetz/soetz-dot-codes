import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    color: string;
    title?: string;
    description?: string;
    keywords?: string;
    socialImage?: string;
  }
}
