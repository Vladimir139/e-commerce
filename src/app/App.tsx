import { FC } from "react";

import { setupGlobalStyles } from "@/shared/lib/styles";

import * as S from "./style";
import { AppProps } from "./types";
import { Footer, Header } from "@/widgets";

export const App: FC<AppProps> = ({ children }) => {
  setupGlobalStyles();

  return (
    <>
      <Header />
      <S.Main>
        {children}
      </S.Main>
      <Footer />
    </>
  )
};
