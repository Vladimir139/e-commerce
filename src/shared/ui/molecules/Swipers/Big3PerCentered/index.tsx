"use client";

import "swiper/css";
import "swiper/css/navigation";

import React, { FC } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IconRightArrow } from "@/shared/lib/icons";

import * as S from "./styles";
import { SwiperProps } from "./types";

export const SwiperBigCentered: FC<SwiperProps> = ({ slides, uniqueId, is4PerViewAuto }) => (
  <S.Root>
    <Swiper
      navigation={{
        prevEl: `.prev-${uniqueId}`,
        nextEl: `.next-${uniqueId}`,
      }}
      modules={[Navigation]}
      spaceBetween={30}
      centeredSlides={!is4PerViewAuto}
      slidesPerView="auto"
      initialSlide={is4PerViewAuto ? 0 : 1}
    >
      {slides.map((slide, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>

    <S.RightNavigation className={`next-${uniqueId}`}>
      <IconRightArrow />
    </S.RightNavigation>
    <S.LeftNavigation className={`prev-${uniqueId}`}>
      <IconRightArrow />
    </S.LeftNavigation>
  </S.Root>
);
