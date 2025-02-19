import { FormEvent } from "react";

export const FormSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget as HTMLFormElement;
  const digits = Array.from((form.elements.namedItem('digits') as unknown) as HTMLInputElement[]);
  const code = digits.map((d) => d.value).join('');
  (form.elements.namedItem('code') as HTMLInputElement).value = code;
  location.assign(`/services/verify?code=${code}`)
}