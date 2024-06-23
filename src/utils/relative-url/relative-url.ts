import { NextRequest } from "next/server";

export const RelativeUrl = (req: NextRequest) => {
  const url = req.nextUrl.clone()
  url.host = req.headers.get('host') || 'localhost';
  return url;
}