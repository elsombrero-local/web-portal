import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers";
import { Config } from "@/config/config";
import { Auth } from "@/shared/lib/auth/auth";

export const GET = async (req: NextRequest) => {
  const auth = await Auth();
  const url = req.nextUrl.clone();
  
  const store = cookies();
  await auth.initialize();

  const code = req.nextUrl.searchParams.get('code');
  const session = await auth.verify(code || '');
  
  if(session) {
    store.set(Config.SessionKey, session);
    url.pathname = '/'
    url.searchParams.delete('code');
    return NextResponse.redirect(url);
  }
  url.pathname = '/login'
  return NextResponse.redirect(url);
}