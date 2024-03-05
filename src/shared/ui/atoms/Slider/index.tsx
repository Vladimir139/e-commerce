import React, { FC } from "react";

import * as S from "./styles";
import { SliderProps } from "./types";

export const Slider: FC<SliderProps> = ({ defaultValue, onChange, value, max, min }) => (
  <S.StyledRoot
    defaultValue={defaultValue}
    onValueChange={onChange}
    max={max}
    step={min}
    value={value}
  >
    <S.StyledTrack>
      <S.StyledRange />
    </S.StyledTrack>
    <S.StyledThumb aria-label="Volume" />
    <S.StyledThumb aria-label="Volume" />
  </S.StyledRoot>
);
