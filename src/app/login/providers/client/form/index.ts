import { useRef } from "react";
import { DigitKeyUp } from "./actions/digit-keyup"
import { FormSubmit } from "./actions/form-submit"

export const useLoginForm = () => {
  const form = useRef<HTMLFormElement>(null);

  return {
    actions: { DigitKeyUp, FormSubmit, },
    refs: { form },
    states: {}
  }
}