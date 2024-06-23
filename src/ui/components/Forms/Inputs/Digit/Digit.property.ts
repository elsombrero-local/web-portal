import { InputHTMLAttributes } from "react";

export interface DigitInputProps extends InputHTMLAttributes<HTMLInputElement> {
  output?: string;
}