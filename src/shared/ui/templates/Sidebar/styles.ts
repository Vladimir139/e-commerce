import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("div", {
  position: "fixed",
  zIndex: "$sidebar",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",

  width: "100%",
  height: "100%",

  transform: "translateX(-100%)",

  visibility: "hidden",
  overflow: "auto",
  backgroundColor: "$background",

  transition: "$default",

  variants: {
    isOpened: {
      true: {
        transform: "translateX(0)",
        visibility: "visible",
      },
    },
  },
});

export const InnerWrap = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  height: "100vh",
});

export const NavigationHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Logo = styled(Link, {
  fontWeight: 300,
  fontSize: "$titleMediumSmall",
  lineHeight: "29px",

  display: "block",
});

export const Navigation = styled("nav", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",

  gap: 10,

  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 20,

  borderBottom: "1px solid $grayLight",
});

export const NavLink = styled(Link, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "$large",
  lineHeight: "18px",

  gap: 5,

  padding: 5,
});

export const TopWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "12px 20px",

  borderBottom: "1px solid $grayLight",
});

export const Overlay = styled("div", {
  position: "fixed",
  zIndex: "$overlay",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",

  width: "100%",
  height: "100%",

  visibility: "hidden",
  overflow: "auto",
  backgroundColor: "rgba(0,0,0,0.4)",

  variants: {
    isOpened: {
      true: {
        visibility: "visible",
      },
    },
  },
});

export const CloseButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "inherit",

  cursor: "pointer",

  width: 25,
  height: 25,

  "&:hover": {
    opacity: "0.7",
  },
});

export const WrapperLoginBtn = styled("div", {
  borderBottom: "1px solid $grayLight",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: 10,
});

export const SignInBtn = styled(Link, {
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

export const WrapperSwitchThemeBtn = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: 10,

  marginBottom: "auto",
});
