import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server";
import { Config } from "@/config/config";

export const GET = (req: NextRequest) => {
  const url = req.nextUrl.clone(); 
  const store = cookies();
  store.delete(Config.SessionKey);
  url.pathname = '/login';
  return NextResponse.redirect(url);
}