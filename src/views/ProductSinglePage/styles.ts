import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const WrapperSection = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: 15,
});
export const Block = styled("div", {
  width: "100%",
  maxWidth: 530,

  backgroundColor: "$third",

  border: "1px solid $gray",
  borderRadius: 8,

  padding: 32,
});
export const Title = styled("h2", {
  fontSize: "$default",
  fontWeight: "$regular",
  lineHeight: "25px",

  color: "$titles",

  marginTop: 15,
});
export const Category = styled("p", {
  fontSize: "$smallLarge",
  fontWeight: "$regular",
  lineHeight: "22px",

  color: "$grayLight",

  marginTop: 12,
});
export const Description = styled("p", {
  fontSize: "$smallLarge",
  fontWeight: "$regular",
  lineHeight: "22px",

  color: "$grayLight",

  marginTop: 12,
  marginBottom: 32,
});
export const InnerWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
export const Price = styled("p", {
  fontSize: "$large",
  fontWeight: "$medium",
  lineHeight: "31px",
});

export const Photo = styled(Image, {
  position: "relative !important",

  height: 220,
});
