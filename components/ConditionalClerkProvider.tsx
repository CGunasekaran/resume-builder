"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

interface ConditionalClerkProviderProps {
  children: ReactNode;
}

export function ConditionalClerkProvider({ children }: ConditionalClerkProviderProps) {
  // Check if Clerk keys are properly configured
  const hasValidClerkKeys = 
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_') &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('YOUR_') &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('example');

  // Only render ClerkProvider if we have valid keys
  if (hasValidClerkKeys) {
    return <ClerkProvider>{children}</ClerkProvider>;
  }

  // Return children without ClerkProvider wrapper when keys are not configured
  return <>{children}</>;
}