import { NextResponse } from "next/server";

function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/static") ||
    pathname.match(/\.(png|jpg|jpeg|gif|webp|css|js|ico|svg)$/)
  ) {
    return NextResponse.next();
  }
  if ((pathname === "/basket" || pathname === "/profile" || pathname === "/payment") && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export default middleware;
