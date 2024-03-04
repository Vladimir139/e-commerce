import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode | string;
  type?: "submit" | "button";
  radius?: "none" | "normal" | "medium";
  size?: "small" | "normal" | "medium" | "big";
  theme?: "green" | "blue" | "inherit" | "turquoise" | "light";
  stretch?: boolean;
  onClick?: () => void;
  isUppercase?: boolean;
  textSize?: "default" | "small" | "medium";
  disabled?: boolean;
}
