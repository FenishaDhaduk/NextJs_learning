
import { NextResponse } from "next/server";

export default function middleware(request) {
  const logintoken =  request.cookies.get("logintoken")?.value || ""

  console.log(logintoken,"logintoken")

  const userNotLogin =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/SignUp";

  if (userNotLogin) {
    if (logintoken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    if (!logintoken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/addTask",
    "/login",
    "/SignUp",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};
