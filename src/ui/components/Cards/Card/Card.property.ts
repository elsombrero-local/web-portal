import { HTMLAttributes } from "react";
import { Size } from "../../../types/themes";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  shadow?: Size,
  radius?: Size,
}

export const variants = {
  shadow: {
    xs: 'shadow-xs',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  },
  radius: {
    xs: 'rounded-xs',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  }
}
