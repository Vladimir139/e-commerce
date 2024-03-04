import { ProductProps } from "@/shared/lib/types/Product";

export interface CardProps {
  type: "preview" | "store";
  product: ProductProps;
}
