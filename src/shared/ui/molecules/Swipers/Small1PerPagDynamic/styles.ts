import { styled } from "@/shared/lib/styles";

export const Root = styled("section", {
  position: "relative",

  width: "100%",
  margin: "0 auto",

  display: "flex",
  alignItems: "center",

  "& .swiper": {
    width: "100%",
    height: "100%",

    "& .swiper-slide": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "$grey",

      width: "auto",
      height: "auto",
    },

    "& .swiper-pagination-bullets": {
      bottom: "-4px !important",
    },
  },
});

const NavigationButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "$carouselArrows",

  backgroundColor: "rgb(255, 255, 255)",
  borderRadius: 999,
  opacity: "0.8",

  position: "absolute",
  top: "50%",

  width: 20,
  height: 20,
  padding: 0,

  transform: "translateY(-50%)",
  border: "none",

  transition: "$default",

  "&:hover:not(:disabled)": {
    cursor: "pointer",
    opacity: "1",
  },

  "&:disabled": {
    opacity: 0.1,
    cursor: "default",
  },
});

export const LeftNavigation = styled(NavigationButton, {
  left: 10,

  "& > svg": {
    transform: "rotate(90deg) !important",
  },
});

export const RightNavigation = styled(NavigationButton, {
  right: 10,
});
