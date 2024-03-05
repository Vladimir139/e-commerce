import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "10px 30px",

  borderBottom: "1px solid $grayLight",
});

export const Logo = styled(Link, {
  fontSize: "20px",
  fontWeight: "$bold",
  lineHeight: "22px",

  color: "$accent",
});

export const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",

  gap: 50,
});
export const NavItem = styled(Link, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: 5,

  "&:hover": {
    opacity: "0.7",
  },
});
export const UserActions = styled("div", {
  display: "flex",
  alignItems: "center",

  gap: 15,
});
export const UserAction = styled(Link, {
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
