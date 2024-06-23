"use client";
import { DigitInput } from "@/ui/components/Forms/Inputs/Digit/Digit";
import { Button } from "@/ui/components/Forms/Button/Button";
import { Card } from "@/ui/components/Cards/Card/Card";
import { useLogin } from "../../providers";

export const LoginForm = () => {
  const { actions } = useLogin();

  return (
    <Card radius="lg" className="flex flex-col gap-16 border shadow-none border-zinc-900 p-20 bg-zinc-950">
      <div className="text-center flex flex-col gap-5 ">
      <i className="fa fa-lock text-5xl"></i>
        <p className="text-5xl">Authentication code</p>
        <p className="text-zinc-200">Enter the verification code</p>
        <p className="text-zinc-400 text-sm">Your code expires in 60s</p>
      </div>
      <form onSubmit={actions.submit} className="flex gap-16 flex-col items-center" action="/services/verify">
        <div className="flex gap-3">
          <DigitInput name="digits" />
          <DigitInput name="digits" />
          <DigitInput name="digits" />
          <DigitInput name="digits" />
        </div>
        <input type="hidden" name="code" />
        <div className="flex flex-col w-full gap-2">
          <Button type="submit" size="md" className="w-full">
            Send Code
          </Button>
          <Button type="button" onClick={() => location.assign('/')} variant="link" size="md" className="w-full">
            You do not receive the code?
          </Button>
        </div>
      </form>
    </Card>
  )
}