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

export { pageTitle, pageDescription };
