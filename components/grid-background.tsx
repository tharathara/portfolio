"use client";

import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  variant?: "grid" | "grid-fine" | "dots";
  fade?: "radial" | "tight" | "bottom" | "none";
  animated?: boolean;
}

export function GridBackground({
  className,
  variant = "grid",
  fade = "radial",
  animated = false,
}: GridBackgroundProps) {
  const bg =
    variant === "dots"
      ? "bg-dots"
      : variant === "grid-fine"
        ? "bg-grid-fine"
        : "bg-grid";
  const mask =
    fade === "tight"
      ? "mask-radial-tight"
      : fade === "bottom"
        ? "mask-fade-bottom"
        : fade === "radial"
          ? "mask-radial"
          : "";
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        bg,
        mask,
        animated && "animate-grid-drift",
        className
      )}
    />
  );
}
