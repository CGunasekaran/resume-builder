"use client";

import Link from "next/link";

export default function AuthError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="relative max-w-md w-full">
        {/* Glowing Card Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-25"></div>

        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 space-y-8">
          <div className="text-center">
            {/* Logo/Brand */}
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Authentication Setup Required
            </h2>
            <p className="mt-3 text-gray-300">
              Clerk authentication keys need to be configured
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-2">
                Setup Instructions:
              </h3>
              <ol className="text-gray-300 text-sm space-y-2 list-decimal list-inside">
                <li>
                  Sign up at <span className="text-purple-400">clerk.com</span>
                </li>
                <li>Create a new application</li>
                <li>Copy your publishable and secret keys</li>
                <li>
                  Update the{" "}
                  <span className="font-mono bg-white/10 px-2 py-1 rounded">
                    .env.local
                  </span>{" "}
                  file
                </li>
                <li>Restart the development server</li>
              </ol>
            </div>

            <div className="text-center">
              <Link
                href="/AUTHENTICATION_SETUP.md"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                View Setup Guide
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-xs">
                The app will work normally once Clerk is configured
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
