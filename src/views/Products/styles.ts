import { styled } from "@/shared/lib/styles";

export const BlocksWrapper = styled("section", {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",

  gap: 30,
});

export const ListProducts = styled("ul", {
  display: "flex",
  alignItems: "start",
  justifyContent: "start",
  flexWrap: "wrap",

  width: "100%",
  maxWidth: 962,

  gap: 30,
});
