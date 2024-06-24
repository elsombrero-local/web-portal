import { LoginWrapper } from "./components/Wrapper/Wrapper";
import { GetEmail } from "./providers/server/email/email";

export default async function LoginPage(){
  const email = GetEmail();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <LoginWrapper email={email} />
    </div>
  )
}