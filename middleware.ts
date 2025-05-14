import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // ✅ Make public routes accessible to bots and unauthenticated users
  publicRoutes: ['/', '/policy/:slug', '/blogs', '/contact', '/pages/about-us', '/sign-in', '/sign-up'],

  afterAuth(auth, req) {
    const userAgent = req.headers.get("user-agent") || "";
    const isBot = /Googlebot|Bingbot|Slurp|DuckDuckBot|YandexBot|facebookexternalhit/i.test(userAgent);
    const pathname = req.nextUrl.pathname;

    // ✅ Let bots access public routes (like homepage, blogs, etc.)
    if (isBot && auth.isPublicRoute) {
      return NextResponse.next();
    }

    // ✅ Redirect authenticated users to their organization
    if (auth.userId && auth.isPublicRoute) {
      const path = auth.orgId ? `/organization/${auth.orgId}` : "/select-org";
      return NextResponse.redirect(new URL(path, req.url));
    }

    // ✅ Force org selection if no org is active
    if (auth.userId && !auth.orgId && pathname !== "/select-org") {
      return NextResponse.redirect(new URL("/select-org", req.url));
    }

    return NextResponse.next();
  },
});

export const config = {
  // ✅ Match all routes except static files and Next.js internals
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};