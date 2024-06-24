"use client";
import Link from "next/link";
import { Card } from "../../../../ui/components/Cards/Card/Card";
import { Button } from "../../../../ui/components/Forms/Button/Button";
import { LoginForm } from "../Form/Form";
import { useLoginWrapper } from "../../providers";

export const revalidate = 0;

export const LoginWrapper = ({ email }: {email: string | undefined}) => {
  const { states, actions, } = useLoginWrapper();

  return (
    <Card radius="lg" className="flex flex-col gap-16 border shadow-none border-zinc-900 px-20 py-24 bg-zinc-950 max-w-[700px]">
      {states.CanLogin.get && <LoginForm />}
      {!states.CanLogin.get && <div className="flex flex-col gap-14 text-center">
        <div className="flex flex-col gap-3">
          <p className="text-5xl">
            Welcome back
          </p>
          <p>
            If your mail address is not&nbsp;
            <strong>{email}</strong>
            &nbsp;but still want to connect,
            contact an administrator.
          </p>
        </div>
        <i className="lni lni-lock text-8xl"></i>
        <p>
          An email containing your authentication code will be
          sent to you after your connection request.
        </p>
        <div className="flex flex-col gap-3">
          <Button theme="warning" disabled={states.Pending.get} onClick={actions.RequestCode}>
            Ask my authentication code
          </Button>
          <Link href="mailto:nirilala.rakotondrasoa@elsombrero.pro">
            <Button variant="link" theme="warning" className="w-full">
              Contact and administrator
            </Button>
          </Link>
        </div>
      </div>}
      
    </Card>
  )
}