import React, { FC } from "react";

import { IconCategories, IconRange } from "@/shared/lib/icons";
import { Input } from "@/shared/ui/atoms";

import * as S from "./styles";

export const FilterSidebar: FC = () => (
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
    <Input stretch isRequired placeholder="Type a product." children="Search Product With Name" />
    <S.Hr />
    {/* <PriceRange /> */}
    <S.Title>
      <IconRange /> Price Range:
    </S.Title>
  </S.Sidebar>
);
