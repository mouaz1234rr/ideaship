"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  // Skip SessionProvider in embedded preview to avoid browser restrictions
  const isEmbeddedPreview = typeof window !== 'undefined' && window.self !== window.top;
  
  if (isEmbeddedPreview) {
    return <>{children}</>;
  }
  
  return <SessionProvider>{children}</SessionProvider>;
}
