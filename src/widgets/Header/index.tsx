import { media } from "../../shared/lib/styles";
import React, { FC } from "react";
import useMedia from "use-media";
import { HeaderDesktop, HeaderMobile } from "./media";

export const Header:FC = () => {
  const isMobile = useMedia(media.toWideTablet, false);

  return <div>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</div>;
};

