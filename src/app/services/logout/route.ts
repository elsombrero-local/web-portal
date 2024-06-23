import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server";
import { Config } from "@/config/config";
import { RelativeUrl } from "../../../utils/relative-url/relative-url";

export const GET = (req: NextRequest) => {
  const url = RelativeUrl(req);
  const store = cookies();
  store.delete(Config.SessionKey);
  url.pathname = '/login';
  return NextResponse.redirect(url);
}