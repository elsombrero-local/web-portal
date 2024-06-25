import { NextRequest, NextResponse } from "next/server";
import { Auth } from "../../../shared/lib/auth/auth";

export const revalidate = 0;

export const GET = async (req: NextRequest) => {
  try{
    const auth = await Auth();
    await auth.login();
    return NextResponse.json({message: 'Success'})
  }catch(e) {
    return NextResponse.json({message: 'Success'}, {status: 400})
  }
}