import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: 1200,

  margin: "0 auto",

  variants: {
    isBig: {
      true: {
        maxWidth: 1320,
      },
    },
  },
});
