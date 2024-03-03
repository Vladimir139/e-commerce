import { media } from "../../shared/lib/styles";
import React, { FC } from "react";
import useMedia from "use-media";
import { FooterDesktop, FooterMobile } from "./media";

export const Footer:FC = () => {
  const isMobile = useMedia(media.toWideTablet, false);

  return <div>{isMobile ? <FooterMobile /> : <FooterDesktop />}</div>;
};

