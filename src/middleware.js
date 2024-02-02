import { NextResponse } from "next/server";

export async function middleware(request) {
  const logintoken = request.cookies.get("token")?.value || "";

  if (
    request.nextUrl.pathname == "/api/login" ||
    request.nextUrl.pathname === "/api/users" ||
    request.nextUrl.pathname.startsWith("https://www.googleapis.com/oauth2/v3/userinfo")
  ) {
    return;
  }

  const userNotLogin =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/SignUp";

  if (userNotLogin) {
    if (logintoken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    if (!logintoken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/addTask",
    "/login",
    "/SignUp",
    "/show-tasks",
    "/Theme",
    "/profile/:path*",
    "/api/:path*",
  ],
};
