"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { WelcomeMessage } from "../../_components/WelcomeMessage";
import { Button } from "@/components/ui/button";

import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

import {
  toastMsgLoading,
  toastMsgSuccess,
  toastMsgError,
} from "@/assets/toastMsg";
import { welcomeMessageArr, BtnTextArr } from "@/assets/textMsg";

import { OwnerBadge } from "@/components/OwnerBadge";

export default function Canvas() {
  const router = useRouter();
  const user = useUser();
  const create = useMutation(api.canvas.create);

  const onCreate = () => {
    const promise = create({
      title: "Untitled Canvas",
    }).then((id) => {
      router.push(`/canvas/${id}`);
    });

    toast.promise(promise, {
      loading:
        toastMsgLoading[Math.floor(Math.random() * toastMsgLoading.length)],
      success:
        toastMsgSuccess[Math.floor(Math.random() * toastMsgSuccess.length)],
      error: toastMsgError[Math.floor(Math.random() * toastMsgError.length)],
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4 dark:bg-[#080402] relative">
      <h2 className="text-lg font-medium">
        <WelcomeMessage
          name={user.user?.firstName || "User"}
          message={
            welcomeMessageArr[
              Math.floor(Math.random() * welcomeMessageArr.length)
            ]
          }
        />
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="w-4 h-4 mr-2" />
        {BtnTextArr[Math.floor(Math.random() * BtnTextArr.length)]}
      </Button>

      {/* Bottom middle animated owner badge */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <OwnerBadge size="sm" showRole />
      </div>
    </div>
  );
}
