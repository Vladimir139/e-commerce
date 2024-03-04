import { ReactNode } from "react";

export interface SwiperProps {
  slides: ReactNode[] | string[];
  uniqueId?: string | number;
  is4PerViewAuto?: boolean;
}
