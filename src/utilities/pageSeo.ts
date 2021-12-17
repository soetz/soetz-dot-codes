import { RouteLocationNormalized } from "vue-router";

const pageTitle = (routeMetaTitle?: string): string => {
  if (routeMetaTitle) {
    const appendix = " | soetz.codes";
    if (routeMetaTitle.length < 60 - appendix.length) {
      return routeMetaTitle + appendix;
    } else {
      return routeMetaTitle;
    }
  } else {
    return "Simon Lecutiez, Junior Front-end Developer";
  }
};

const updatePageTitle = (routeMetaTitle?: string): void => {
  document.title = pageTitle(routeMetaTitle);
  const metaOgTitle = document.querySelector('meta[property="og:title"]');
  if (routeMetaTitle && metaOgTitle) {
    metaOgTitle.setAttribute("content", routeMetaTitle);
  } else if (metaOgTitle) {
    metaOgTitle.setAttribute("content", pageTitle());
  }
};

const pageDescription = (routeMetaDescription?: string): string => {
  if (routeMetaDescription) {
    return routeMetaDescription;
  } else {
    return "Hi, this is Simon Lecutiez. I’m a french junior front-end developer and I love when interfaces spark joy.";
  }
};

const updatePageDescription = (routeMetaDescription?: string): void => {
  const description = pageDescription(routeMetaDescription);
  const metaDescription = document.querySelector("meta[name=description]");
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  }
  const metaOgDescription = document.querySelector(
    'meta[property="og:description"]'
  );
  if (metaOgDescription) {
    metaOgDescription.setAttribute("content", description);
  }
};

const pageKeywords = (routeMetaKeywords?: string): string => {
  if (routeMetaKeywords) {
    return routeMetaKeywords;
  } else {
    return "front-end web developer, web, developer, front-end, junior, HTML, CSS, javascript, typescript, SVG, vue, angular, SEO, France, Lyon, Germany, Cologne, Köln";
  }
};

const updatePageKeywords = (routeMetaKeywords?: string): void => {
  const metaKeywords = document.querySelector("meta[name=keywords]");
  if (metaKeywords) {
    metaKeywords.setAttribute("content", pageKeywords(routeMetaKeywords));
  }
};

const pageSocialImage = (routeMetaSocialImage?: string): string | null => {
  if (routeMetaSocialImage) {
    return `https://soetz.codes/social-image/${routeMetaSocialImage}.png`;
  }
  return null;
};

const updatePageSocialImage = (routeMetaSocialImage?: string): void => {
  const socialImageUrl = pageSocialImage(routeMetaSocialImage);
  const metaOgImage = document.querySelector('meta[property="og:image"]');
  const metaTwitterCard = document.querySelector('meta[name="twitter:card"]');
  if (metaOgImage && socialImageUrl) {
    metaOgImage.setAttribute("content", socialImageUrl);
  } else if (metaOgImage && !socialImageUrl) {
    document.head.removeChild(metaOgImage);
  } else if (!metaOgImage && socialImageUrl) {
    const newMetaOgImage = document.createElement("meta");
    newMetaOgImage.setAttribute("property", "og:image");
    newMetaOgImage.setAttribute("content", socialImageUrl);
    document.head.appendChild(newMetaOgImage);
  }

  if (metaTwitterCard && socialImageUrl) {
    metaTwitterCard.setAttribute("content", "summary_large_image");
  } else if (metaTwitterCard) {
    metaTwitterCard.setAttribute("content", "summary");
  }
};

const pageUrl = (routePath?: string): string | null => {
  if (routePath) {
    return "https://soetz.codes" + routePath;
  } else {
    return null;
  }
};

const updatePageUrl = (routePath?: string): void => {
  const url = pageUrl(routePath);
  const metaOgUrl = document.querySelector('meta[property="og:url"]');
  if (metaOgUrl && url) {
    metaOgUrl.setAttribute("content", url);
  }
};

const updatePageSeo = (route: RouteLocationNormalized): void => {
  if (!import.meta.env.SSR) {
    updatePageTitle(route.meta.title);
    updatePageDescription(route.meta.description);
    updatePageKeywords(route.meta.keywords);
    updatePageSocialImage(route.meta.socialImage);
    updatePageUrl(route.path);
  }
};

export {
  pageTitle,
  pageDescription,
  pageKeywords,
  pageSocialImage,
  pageUrl,
  updatePageSeo,
};
