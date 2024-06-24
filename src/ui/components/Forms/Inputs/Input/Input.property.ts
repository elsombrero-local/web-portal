import React, { InputHTMLAttributes } from "react";
import { Size } from "../../../../types/themes";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: Size,
  radius?: Size,
  inputClassName?: string,
  left?: React.ReactNode,
  right?: React.ReactNode,
}

export const variants = {
  size: {
    xs: 'p-1 px-4 text-xs',
    sm: 'p-2 px-4 text-sm',
    md: 'p-3 px-4 text-md',
    lg: 'p-5 px-6 text-lg',
    xl: 'p-6 px-8 text-xl',
  },
  radius: {
    xs: 'rounded-xs',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  }
}