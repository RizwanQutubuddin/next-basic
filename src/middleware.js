import { NextResponse } from "next/server";
export function middleware(request) {
  const { pathname } = request.nextUrl;
  //======== all route move to login page ========
  //move to login start
  //   if (request.nextUrl.pathname !== "/login") {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }
  //======== move to login end========

  //======== specific route move to login page ========
  //move to login start from about
  //return NextResponse.redirect(new URL("/login", request.url));
  //======== move to login from about end ========

}

export const config = {
  // use only one below the matcher
  // matcher: "/about", // only about route will move
  matcher: "/about/:path*", // it will move all route inside about also
  // matcher: ["/about/:path*", "/study/:path*"],
};
