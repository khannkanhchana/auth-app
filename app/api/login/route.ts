import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const loginData = await req.json();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (!res.ok) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const data = await res.json();

    // Set token to cookie http only
    const cookieStore = await cookies();
    cookieStore.set("better-auth.session_data", data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 1,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log('errr login', error)
  }
}
