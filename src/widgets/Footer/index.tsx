import React, { FC } from "react";

import { IconGitHub } from "@/shared/lib/icons";

import * as S from "./styles";

export const Footer: FC = () => (
  <S.Footer>
    <S.LinkGitHub href="https://github.com/Vladimir139">
      <IconGitHub />
    </S.LinkGitHub>
  </S.Footer>
);
