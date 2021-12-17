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

const pageDescription = (routeMetaDescription?: string): string => {
  if (routeMetaDescription) {
    return routeMetaDescription;
  } else {
    return "Hi, this is Simon Lecutiez. I’m a french junior front-end developer and I love when interfaces spark joy.";
  }
};

const pageKeywords = (routeMetaKeywords?: string): string => {
  if (routeMetaKeywords) {
    return routeMetaKeywords;
  } else {
    return "front-end web developer, web, developer, front-end, junior, HTML, CSS, javascript, typescript, SVG, vue, angular, SEO, France, Lyon, Germany, Cologne, Köln";
  }
};

export { pageTitle, pageDescription, pageKeywords };
