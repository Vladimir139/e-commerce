import React, { FC, useEffect } from "react";

import { LoginButton, SwitchTheme } from "@/features";
import { IconCart, IconClose } from "@/shared/lib/icons";

import * as S from "./styles";
import { SidebarProps } from "./types";

export const Sidebar: FC<SidebarProps> = ({ isOpened, handleClose }) => {
  useEffect(() => {
    if (isOpened) {
      document.body.classList.add("overflow-hidden");

      return;
    }

    document.body.classList.remove("overflow-hidden");
  }, [isOpened]);

  return (
    <S.Overlay isOpened={isOpened}>
      <S.Wrapper isOpened={isOpened} onClick={handleClose}>
        <S.InnerWrap onClick={(e) => e.stopPropagation()}>
          <S.TopWrapper>
            <S.NavigationHeader>
              <S.Logo href="/">Navigation</S.Logo>
            </S.NavigationHeader>
            <S.CloseButton onClick={handleClose}>
              <IconClose />
            </S.CloseButton>
          </S.TopWrapper>
          <S.Navigation>
            <S.NavLink href="/" onClick={handleClose}>
              Home
            </S.NavLink>
            <S.NavLink href="/products" onClick={handleClose}>
              Store
            </S.NavLink>
            <S.NavLink href="/cart" onClick={handleClose}>
              Cart <IconCart />
            </S.NavLink>
          </S.Navigation>
          <S.WrapperLoginBtn>
            <S.SignInBtn href="/login">Sign in</S.SignInBtn>
          </S.WrapperLoginBtn>
          <S.WrapperSwitchThemeBtn>
            <SwitchTheme />
          </S.WrapperSwitchThemeBtn>
        </S.InnerWrap>
      </S.Wrapper>
    </S.Overlay>
  );
};
