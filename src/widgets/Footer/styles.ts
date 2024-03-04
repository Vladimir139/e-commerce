import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const Footer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderTop: "1px solid $grayLight",

  padding: "20px 0 20px",
});

export const LinkGitHub = styled(Link, {
  padding: 7,

  cursor: "pointer",

  "&:hover": {
    opacity: "0.7",
  },
});
