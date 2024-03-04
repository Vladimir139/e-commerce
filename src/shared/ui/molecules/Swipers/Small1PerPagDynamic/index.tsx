import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { FC } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IconRightArrow } from "@/shared/lib/icons";

import * as S from "./styles";
import { Small1PerPagDynamicProps } from "./types";

export const Small1PerPagDynamic: FC<Small1PerPagDynamicProps> = ({ slides, uniqueId }) => (
  <S.Root>
    <Swiper
      navigation={{
        prevEl: `.prev-${uniqueId}`,
        nextEl: `.next-${uniqueId}`,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
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
