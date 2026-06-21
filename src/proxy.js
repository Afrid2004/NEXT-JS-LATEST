import { NextResponse } from "next/server";

// force redirect to home page
export function proxy(request) {
  const { pathname } = request.nextUrl;
  // return NextResponse.redirect(new URL("/home", request.url));
  if (!pathname.startsWith("/api/feedback")) {
    return NextResponse.json({
      status: 404,
      message: "No route found!",
    });
  }

  return NextResponse.next();
}

// when user try to go about/* path
export const config = {
  matcher: "/api/:path*",
};
