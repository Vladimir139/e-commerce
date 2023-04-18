import { globalCss } from "@stitches/react";

export const setupStyles = globalCss({
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    backgroundColor: "$background",

    color: "$text",
    fontFamily: "$mulish",
    fontSize: "$default",
    lineHeight: "24px",

    transition: "$long",

    "&.overflow-hidden": {
      overflow: "hidden",
    },
    main: {
      "&.service": {
        backgroundImage: "url(/assets/img/page-background.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        width: "100vw",
        maxWidth: 1903,
        maxHeight: 1000,
      },
      "&.overflow-x-hidden": {
        overflowX: "hidden",
      },
    },

    ".swiper-pagination-bullet": {
      backgroundColor: "$block",

      opacity: 1,
      borderRadius: 100,

      transition: "$default",

      "&.accent": {
        backgroundColor: "$accent",
      },

      "&-active": {
        width: 30,
      },
    },
  },
  "#__next": {
    display: "grid",
    minHeight: "100vh",
  },
  a: {
    cursor: "pointer",

    color: "inherit",
  },
  "*, ::before, ::after": {
    boxSizing: "border-box",
  },
  "h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
  },
  ".visually-hidden": {
    position: "absolute",

    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,

    whiteSpace: "nowrap",

    clipPath: "inset(100%)",
    clip: "rect(0 0 0 0)",
    overflow: "hidden",
  },

  "#nprogress": {
    "& .bar": {
      top: "68px !important",

      height: "4px !important",

      background: "linear-gradient(90.5deg, #AB58FF 0.43%, #0A84FF 99.6%) !important",

      "@media only screen and (max-width: 960px)": {
        top: "48px !important",
      },

      "& > .peg": {
        display: "none",
      },
    },
  },
});
