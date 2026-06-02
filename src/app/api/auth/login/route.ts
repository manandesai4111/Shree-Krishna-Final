import { NextResponse } from "next/server";
import { getDemoUser, loginSchema, signSession } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid email or password format." }, { status: 400 });
  }

  const { email, password } = parsed.data;

  if (email !== "owner@shreekrishna.test" || password !== "password123") {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const user = getDemoUser();
  const token = signSession(user);
  const response = NextResponse.json({ user });

  response.cookies.set("sk_session", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });

  return response;
}
