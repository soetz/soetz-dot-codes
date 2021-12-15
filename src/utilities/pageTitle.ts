const pageTitle = (routeMetaTitle?: string): string => {
  if (routeMetaTitle) {
    const appendix = " | soetz.codes";
    if (routeMetaTitle.length < 60 - appendix.length) {
      return routeMetaTitle + appendix;
    } else {
      return routeMetaTitle;
    }
  } else {
    return "Simon Lecutiez − Junior front-end developer";
  }
};

export { pageTitle };
