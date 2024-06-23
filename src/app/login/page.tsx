import { Auth } from "@/shared/lib/auth/auth"
import { LoginForm } from "./components/Form/Form";

export default async function LoginPage({searchParams}: {searchParams: {logout: string}}){
  if(!searchParams.logout) {
    const auth = await Auth();
    await auth.login();
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <LoginForm />
    </div>
  )
}