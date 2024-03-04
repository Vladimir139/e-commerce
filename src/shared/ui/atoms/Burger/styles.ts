import { styled } from "@/shared/lib/styles";

export const Burger = styled("span", {
  display: "flex",
  alignItems: "center",
  position: "relative",
  backgroundColor: "inherit",
  transition: "$default",
  cursor: "pointer",

  zIndex: "$burger",

  width: "20px",
  height: "20px",

  "&::before": {
    content: "",
    backgroundColor: "$main",
    position: "absolute",
    width: "100%",
    height: "2px",
    top: "0",
    left: "0",
    transform: "rotate(0deg)",
    transition: "$default",
    borderRadius: "1px",
  },

  "&::after": {
    content: "",
    backgroundColor: "$main",
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: "0",
    left: "0",
    transform: "rotate(0deg)",
    transition: "$default",
    borderRadius: "1px",
  },

  variants: {
    isOpened: {
      true: {
        "&::before": {
          width: "120%",
          transform: "rotate(45deg)",
          top: "45%",
        },
        "&::after": {
          width: "120%",
          top: "45%",
          transform: "rotate(-45deg)",
        },
      },
    },
  },
});

export const MiddleLine = styled("span", {
  display: "block",
  width: "100%",
  height: "2px",
  backgroundColor: "$main",
  transition: "$default",
  borderRadius: "1px",

  variants: {
    isOpened: {
      true: {
        opacity: "0",
      },
    },
  },
});
