"use client";

import { cn } from "@/lib/utils";

interface CursorLogoProps {
  className?: string;
  size?: number;
}

/** Cursor (cursor.com) style mark for UI branding — IDE/code aesthetic */
export function CursorLogo({ className, size = 20 }: CursorLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-accent", className)}
      aria-hidden
    >
      <path
        d="M5 4h8a3 3 0 013 3v10a3 3 0 01-3 3H8l-3 3V4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9h4M9 12h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}

/** Compact Cursor wordmark-style icon for chat/action buttons */
export function CursorIcon({ className, size = 20 }: CursorLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-accent", className)}
      aria-hidden
    >
      <path
        d="M5 4h8a3 3 0 013 3v10a3 3 0 01-3 3H8l-3 3V4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}
