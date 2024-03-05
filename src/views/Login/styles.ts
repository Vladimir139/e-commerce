import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const WrapperForm = styled("div", {
  width: "100%",
  maxWidth: 340,

  margin: "0 auto",
});

export const Form = styled("form", {});

export const WrapperButtons = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "end",

  gap: 15,

  marginTop: 15,
});

export const LinkGoHome = styled(Link, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "$smallLarge",
  fontWeight: "$regular",
  lineHeight: "16px",

  backgroundColor: "$accent",

  borderRadius: 5,

  padding: "10px 18px",
});
