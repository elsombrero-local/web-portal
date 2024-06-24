"use client";
import { DigitInput } from "@/ui/components/Forms/Inputs/Digit/Digit";
import { Button } from "@/ui/components/Forms/Button/Button";
import { useLoginForm } from "../../providers";

export const LoginForm = () => {
  const { actions, refs } = useLoginForm();

  return (
    <>
      <div className="text-center flex flex-col gap-16">
        <i className="lni lni-unlock text-5xl"></i>
        <div className="flex flex-col gap-3">
          <p className="text-5xl">Authentication code</p>
          <p className="text-zinc-200">Enter the verification code</p>
          <p className="text-zinc-400 text-sm">Your code expires in 60s</p>
        </div>
      </div>
      <form ref={refs.form} onSubmit={actions.FormSubmit} className="flex gap-16 flex-col items-center" action="/services/verify">
        <div className="flex gap-3">
          {Array.from(Array(4).keys())
          .map((k) => (
            <DigitInput
              key={`digit-${k}`}
              name="digits"
              onKeyDown={actions.DigitKeyUp(k, refs.form)}
            />
          ))}
        </div>
        <input type="hidden" name="code" />
        <div className="flex flex-col w-full gap-2">
          <Button theme="warning" type="submit" size="md" className="w-full">
            Send Code
          </Button>
          <Button theme="warning" type="button" onClick={() => location.assign('/')} variant="link" size="md" className="w-full">
            You do not receive the code?
          </Button>
        </div>
      </form>
    </>
  )
}