"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, RefreshCcw } from "lucide-react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <p className="text-lg mt-4 font-light text-muted-foreground">
        We&apos;re sorry, but an error occurred.
      </p>

      <h1 className="text-3xl sm:text-4xl font-bold text-sky-500 my-2">
        Something went wrong
      </h1>

      {error?.message && (
        <p className="max-w-md text-xs sm:text-sm text-muted-foreground bg-secondary/50 p-3 rounded-lg border border-border my-3 font-mono break-words">
          {error.message}
        </p>
      )}

      <div className="flex items-center gap-3 mt-4">
        <Button onClick={() => reset()} variant="outline" className="text-md">
          <RefreshCcw className="h-4 w-4 mr-2" />
          Try again
        </Button>
        <Button asChild className="text-md">
          <Link href="/">
            <Home className="h-4 w-4 mr-2" />
            Go to home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Error;
