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
      background: "rgb(36, 36, 36)",
      titles: "rgb(201, 201, 201)",
      text: "#FFFFFF",
      grayLight: "rgb(130, 130, 130)",
      third: "rgb(46, 46, 46)",
      accent: "rgb(34, 139, 230)"
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

const darkTheme = createTheme({
  colors: {
    background: "rgb(255, 255, 255)",
    titles: "rgb(0, 0, 0)",
    text: "#FFFFFF",
    grayLight: "rgb(134, 142, 150)",
    third: "rgb(255, 255, 255)",
    accent: "rgb(34, 139, 230)"
  },
  space: {},
  fonts: {},
});


export const setupGlobalStyles = () => {
  setupFonts();
  setupStyles();
};
