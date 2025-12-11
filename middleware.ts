import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Check if Clerk keys are properly configured
const hasValidClerkKeys = 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_') &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('example') &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('your_');

export default async function middleware(req: NextRequest) {
  // If Clerk keys are not configured, allow all routes
  if (!hasValidClerkKeys) {
    return NextResponse.next();
  }

  // Only use Clerk middleware when keys are valid
  try {
    const { clerkMiddleware, createRouteMatcher } = await import("@clerk/nextjs/server");
    
    const isProtectedRoute = createRouteMatcher([
      "/dashboard(.*)",
      "/builder(.*)",
      "/templates(.*)",
    ]);

    return clerkMiddleware(async (auth, request) => {
      try {
        if (isProtectedRoute(request)) {
          await auth.protect();
        }
      } catch (error) {
        // If there's an authentication error, allow the request to continue
        console.warn("Authentication error:", error);
        return NextResponse.next();
      }
    })(req);
  } catch (error) {
    // If Clerk import fails, allow the request to continue
    console.warn("Clerk middleware error:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
