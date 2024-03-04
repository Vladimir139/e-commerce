import React, { FC, useState } from "react";

import { Burger } from "@/shared/ui/atoms";
import { Sidebar } from "@/shared/ui/templates";

import * as S from "./styles";

export const HeaderMobile: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <S.HeaderMobileWrapper>
        <S.Logo href="/">E-commerce</S.Logo>
        <Burger isOpened={isOpened} onClick={() => setIsOpened((prev) => !prev)} theme="dark" />
      </S.HeaderMobileWrapper>
      <Sidebar isOpened={isOpened} handleClose={() => setIsOpened(false)} />
    </>
  );
};
