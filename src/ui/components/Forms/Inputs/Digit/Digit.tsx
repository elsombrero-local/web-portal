"use client";
import { KeyboardEvent, useState } from "react";
import { DigitInputProps } from "./Digit.property";
import clsx from "clsx";

export const DigitInput = (props: DigitInputProps) => {
  const [value, setValue] = useState('');

  const filter = (e: KeyboardEvent<HTMLInputElement>) => {
    if(!isNaN(parseInt(e.key))) setValue(e.key);
    else if(e.key === 'Backspace') setValue('');
    props.onKeyDownCapture && props.onKeyDownCapture(e);
  }
  
  return (
    <input
      value={value}
      onChange={(e) => props.onChange && props.onChange(e)}
      onKeyDownCapture={filter}
      type="text"
      className={clsx(
        'border border-zinc-800 rounded-md bg-zinc-900',
        'text-4xl text-center',
        'p-3 w-[60px]',
        'focus-within:outline-none',
        props.className
      )}
      placeholder="0"
      {...props}
    />
  )
}