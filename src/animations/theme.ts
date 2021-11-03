import gsap from "gsap";

const hoverRaysRotateCreate = (): GSAPTimeline => {
  const animation = gsap.timeline({
    repeat: -1,
    paused: true,
  });
  animation.to(".rays", {
    duration: 2.5,
    transformOrigin: "center",
    rotation: -72,
  });
  animation.to(".rays", {
    duration: 3.5,
    transformOrigin: "center",
    rotation: 72,
  });
  animation.set(".rays", {
    transformOrigin: "center",
    rotation: 0,
  });
  return animation;
};

const hoverSizeCreate = (): GSAPTimeline => {
  const animation = gsap.timeline({
    repeat: -1,
    paused: true,
  });
  animation.to("#rays-large-limit .outer-rays", {
    duration: 1,
    attr: { r: 10 },
  });
  animation.to(
    "#rays-small-limit .outer-rays",
    {
      duration: 1,
      attr: { r: 11 },
    },
    "<"
  );
  animation.to(
    ".inner-rays",
    {
      duration: 1,
      attr: { r: 7 },
    },
    "<"
  );
  animation.to(
    ".sun",
    {
      duration: 1,
      attr: { r: 4 },
    },
    "<"
  );
  animation.to("#rays-large-limit .outer-rays", {
    duration: 1,
    attr: { r: 12 },
  });
  animation.to(
    "#rays-small-limit .outer-rays",
    {
      duration: 1,
      attr: { r: 10 },
    },
    "<"
  );
  animation.to(
    ".inner-rays",
    {
      duration: 1,
      attr: { r: 8 },
    },
    "<"
  );
  animation.to(
    ".sun",
    {
      duration: 1,
      attr: { r: 5 },
    },
    "<"
  );
  return animation;
};

const hoverStarsCreate = (): GSAPTimeline => {
  const animation = gsap.timeline({ repeat: -1, paused: true });
  animation.to(".star-1", { duration: 0.6, alpha: 1 });
  animation.to(".star-1", { duration: 0.6, alpha: 0 });
  animation.to(".star-2", { duration: 0.6, alpha: 1 }, "-=80%");
  animation.to(".star-2", { duration: 0.6, alpha: 0 });
  animation.to(".star-3", { duration: 0.6, alpha: 1 }, "-=80%");
  animation.to(".star-3", { duration: 0.6, alpha: 0 });
  return animation;
};

const lightToDarkTransitionCreate = (callback: () => void): GSAPTimeline => {
  const animation = gsap.timeline({
    onComplete: () => {
      callback();
    },
  });
  animation.to(".outer-rays", {
    duration: 0.8,
    ease: "power2",
    attr: { r: 0 },
  });
  animation.to(
    ".inner-rays",
    {
      duration: 0.8,
      ease: "power2",
      attr: { r: 3 },
    },
    "<"
  );
  animation.set(".rays", {
    transformOrigin: "center",
    rotation: 0,
  });
  animation.to(
    ".sun",
    {
      duration: 0.8,
      ease: "power2",
      attr: { r: 8.5 },
    },
    "-=85%"
  );
  animation.to(
    "#moon-limit circle",
    {
      duration: 0.8,
      ease: "power2",
      attr: { r: 9.5 },
    },
    "<"
  );
  animation.to(
    "#sun-to-moon circle, .moon",
    {
      duration: 0.8,
      ease: "power2",
      transformOrigin: "19px 5px",
      rotation: 0,
    },
    "-=85%"
  );

  return animation;
};

const darkInitiation = (): void => {
  gsap.set(".outer-rays", {
    attr: { r: 0 },
  });
  gsap.set(".inner-rays", {
    attr: { r: 3 },
  });
  gsap.set(".rays", {
    transformOrigin: "center",
    rotation: 0,
  });
  gsap.set(".sun", {
    attr: { r: 8.5 },
  });
  gsap.set("#moon-limit circle", {
    duration: 0.8,
    ease: "power2",
    attr: { r: 9.5 },
  });
  gsap.set("#sun-to-moon circle, .moon", {
    transformOrigin: "19px 5px",
    rotation: 0,
  });
};

const darkToLightTransitionCreate = (callback: () => void): GSAPTimeline => {
  const animation = gsap.timeline({
    onComplete: () => {
      callback();
    },
  });
  animation.to(".stars path", {
    duration: 0.2,
    alpha: 0,
  });
  animation.to(
    "#sun-to-moon circle, .moon",
    {
      duration: 0.8,
      transformOrigin: "19px 5px",
      rotation: -180,
    },
    "<"
  );
  animation.to(
    ".sun",
    {
      duration: 0.8,
      attr: { r: 5 },
    },
    "-=85%"
  );
  animation.to(
    "#moon-limit circle",
    {
      duration: 0.8,
      attr: { r: 6 },
    },
    "-=85%"
  );
  animation.to(
    ".inner-rays",
    {
      duration: 0.8,
      attr: { r: 8 },
    },
    "-=85%"
  );
  animation.to(
    "#rays-large-limit .outer-rays",
    {
      duration: 0.8,
      attr: { r: 12 },
    },
    "<"
  );
  animation.to(
    "#rays-small-limit .outer-rays",
    {
      duration: 0.8,
      attr: { r: 10 },
    },
    "<"
  );

  return animation;
};

const lightInitiation = (): void => {
  gsap.set("#sun-to-moon circle, .moon", {
    transformOrigin: "19px 5px",
    rotation: -180,
  });
  gsap.set(".stars path", {
    alpha: 0,
  });
};

export {
  hoverRaysRotateCreate,
  hoverSizeCreate,
  hoverStarsCreate,
  lightToDarkTransitionCreate,
  darkInitiation,
  darkToLightTransitionCreate,
  lightInitiation,
};
