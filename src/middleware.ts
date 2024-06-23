import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Config } from "./config/config";

export const revalidate = 1;

export default async function Middleware(req: NextRequest) {
  const store = cookies();
  const url = req.nextUrl.clone()
  const session = store.get(Config.SessionKey)?.value;
  if(!session && !(url.pathname.includes('/login') || url.pathname.includes('/services/verify'))) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  } else if(session && (url.pathname.includes('/login') || url.pathname.includes('/services/verify'))) {
    url.pathname = '/'
    return NextResponse.redirect(url);
  } else if(session) {
    try{
      url.pathname = '/services/session';
      url.searchParams.set('id', session);
      const res = await fetch(url, {
        credentials: 'same-origin',
        next: { revalidate: 1 }
      });
      if(res.status !== 200) throw new Error('Unauthorized');
    }catch(e) {
      url.searchParams.delete('id');
      url.pathname = '/services/logout';
      return NextResponse.redirect(url);
    }
  }
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/services/verify',
  ]
}