import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ConditionalClerkProvider } from "@/components/auth/ConditionalClerkProvider";
import "./globals.css";

// Check if Clerk keys are properly configured
const hasValidClerkKeys =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_") &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes("example") &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes("your_");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resume Builder",
  description: "Build professional resumes with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // If Clerk keys are not properly configured, show setup message
  if (!hasValidClerkKeys) {
    return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full space-y-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8">
              <div className="text-center">
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
                <h1 className="text-3xl font-bold text-white mb-2">
                  Authentication Setup Required
                </h1>
                <p className="text-gray-300 mb-6">
                  To use authentication features (sign-in/sign-up), please
                  configure your Clerk keys.
                </p>
                <div className="text-left space-y-4 text-sm text-gray-300 bg-white/5 rounded-lg p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">
                    Quick Setup Steps:
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        1
                      </span>
                      <p>
                        Create a free account at{" "}
                        <strong className="text-blue-400">clerk.com</strong>
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        2
                      </span>
                      <p>Create a new application in your Clerk dashboard</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        3
                      </span>
                      <div>
                        <p>
                          Copy your keys and update{" "}
                          <code className="font-mono bg-white/10 px-2 py-1 rounded text-blue-400">
                            .env.local
                          </code>
                          :
                        </p>
                        <div className="mt-2 bg-gray-900/50 rounded p-3 font-mono text-xs">
                          <div className="text-green-400">
                            NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
                            <span className="text-yellow-400">
                              your_pk_key_here
                            </span>
                          </div>
                          <div className="text-green-400">
                            CLERK_SECRET_KEY=
                            <span className="text-yellow-400">
                              your_sk_key_here
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        4
                      </span>
                      <p>Restart the development server</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                  <p className="text-blue-300 text-sm">
                    <strong>Note:</strong> The app works without authentication,
                    but sign-in/sign-up features require valid Clerk keys.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="/dashboard"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                    >
                      Continue to Dashboard
                    </a>
                    <a
                      href="/builder"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors"
                    >
                      Try Resume Builder
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConditionalClerkProvider>
          {children}
        </ConditionalClerkProvider>
      </body>
    </html>
  );
}
