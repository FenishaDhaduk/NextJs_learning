import { NextResponse } from "next/server";

export async function middleware(request) {
  const logintoken = request.cookies.get("token")?.value || "";


  if (
    request.nextUrl.pathname == "/api/login" ||
    request.nextUrl.pathname === "/api/users"
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
      // if (request.nextUrl.pathname.startsWith("/api")) {
      //   return NextResponse.json(
      //     {
      //       message: "Access Denied !!",
      //       success: false,
      //     },
      //     { status: 400 }
      //   );
      // }
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
