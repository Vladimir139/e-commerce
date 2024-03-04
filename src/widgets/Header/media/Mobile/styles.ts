import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const HeaderMobileWrapper = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "12px 20px",

  borderBottom: "1px solid $grayLight",
});
export const Logo = styled(Link, {
  fontSize: "18px",
  fontWeight: "$bold",
  lineHeight: "20px",

  color: "$accent",
});
