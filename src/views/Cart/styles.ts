import { styled } from "@/shared/lib/styles";

export const Titles = styled("h2", {
  fontSize: "$titleLarge",
  fontWeight: "$regular",
  lineHeight: "50px",

  color: "$titles",

  marginBottom: 32,
});
export const ListProducts = styled("ul", {
  display: "flex",
  flexDirection: "column",

  gap: 30,
});
export const Wrapper = styled("div", {});
export const InnerWrapperInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",

  gap: 15,
});
export const TitleTotal = styled("p", {
  fontSize: "$large",
  fontWeight: "$regular",
  lineHeight: "33px",

  color: "$titles",

  marginTop: 50,
});

export const Hr = styled("div", {
  width: "100%",
  height: 1,

  backgroundColor: "$gray",
});
