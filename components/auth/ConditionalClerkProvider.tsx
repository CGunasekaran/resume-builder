"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

// Check if Clerk keys are properly configured
const hasValidClerkKeys = 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_') &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('example') &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('your_');

interface ConditionalClerkProviderProps {
  children: ReactNode;
}

export function ConditionalClerkProvider({ children }: ConditionalClerkProviderProps) {
  // Only render ClerkProvider if we have valid keys
  if (hasValidClerkKeys) {
    return <ClerkProvider>{children}</ClerkProvider>;
  }
  
  // Return children without ClerkProvider when keys are invalid
  return <>{children}</>;
}