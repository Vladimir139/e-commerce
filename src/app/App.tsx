import { FC } from "react";

import { setupGlobalStyles } from "@/shared/lib/styles";
import { Footer, Header } from "@/widgets";

import * as S from "./style";
import { AppProps } from "./types";

export const App: FC<AppProps> = ({ children }) => {
  setupGlobalStyles();

  return (
    <S.Wrapper>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  );
};
