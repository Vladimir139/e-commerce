import React, { FC } from "react";

import * as S from "./styles";
import { ContainerProps } from "./types";

export const Container: FC<ContainerProps> = ({ children, isBig }) => (
  <S.Wrapper isBig={isBig}>{children}</S.Wrapper>
);
