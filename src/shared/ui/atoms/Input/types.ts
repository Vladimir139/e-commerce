import { ChangeEvent, ReactNode } from "react";

export interface InputProps {
  children?: ReactNode | string;
  placeholder?: string;
  name?: string;
  type?:
    | "text"
    | "tel"
    | "password"
    | "checkbox"
    | "email"
    | "number"
    | "radio"
    | "search"
    | "date";
  size?: "small" | "medium";
  radius?: "small" | "medium";
  theme?: "default";
  defaultValue?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
}
