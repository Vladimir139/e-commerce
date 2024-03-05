import { Range, Root, Thumb, Track } from "@radix-ui/react-slider";

import { styled } from "@/shared/lib/styles";

export const StyledRoot = styled(Root, {
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  userSelect: "none",
  touchAction: "none",

  width: "100%",
  height: 20,
});
export const StyledTrack = styled(Track, {
  position: "relative",

  backgroundColor: "$grayLight",
  flexGrow: 1,
  borderRadius: 999,
  height: 7,
});
export const StyledRange = styled(Range, {
  position: "absolute",
  backgroundColor: "$accent",
  borderRadius: 999,
  height: "100%",
});
export const StyledThumb = styled(Thumb, {
  display: "block",
  width: 15,
  height: 15,
  backgroundColor: "$accent",

  border: "4px solid white",
  borderRadius: 10,

  cursor: "grab",

  "&:hover": {
    opacity: 0.8,
  },
  "&:focus": {
    outline: "none",
  },
});
