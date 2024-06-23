import { NextRequest, NextResponse } from "next/server";
import { Auth } from "@/shared/lib/auth/auth";

export const GET = async (req: NextRequest) => {
  const auth = await Auth();
  const query = req.nextUrl.searchParams;
  const session = query.get('id');
  if(await auth.isLogged(session || '')) {
    return NextResponse.json({message: 'Authenticated!'})
  }
  return NextResponse.json({message: 'Error'}, { status: 401 })
}
