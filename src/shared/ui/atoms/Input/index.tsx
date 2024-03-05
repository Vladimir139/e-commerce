import React, { FC } from "react";

import * as S from "./styles";
import { InputProps } from "./types";

export const Input: FC<InputProps> = ({
  children,
  name,
  size,
  radius,
  type,
  value,
  defaultValue,
  onChange,
  theme,
  placeholder,
  isRequired,
}) => (
  <>
    <S.Text>
      {children}
      {isRequired && <S.Required style={{ color: "red" }}> *</S.Required>}
    </S.Text>
    <S.Label radius={radius}>
      <S.Input
        theme={theme}
        size={size}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        type={type}
        defaultValue={defaultValue}
      />
    </S.Label>
  </>
);
