"use client";

import Image from "next/image";
import { useTheme } from "@/app/context/theme-context";
import { cn } from "@/lib/utils";

interface AppIconProps {
  /** Size in pixels (width and height). */
  size?: number;
  className?: string;
}

/**
 * Theme-aware app icon (geometric cube + triangle). Uses light asset on dark theme, dark asset on light theme.
 */
export function AppIcon({ size = 24, className }: AppIconProps) {
  const { theme } = useTheme();
  const src = theme === "dark" ? "/app-icon-dark.png" : "/app-icon-light.png";

  return (
    <Image
      src={src}
      alt="Cursor"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      priority
    />
  );
}
