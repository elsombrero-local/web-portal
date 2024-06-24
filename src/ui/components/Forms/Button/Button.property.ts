import { ButtonHTMLAttributes } from "react";
import { Size, Theme, Variants } from "../../../types/themes";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
  size?: Size;
  theme?: Theme;
  radius?: Size;
}

export const variants = {
  size: {
    xs: 'p-1 px-4 text-xs',
    sm: 'p-2 px-4 text-sm',
    md: 'p-3 px-4 text-md',
    lg: '',
    xl: '',
  },
  variants: {
    default: {
      theme: {
        dark: '',
        light: '',
        primary: 'bg-blue-800 hover:enabled:bg-blue-900 active:enabled:bg-blue-950',
        secondary: '',
        warning: 'bg-yellow-600 hover:enabled:bg-yellow-800 active:enabled:bg-yellow-900',
        accent: '',
        danger: '',
        success: '',
      }
    },
    outline: {
      theme: {
        dark: '',
        light: '',
        primary: '',
        secondary: '',
        warning: '',
        accent: '',
        danger: '',
        success: '',
      }
    },
    link: {
      theme: {
        dark: '',
        light: '',
        primary: 'bg-transparent text-blue-800 hover:enabled:underline hover:enabled:text-blue-900 active:enabled:text-blue-950',
        secondary: '',
        warning: 'bg-transparent text-yellow-600 hover:enabled:underline hover:enabled:text-yellow-800 active:enabled:text-yellow-900',
        accent: '',
        danger: '',
        success: '',
      }
    }
  },
  radius: {
    xs: 'rounded-xs',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  }
}