import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const CardCategoryWrapper = styled("div", {
  position: "relative",

  width: 318,
  height: 420,

  padding: 32,

  borderRadius: 5,

  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
});

export const InnerWrapper = styled("div", {});

export const Title = styled("p", {
  fontSize: "$small",
  fontWeight: "$bold",
  lineHeight: "17px",
  textTransform: "uppercase",

  color: "$text",
  opacity: 0.7,

  textAlign: "start",
});

export const CategoryName = styled("h2", {
  fontSize: "$titleLarge",
  fontWeight: "$bold",
  lineHeight: "38px",

  color: "$text",

  textAlign: "start",

  marginTop: "10px",
});

export const LinkGoToStore = styled(Link, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  cursor: "pointer",

  maxWidth: 120,

  fontSize: "$smallLarge",
  fontWeight: "$medium",
  lineHeight: "14px",

  padding: "10px 15px",

  borderRadius: 5,

  backgroundColor: "$main",
  color: "$secondary",
});
