import Image from "next/image";
import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const Card = styled("div", {
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  borderRadius: 8,
  border: "1px solid #424242",

  backgroundColor: "$third",

  variants: {
    size: {
      preview: {
        maxWidth: 468,
      },
      store: {
        maxWidth: 280,
      },
    },
  },
});

export const InnerWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: "20px 32px 32px 32px",
});

export const Title = styled("h3", {
  fontSize: "$medium",
  fontWeight: "$medium",
  lineHeight: "18px",

  width: "100%",

  textAlign: "start",

  color: "$titles",
});

export const Description = styled("p", {
  fontSize: "$smallLarge",
  fontWeight: "$regular",
  lineHeight: "17px",

  textAlign: "start",

  margin: "12px 0 12px",

  color: "$grayLight",

  variants: {
    margin: {
      store: {
        margin: "12px 0 20px",
      },
    },
  },
});

export const BottomWrapper = styled("div", {
  display: "flex",
  alignItems: "center",

  variants: {
    size: {
      preview: {
        width: "100%",
        justifyContent: "space-between",

        gap: 5,
      },
      store: {
        justifyContent: "start",
        marginRight: "auto",

        gap: 5,

        marginTop: 28,
      },
    },
  },
});

export const Price = styled("p", {
  fontSize: "$large",
  fontWeight: "$regular",
  lineHeight: "20px",

  textAlign: "start",

  color: "$text",

  marginRight: "auto",
});

export const LinkLearnMore = styled(Link, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "$smallLarge",
  fontWeight: "$regular",
  lineHeight: "14px",

  padding: "8px 18px",

  borderRadius: "3px",

  color: "$text",
  backgroundColor: "$accent",
});

// ------------------------

export const Category = styled("p", {
  fontSize: "$smallLarge",
  fontWeight: "$regular",
  lineHeight: "14px",

  textAlign: "start",

  color: "$grayLight",

  marginRight: "auto",
  marginTop: 5,
});
export const LinkMore = styled(Link, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: 28,
  height: 28,

  backgroundColor: "$turquoise",

  borderRadius: 3,
});

export const SlideImg = styled(Image, {
  position: "relative !important",

  height: "200px !important",

  borderRadius: "8px 8px 0 0",
});
