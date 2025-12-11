# Clerk Authentication Setup

This application is properly configured for [Clerk](https://clerk.com) authentication using the latest Next.js App Router approach.

## Quick Setup

1. **Create a Clerk account** at [clerk.com](https://clerk.com)

2. **Create a new application** in your Clerk Dashboard

3. **Get your API keys** from the [API Keys page](https://dashboard.clerk.com/last-active?path=api-keys)

4. **Update environment variables** in `.env.local`:
   ```bash
   # Replace with your actual keys
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
   CLERK_SECRET_KEY=sk_test_your_secret_key_here
   ```

5. **Restart the development server**:
   ```bash
   npm run dev
   ```

## Current Implementation

✅ **Correct App Router Setup**:
- Uses `clerkMiddleware()` in `proxy.ts` (replaces deprecated middleware.ts)
- `<ClerkProvider>` wraps the app in `app/layout.tsx`
- Protected routes: `/dashboard`, `/builder`
- Sign-in page: `/sign-in`
- Sign-up page: `/sign-up`

✅ **Features**:
- Modern glassmorphism UI design
- Mobile responsive authentication pages
- Route protection for dashboard and builder
- Automatic redirects after sign-in/sign-up

## Development Mode

The application works without Clerk keys configured:
- All pages are accessible
- Authentication features are disabled
- No runtime errors

When you add valid Clerk keys, authentication will be automatically enabled.

## Learn More

- [Clerk Next.js Documentation](https://clerk.com/docs/quickstarts/nextjs)
- [Next.js App Router](https://nextjs.org/docs/app)