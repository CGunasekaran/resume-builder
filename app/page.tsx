"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

// Check if Clerk keys are properly configured (server-safe)
const getClerkKeysStatus = (): boolean => {
  return !!(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_') &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('YOUR_') &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('example'));
};

function AuthenticatedHome() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        router.push("/dashboard");
      } else {
        router.push("/sign-in");
      }
    }
  }, [router, isSignedIn, isLoaded]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="relative text-center">
        {/* Glowing Card Effect */}
        <div className="absolute -inset-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25"></div>

        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
          {/* Logo */}
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>

          <div className="relative">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4">
              <div className="absolute inset-2 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-full"></div>
            </div>
            <p className="text-gray-300 font-medium">
              Checking authentication...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UnauthenticatedHome() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to dashboard when no auth is configured
    router.push("/dashboard");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="relative text-center">
        {/* Glowing Card Effect */}
        <div className="absolute -inset-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25"></div>

        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
          {/* Logo */}
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>

          <div className="relative">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4">
              <div className="absolute inset-2 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-full"></div>
            </div>
            <p className="text-gray-300 font-medium">
              Loading...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [hasValidKeys, setHasValidKeys] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setHasValidKeys(getClerkKeysStatus());
  }, []);

  // Show loading state during hydration to prevent mismatch
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

        <div className="relative text-center">
          {/* Glowing Card Effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25"></div>

          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            {/* Logo */}
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            <div className="relative">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4">
                <div className="absolute inset-2 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-full"></div>
              </div>
              <p className="text-gray-300 font-medium">
                Loading...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Use the appropriate component based on Clerk configuration
  if (hasValidKeys) {
    return <AuthenticatedHome />;
  } else {
    return <UnauthenticatedHome />;
  }
}
