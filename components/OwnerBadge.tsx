"use client";

import { Heart, Sparkles, ShieldCheck } from "lucide-react";
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
        "group relative inline-flex items-center gap-2 rounded-full transition-all duration-300",
        "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10",
        "hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20",
        "border border-blue-500/20 hover:border-purple-500/40",
        "backdrop-blur-md animate-pulse-glow cursor-default select-none",
        size === "sm" && "px-3 py-1 text-xs",
        size === "md" && "px-4 py-1.5 text-sm",
        size === "lg" && "px-5 py-2 text-base",
        className
      )}
    >
      {/* Decorative ambient background glow */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

      <div className="relative z-10 flex items-center gap-1.5">
        <span className="flex items-center gap-1 text-muted-foreground group-hover:text-foreground transition-colors font-medium">
          <span>Created with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block animate-heartbeat" />
          <span>by</span>
        </span>

        <span className="relative flex items-center gap-1 font-bold tracking-wide">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent group-hover:brightness-125 transition-all">
            GOUS KHAN
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 animate-spin-slow group-hover:scale-110 transition-transform" />
        </span>

        {showRole && (
          <span className="ml-1 inline-flex items-center gap-0.5 text-[10px] uppercase font-semibold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full border border-blue-500/20">
            <ShieldCheck className="w-2.5 h-2.5" />
            Owner
          </span>
        )}
      </div>
    </div>
  );
};
