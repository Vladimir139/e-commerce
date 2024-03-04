import React, { FC } from "react";

import * as S from "./styles";
import { BurgerProps } from "./types";

export const Burger: FC<BurgerProps> = ({ onClick, isOpened }) => (
  <S.Burger onClick={onClick} isOpened={isOpened}>
    <S.MiddleLine isOpened={isOpened} />
  </S.Burger>
);
