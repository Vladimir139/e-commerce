import { globalCss } from "@stitches/react";

export const setupFonts = globalCss({
  "@font-face": [
    {
      fontFamily: "Mulish",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 400,
      src: 'local("Mulish"), url("/assets/fonts/Mulish/Regular/MulishRegular.woff2") format("woff2"), url("/assets/fonts/Mulish/Regular/MulishRegular.woff") format("woff")',
    },
    {
      fontFamily: "Mulish",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 500,
      src: 'local("Mulish"), url("/assets/fonts/Mulish/Medium/MulishMedium.woff2") format("woff2"), url("/assets/fonts/Mulish/Medium/MulishMedium.woff") format("woff")',
    },
    {
      fontFamily: "Mulish",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 600,
      src: 'local("Mulish"), url("/assets/fonts/Mulish/SemiBold/MulishSemiBold.woff2") format("woff2"), url("/assets/fonts/Mulish/SemiBold/MulishSemiBold.woff") format("woff")',
    },
    {
      fontFamily: "Mulish",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 700,
      src: 'local("Mulish"), url("/assets/fonts/Mulish/Bold/MulishBold.woff2") format("woff2"), url("/assets/fonts/Mulish/Bold/MulishBold.woff") format("woff")',
    },
    {
      fontFamily: "Mulish",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 800,
      src: 'local("Mulish"), url("/assets/fonts/Mulish/ExtraBold/MulishExtraBold.woff2") format("woff2"), url("/assets/fonts/Mulish/ExtraBold/MulishExtraBold.woff") format("woff")',
    },
    {
      fontFamily: "Mulish",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 900,
      src: 'local("Mulish"), url("/assets/fonts/Mulish/Black/MulishBlack.woff2") format("woff2"), url("/assets/fonts/Mulish/Black/MulishBlack.woff") format("woff")',
    },
  ],
});
