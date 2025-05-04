import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // ✅ Make policy pages public
  publicRoutes: ['/', '/policy/:slug'], // You can also use `/policy(.*)` if using regex style
  afterAuth(auth, req) {
    // ✅ Allow bots like Googlebot without redirection
    const userAgent = req.headers.get("user-agent") || "";
    const isBot = /Googlebot|Bingbot|Slurp|DuckDuckBot|YandexBot|facebookexternalhit/i.test(userAgent);
    const pathname = req.nextUrl.pathname;

    if (isBot && pathname.startsWith("/policy")) {
      return NextResponse.next(); // Let Googlebot through
    }

    // ✅ Keep your existing redirects for users
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";
      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection);
    }

    if (auth.userId && !auth.orgId && pathname !== "/select-org") {
      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};