import { FormEvent } from "react";

export const submit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget as HTMLFormElement;
  const digits = Array.from((form.elements.namedItem('digits') as unknown) as HTMLInputElement[]);
  const code = digits.map((d) => d.value).join('');
  (form.elements.namedItem('code') as HTMLInputElement).value = code;
  digits.forEach(d => d.remove());
  form.submit();
}