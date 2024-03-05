import { styled } from "@/shared/lib/styles";

export const Sidebar = styled("aside", {
  width: "100%",
  maxWidth: 310,
});

export const Title = styled("p", {
  display: "flex",
  alignItems: "center",
  justifyContent: "start",

  fontSize: "$default",
  fontWeight: "$regular",
  lineHeight: "25px",

  color: "$titles",

  gap: 10,
});

export const Hr = styled("div", {
  width: "100%",
  height: 1,

  marginTop: 16,
  marginBottom: 16,

  backgroundColor: "$grayLight",
});

export const ListFilters = styled("ul", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",

  gap: 3,

  marginBottom: "",
});

export const FilterItem = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "$smallLarge",
  fontWeight: "$semiBold",
  lineHeight: "16px",

  color: "$titles",

  padding: "10px 10px 10px 15px",

  cursor: "pointer",

  position: "relative",

  "&::before": {
    content: "",
    position: "absolute",

    top: 0,
    left: 0,

    width: 2,
    height: "100%",

    backgroundColor: "$third",

    zIndex: "$decorLine",
  },

  variants: {
    isActive: {
      true: {
        color: "$accent",

        "&:after": {
          zIndex: "decorActiveCircle",

          content: "",
          position: "absolute",

          top: "50%",
          left: -4,

          transform: "translateY(-50%)",

          width: 10,
          height: 10,

          borderRadius: 999,

          border: "2px solid $accent",
        },
      },
    },
  },
});

export const WrapperSlider = styled("div", {
  marginTop: 10,
});
