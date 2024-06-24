"use client";
import clsx from "clsx";
import { InputProps, variants } from "./Input.property";

export const Input = ({inputSize, radius, inputClassName, className, left, right, ...props}: InputProps) => {
  return (
    <div className={clsx(
      'flex items-center gap-3 border border-zinc-800',
      variants.radius[radius || 'md'],
      variants.size[inputSize || 'md'],
      className,
    )}>
      {left && left}
      <input
        className={clsx(
          'bg-transparent',
          'focus-within:outline-none',
          inputClassName,
        )}
        {...props}
      />
      {right && right}
    </div>
  )
}