"use client";

import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface OwnerBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showRole?: boolean;
}

export const OwnerBadge = ({
  className,
  size = "md",
  showRole = false,
}: OwnerBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 text-muted-foreground select-none",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        size === "lg" && "text-base",
        className
      )}
    >
      <span>Created with</span>
      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block" />
      <span>by</span>
      <span className="font-semibold text-foreground">GOUS KHAN</span>
      {showRole && (
        <span className="ml-1 text-[10px] uppercase font-semibold tracking-wider text-muted-foreground bg-secondary px-1.5 py-0.5 rounded border border-border">
          Owner
        </span>
      )}
    </div>
  );
};
