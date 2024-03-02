import { createStitches } from "@stitches/react";

import { setupFonts } from "./fonts";
import { setupStyles } from "./global";

export const media = {
  toWideMobile: "only screen and (max-width: 560px)",
  toTablet: "only screen and (max-width: 768px)",
  toWideTablet: "only screen and (max-width: 960px)",
  toLaptop: "only screen and (max-width: 1200px)",
};

export const { styled, getCssText, keyframes, createTheme, css, theme } = createStitches({
  theme: {
    colors: {
      lightBackground: "#F2F4F7",
      background: "#FFF",
      secondaryBack: "#D9D9D9",
      stroke: "#615447",
      block: "#2E2D2C",
      secondaryBlock: "#55647D",
      third: "#1AA9F8",
      white: "#FFFFFF",
      text: "#000",
    },
    shadows: {},
    fonts: {
      mulish: "Mulish, sans-serif",
    },
    fontSizes: {
      little: "11px",
      small: "12px",
      smallMedium: "13px",
      smallLarge: "14px",
      defaultSmall: "15px",
      default: "16px",
      medium: "18px",
      large: "20px",
      largeMedium: "22px",
      titleSmall: "24px",
      titleMediumSmall: "26px",
      titleMedium: "28px",
      titleMediumLarge: "30px",
      titleLarge: "32px",
      big: "42px",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
    letterSpacings: {
      default: 0,
      defaultLarge: "0.01em",
      small: "0.02em",
    },
    transitions: {
      default: "0.2s ease-in-out",
      long: "0.3s ease-in-out",
    },
    radii: {},
    zIndices: {},
  },
  media,
});

export const setupGlobalStyles = () => {
  setupFonts();
  setupStyles();
};
