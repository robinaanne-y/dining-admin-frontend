import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(Request: NextRequest) {
  const token = Request.cookies.get("token");

  if (!token && Request.nextUrl.pathname.startsWith("/admin/dashboard")) {
    return NextResponse.redirect(new URL("/admin/login", Request.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};