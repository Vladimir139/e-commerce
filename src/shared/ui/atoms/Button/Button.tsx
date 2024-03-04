import { FC } from "react";

import * as S from "./style";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({
  children,
  textSize = "small",
  size,
  type,
  theme,
  stretch,
  radius,
  onClick,
  disabled,
  isUppercase,
  ...props
}) => (
  <S.Button
    {...props}
    textSize={textSize}
    size={size}
    type={type}
    theme={theme}
    stretch={stretch}
    radius={radius}
    onClick={onClick}
    disabled={disabled}
    isUppercase={isUppercase}
  >
    {children}
  </S.Button>
);
