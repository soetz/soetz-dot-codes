import "vue-router";
import { RssLink } from "./utilities/pageSeo";

declare module "vue-router" {
  interface RouteMeta {
    color: string;
    title?: string;
    description?: string;
    keywords?: string;
    socialImage?: string;
    robots?: string; // control search engine indexation of pages
    rssLink?: RssLink;
  }
}
