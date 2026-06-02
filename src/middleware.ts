import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/rooms", "/tenants", "/payments", "/deposits", "/reports"];

export function middleware(request: NextRequest) {
  const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));
  const hasSession = request.cookies.has("sk_session");

  if (isProtected && !hasSession && process.env.NODE_ENV === "production") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/rooms/:path*", "/tenants/:path*", "/payments/:path*", "/deposits/:path*", "/reports/:path*"]
};
