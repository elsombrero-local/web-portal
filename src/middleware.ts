import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Config } from "./config/config";
import { RelativeUrl } from "./utils/relative-url/relative-url";
import { WebPortalClient } from "./api";

export const revalidate = 0;

export default async function Middleware(req: NextRequest) {
  const store = cookies();
  const url = RelativeUrl(req);
  const session = store.get(Config.SessionKey)?.value;
  if(!session && !(url.pathname.includes('/login') || url.pathname.includes('/services/verify'))) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  } else if(session && (url.pathname.includes('/login') || url.pathname.includes('/services/verify'))) {
    url.pathname = '/'
    return NextResponse.redirect(url);
  } else if(session) {
    try{
      await WebPortalClient.get(`${url.origin}/services/session`, {
        params: {
          id: session
        },
      })
    }catch(e) {
      url.searchParams.delete('id');
      url.pathname = '/services/logout';
      return NextResponse.redirect(url);
    }
  }
}

export const config = {
  matcher: [
    '/((?!services|_next/static|_next/image|favicon.ico).*)'
  ]
}