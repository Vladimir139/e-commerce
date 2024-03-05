import { styled } from "@/shared/lib/styles";

export const Button = styled("button", {
  fontSize: "default",
  fontWeight: "$regular",
  color: "$text",

  backgroundColor: "inherit",
  border: "1px solid $grayLight",
  cursor: "pointer",

  padding: "9px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: 5,

  transition: "$default",

  "&:disabled": {
    cursor: "default",
    opacity: 0.6,
  },

  variants: {
    textSize: {
      default: {
        fontSize: "$default",
        lineHeight: "18px",
        fontWeight: "$regular",
      },
      small: {
        fontSize: "$smallLarge",
        lineHeight: "16px",
        fontWeight: "$regular",
      },
      medium: {
        fontSize: "$medium",
        lineHeight: "20px",
        fontWeight: "$medium",
      },
    },

    radius: {
      none: {
        borderRadius: "none",
      },
      normal: {
        borderRadius: 5,
      },
      medium: {
        borderRadius: 10,
      },
    },

    size: {
      none: {},
      small: {
        padding: 11,
      },
      normal: {
        padding: "6px 14px",
      },
      medium: {
        padding: "10px 18px",
      },
      big: {
        padding: "12px 26px",
      },
    },

    theme: {
      green: {
        backgroundColor: "$accept",
        color: "$text",
      },
      blue: {
        backgroundColor: "$accent",
        color: "$text",
      },
      inherit: {
        backgroundColor: "inherit",
        color: "$text",
      },
      turquoise: {
        backgroundColor: "$turquoise",
        color: "$text",
      },
      light: {
        backgroundColor: "#FFFFFF",
        color: "#000000",
      },
      grey: {
        backgroundColor: "$third",
        color: "$gray",
      },
    },

    stretch: {
      true: {
        width: "100%",
      },
    },

    isUppercase: {
      true: {
        textTransform: "uppercase",
      },
    },

    disabled: {
      true: {
        cursor: "not-allowed",
      },
    },

    isBorderNone: {
      true: {
        border: "none",
      },
    },
  },
});
