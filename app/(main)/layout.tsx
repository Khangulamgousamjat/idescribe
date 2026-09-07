"use client";

import { useConvexAuth } from "convex/react";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { Navigation } from "./_components/Navigation";
import { Spinner } from "@/components/spinner";
import { SearchCommand } from "@/components/searchCommand";

const CanvasLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { isSignedIn, isLoaded } = useAuth();

  if (isLoading && !isLoaded) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated && !isSignedIn) {
    return redirect("/");
  }

  return (
    <div className="h-full flex dark:bg-[#080402]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default CanvasLayout;
