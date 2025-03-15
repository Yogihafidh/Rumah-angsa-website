/* 
import { NextResponse } from "next/server";
export function middleware(request) {
    // Redirect url before response
    return NextResponse.redirect(new URL("/about", request.url));
    } 
    */

import { NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";
export const middleware = auth;

// export async function middleware(req) {
//   const session = await auth(); // auth functions as middleware
//   const { pathname } = req.nextUrl;

//   if (pathname === "/login" && session?.user) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   if (pathname.startsWith("/account") && !session?.user) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   if (pathname === "/cabins/thankyou" && !session?.user) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }

export const config = {
  matcher: ["/account"], // Setting route which middleware should run. Middleware only run in account route
};

// "/login", "/account/:path*", "/cabins/thankyou"
