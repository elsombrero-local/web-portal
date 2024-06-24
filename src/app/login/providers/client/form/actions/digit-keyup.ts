import { KeyboardEvent as _KeyboardEvent, RefObject } from "react"

export const DigitKeyUp = (index: number, parent: RefObject<HTMLFormElement>) => {
  return (e: _KeyboardEvent<HTMLInputElement>) => {
    const form = parent.current;
    
    if(!isNaN(parseInt(e.key)))
      (form?.elements.item(index + 1) as HTMLInputElement)?.focus();
    else if(e.key === 'Backspace') 
      (form?.elements.item(index - 1) as HTMLInputElement)?.focus();
  }
}
