import { styled } from "@/shared/lib/styles";

export const Label = styled("label", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "100%",

  border: "1px solid $grayLight",
  borderRadius: 5,

  backgroundColor: "$third",

  padding: 9,

  marginBottom: 4,

  variants: {
    radius: {
      small: {},
      medium: {},
    },
  },
});

export const Input = styled("input", {
  fontSize: "$smallLarge",
  fontWeight: "$regular",

  backgroundColor: "inherit",
  color: "$text",

  outline: "none",

  "&::placeholder": {
    fontSize: "$smallLarge",
    lineHeight: "34px",
    fontWeight: "$medium",

    color: "$titles",
  },

  variants: {
    stretch: {
      true: {
        width: "100%",
      },
    },
    size: {
      small: {},
      medium: {},
    },
    theme: {
      default: {},
    },
  },
});

export const Text = styled("p", {
  fontSize: "$smallLarge",
  lineHeight: "22px",
  fontWeight: "$medium",

  color: "$titles",
});

export const Required = styled("span", {});
