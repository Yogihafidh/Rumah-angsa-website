/* 
import { NextResponse } from "next/server";
export function middleware(request) {
    // Redirect url before response
    return NextResponse.redirect(new URL("/about", request.url));
    } 
    */

// // Each request that matches the specified pattern will be processed by the auth function.
// export const middleware = auth;

// // Setting route which middleware should run. Middleware only run in account route
// export const config = {
//   matcher: ["/account/:path"],
// };

import { NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";

export async function middleware(req) {
  // Get session
  const session = await auth();

  // Get pathname from nextUrl
  const { pathname } = req.nextUrl;

  // Redirect to home page if user logged in and trying to access login page
  if (pathname === "/login" && session?.user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Redirect to login page if user not logged in and trying to access account route
  if (pathname.startsWith("/account") && !session?.user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Redirect to login page if user not logged in and trying to access thank you page
  if (pathname === "/cabins/thankyou" && !session?.user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Redirect to home page if user logged in and trying to access login page 
  return NextResponse.next();
}
