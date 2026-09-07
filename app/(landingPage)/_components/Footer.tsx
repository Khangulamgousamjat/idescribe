import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { OwnerBadge } from "@/components/OwnerBadge";

export const Footer = () => {
  return (
    <footer className="w-full p-6 bg-background dark:bg-[#080402] border-t border-border/40 relative flex flex-col md:flex-row items-center justify-between gap-4 z-40">
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Animated Owner Credit in Bottom Middle */}
      <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
        <OwnerBadge showRole />
      </div>

      <div className="flex items-center gap-x-2 text-muted-foreground flex-wrap justify-center md:ml-auto">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms of Service
        </Button>
        <Button variant="ghost" size="sm">
          Contact Us
        </Button>
      </div>
    </footer>
  );
};
