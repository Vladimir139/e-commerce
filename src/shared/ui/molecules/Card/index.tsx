import React, { FC } from "react";

import { IconCart, IconMore } from "@/shared/lib/icons";
import { Button } from "@/shared/ui/atoms";
import { Small1PerPagDynamic } from "@/shared/ui/molecules";

import * as S from "./styles";
import { CardProps } from "./types";

export const Card: FC<CardProps> = ({ type, product }) => {
  if (type === "preview") {
    return (
      <S.Card size={type}>
        <Small1PerPagDynamic
          slides={product.images.map((img) => (
            <S.SlideImg key={img} src={img} fill alt="" />
          ))}
          uniqueId={product.id}
        />
        <S.InnerWrapper>
          <S.Title>{product.title}</S.Title>
          <S.Description>{`${product.description.slice(0, 248)}...`}</S.Description>
          <S.BottomWrapper size={type}>
            <S.Price>{product.price}$</S.Price>
            <S.LinkLearnMore href={`/product/${product.id}`}>Learn More Now!</S.LinkLearnMore>
          </S.BottomWrapper>
        </S.InnerWrapper>
      </S.Card>
    );
  }

  return (
    <S.Card size={type}>
      <Small1PerPagDynamic
        slides={product.images.map((img) => (
          <S.SlideImg key={img} src={img} fill alt="" />
        ))}
        uniqueId={product.id}
      />
      <S.InnerWrapper>
        <S.Title>{`${product.title.slice(0, 26)}...`}</S.Title>
        {product.category.name && <S.Category>Category: {product.category.name}</S.Category>}
        <S.Description margin={type}>{`${product.description.slice(0, 118)}...`}</S.Description>
        <S.Price>{product.price}$</S.Price>
        <S.BottomWrapper size={type}>
          <S.LinkMore href={`/product/${product.id}`}>
            <IconMore />
          </S.LinkMore>
          <Button theme="blue" radius="medium">
            <IconCart isWhite /> Add to cart
          </Button>
        </S.BottomWrapper>
      </S.InnerWrapper>
    </S.Card>
  );
};
