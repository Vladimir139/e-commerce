import React, { FC } from "react";

import * as S from "./styles";
import { CardCategoryProps } from "./types";

export const CardCategory: FC<CardCategoryProps> = ({ category }) => (
  <S.CardCategoryWrapper style={{ backgroundImage: `url(${category.image})` }}>
    <S.InnerWrapper>
      <S.Title>Category:</S.Title>
      <S.CategoryName>{category.name}</S.CategoryName>
    </S.InnerWrapper>
    <S.LinkGoToStore href="/store">Go to store</S.LinkGoToStore>
  </S.CardCategoryWrapper>
);
