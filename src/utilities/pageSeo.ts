const pageTitle = (title?: string): string => {
  if (title) {
    const appendix = " | soetz.codes";
    if (title.length < 60 - appendix.length) {
      return title + appendix;
    } else {
      return title;
    }
  } else {
    return "Simon Lecutiez, Junior Front-end Developer";
  }
};

const updatePageTitle = (title?: string): void => {
  document.title = pageTitle(title);
  const metaOgTitle = document.querySelector('meta[property="og:title"]');
  if (title && metaOgTitle) {
    metaOgTitle.setAttribute("content", title);
  } else if (metaOgTitle) {
    metaOgTitle.setAttribute("content", pageTitle());
  }
};

const pageDescription = (description?: string): string => {
  if (description) {
    return description;
  } else {
    return "Hi, this is Simon Lecutiez. I’m a french junior front-end developer and I love when interfaces spark joy.";
  }
};

const updatePageDescription = (sourceDescription?: string): void => {
  const description = pageDescription(sourceDescription);
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

const pageKeywords = (keywords?: string): string => {
  if (keywords) {
    return keywords;
  } else {
    return "front-end web developer, web, developer, front-end, junior, HTML, CSS, javascript, typescript, SVG, vue, angular, SEO, France, Lyon, Germany, Cologne, Köln, Simon Lecutiez";
  }
};

const updatePageKeywords = (keywords?: string): void => {
  const metaKeywords = document.querySelector("meta[name=keywords]");
  if (metaKeywords) {
    metaKeywords.setAttribute("content", pageKeywords(keywords));
  }
};

const pageSocialImage = (socialImage?: string): string | null => {
  if (socialImage) {
    return `https://soetz.codes/social-image/${socialImage}.png`;
  }
  return null;
};

const updatePageSocialImage = (socialImage?: string): void => {
  const socialImageUrl = pageSocialImage(socialImage);
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

const pageRobots = (robots?: string): string => {
  if (robots) {
    return robots;
  } else {
    return "";
  }
};

const updateRobots = (sourceRobots?: string): void => {
  const robots = pageRobots(sourceRobots);
  const metaRobots = document.querySelector("meta[name=robots]");
  if (metaRobots) {
    metaRobots.setAttribute("content", robots);
  }
};

const pageUrl = (path?: string): string | null => {
  if (path) {
    return "https://soetz.codes" + path;
  } else {
    return null;
  }
};

const updatePageUrl = (path?: string): void => {
  const url = pageUrl(path);
  const metaOgUrl = document.querySelector('meta[property="og:url"]');
  if (metaOgUrl && url) {
    metaOgUrl.setAttribute("content", url);
  }
};

interface SeoProperties {
  title?: string;
  description?: string;
  keywords?: string;
  socialImage?: string;
  robots?: string;
  path?: string;
}

const updatePageSeo = (seoProperties: SeoProperties): void => {
  if (!import.meta.env.SSR) {
    updatePageTitle(seoProperties.title);
    updatePageDescription(seoProperties.description);
    updatePageKeywords(seoProperties.keywords);
    updatePageSocialImage(seoProperties.socialImage);
    updateRobots(seoProperties.robots);
    updatePageUrl(seoProperties.path);
  }
};

export {
  pageTitle,
  pageDescription,
  pageKeywords,
  pageSocialImage,
  pageUrl,
  pageRobots,
  updatePageSeo,
};
