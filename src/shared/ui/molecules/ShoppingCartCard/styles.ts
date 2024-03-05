import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Card = styled("li", {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
});

export const LeftWrapper = styled("div", {
  display: "flex",
  alignItems: "start",
  justifyContent: "start",

  width: "100%",
});

export const Photo = styled(Image, {
  position: "relative !important",

  width: "100%",
  maxWidth: 100,
});

export const WrapperInfo = styled("div", {});

export const Title = styled("h2", {
  fontSize: "$large",
  fontWeight: "$regular",
  lineHeight: "33px",

  color: "$titles",
});

export const Price = styled(Title, {});

export const RightWrapper = styled("div", {
  width: "100%",
  maxWidth: 182,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const WrapperCount = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "100%",
});

export const Count = styled("p", {});
