import React, { FC } from "react";

import { LoginButton, SwitchTheme } from "@/features";
import { IconCart } from "@/shared/lib/icons";

import * as S from "./styles";

export const HeaderDesktop: FC = () => (
  <S.Header>
    <S.Logo href="/">E-commerce</S.Logo>
    <S.Nav>
      <S.NavItem href="/">Home</S.NavItem>
      <S.NavItem href="/products">Store</S.NavItem>
      <S.NavItem href="/cart">
        Cart <IconCart />
      </S.NavItem>
    </S.Nav>
    <S.UserActions>
      <LoginButton />
      <SwitchTheme />
    </S.UserActions>
  </S.Header>
);
