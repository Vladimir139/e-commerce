import React, { FC, useState } from "react";

import { IconCategories, IconRange } from "@/shared/lib/icons";
import { Input, Slider } from "@/shared/ui/atoms";

import * as S from "./styles";

export const FilterSidebar: FC = () => {
  const [valueRange, setValueRange] = useState([1, 500]);
  const onChangeRange = (value: number[]): void => {
    setValueRange(value);
  };

  return (
    <S.Sidebar>
      <S.Title>
        <IconCategories /> Categories
      </S.Title>
      <S.Hr />
      <S.ListFilters>
        <S.FilterItem isActive>All</S.FilterItem>
        <S.FilterItem>asdfsdf</S.FilterItem>
      </S.ListFilters>
      {/* <Search /> */}
      <S.Hr />
      <Input stretch isRequired placeholder="Type a product.">
        Search Product With Name
      </Input>
      <S.Hr />
      <S.Title>
        <IconRange /> Price Range:
      </S.Title>
      <S.WrapperSlider>
        <Slider
          value={valueRange}
          defaultValue={valueRange}
          onChange={onChangeRange}
          min={1}
          max={500}
        />
      </S.WrapperSlider>
    </S.Sidebar>
  );
};
