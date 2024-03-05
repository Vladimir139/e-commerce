import React, { FC, useState } from "react";

import { Button } from "@/shared/ui/atoms";

import * as S from "./styles";
import { ShoppingCartCardProps } from "./types";

export const ShoppingCartCard: FC<ShoppingCartCardProps> = ({ product }) => {
  const [count, setCount] = useState(1);

  return (
    <S.Card>
      <S.LeftWrapper>
        <S.Photo src={product.images[0]} alt={product.title} fill />
        <S.WrapperInfo>
          <S.Title>{product.title}</S.Title>
          <S.Price>{product.price}$</S.Price>
        </S.WrapperInfo>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.WrapperCount>
          <Button radius="normal" theme="blue" size="normal" isBorderNone>
            Remove
          </Button>
          <Button
            radius="normal"
            size="normal"
            theme={count === 1 ? "grey" : "blue"}
            isBorderNone
            disabled={count === 1}
          >
            -
          </Button>
          <S.Count>1</S.Count>
          <Button radius="normal" size="normal" theme="blue" isBorderNone>
            +
          </Button>
        </S.WrapperCount>
      </S.RightWrapper>
    </S.Card>
  );
};
