"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleAuth = async () => {
      try {
        if (isLoaded) {
          if (isSignedIn) {
            router.push("/dashboard");
          } else {
            router.push("/sign-in");
          }
        }
      } catch (err) {
        console.error("Authentication error:", err);
        setError("Authentication configuration error");
        router.push("/auth-error");
      }
    };

    handleAuth();
  }, [router, isSignedIn, isLoaded]);

  // If there's an error, show it
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-white text-center">
          <p className="text-xl mb-4">Authentication Error</p>
          <p className="text-gray-300">Redirecting to setup page...</p>
        </div>
      </div>
    );
  }

  // Show loading state while redirecting
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
              Redirecting to sign in...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
