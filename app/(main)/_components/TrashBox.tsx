"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { Spinner } from "@/components/spinner";
import { ConfirmModal } from "@/components/modals/ConfirmModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";

import {
  toastMsgRestoreSuccess,
  toastMsgRestoreLoading,
  toastMsgRestoreError,
  toastMsgDeleteSuccess,
  toastMsgDeleteLoading,
  toastMsgDeleteError,
} from "@/assets/toastMsg";

import { Search, Trash2, Undo2 } from "lucide-react";

export const TrashBox = () => {
  const router = useRouter();
  const params = useParams();
  const canvas = useQuery(api.canvas.getTrash);
  const restore = useMutation(api.canvas.restore);
  const remove = useMutation(api.canvas.remove);
  const removeAllTrash = useMutation(api.canvas.removeAllTrash);

  const [search, setSearch] = useState("");

  const onRemoveAll = () => {
    const promise = removeAllTrash();

    toast.promise(promise, {
      loading: "Deleting all canvases from trash...",
      success: "All canvases permanently deleted!",
      error: "Failed to delete canvases.",
    });

    router.push("/canvas");
  };

  const filteredCanvas = canvas?.filter((c) => {
    return c.title.toLowerCase().includes(search.toLowerCase());
  });

  const onClickCanvasName = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    router.push(`/canvas/${id}`);
  };

  const onRestore = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: Id<"canvas">
  ) => {
    e.stopPropagation();
    const promise = restore({ id: id });

    toast.promise(promise, {
      loading:
        toastMsgRestoreLoading[
          Math.floor(Math.random() * toastMsgRestoreLoading.length)
        ],
      success:
        toastMsgRestoreSuccess[
          Math.floor(Math.random() * toastMsgRestoreSuccess.length)
        ],
      error:
        toastMsgRestoreError[
          Math.floor(Math.random() * toastMsgRestoreError.length)
        ],
    });
  };

  const onRemove = (id: Id<"canvas">) => {
    const promise = remove({ id: id });

    toast.promise(promise, {
      loading:
        toastMsgDeleteLoading[
          Math.floor(Math.random() * toastMsgDeleteLoading.length)
        ],
      success:
        toastMsgDeleteSuccess[
          Math.floor(Math.random() * toastMsgDeleteSuccess.length)
        ],
      error:
        toastMsgDeleteError[
          Math.floor(Math.random() * toastMsgDeleteError.length)
        ],
    });

    if (params.canvasID === id) {
      router.push("/canvas");
    }
  };

  if (canvas === undefined) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="text-sm">
      <div className="flex items-center gap-x-1 p-2">
        <Search className="h-4 w-4" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-7 px-2 focus-visible:ring-transparent bg-secondary"
          placeholder="Filter by page title"
        />
      </div>
      {canvas && canvas.length > 0 && (
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/50 bg-secondary/30">
          <span className="text-xs text-muted-foreground font-medium">
            {canvas.length} {canvas.length === 1 ? "canvas" : "canvases"} in trash
          </span>
          <ConfirmModal onConfirm={onRemoveAll}>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 px-2 text-xs text-red-500 hover:text-red-600 hover:bg-red-500/10 cursor-pointer font-medium"
            >
              <Trash2 className="h-3.5 w-3.5 mr-1 text-red-500" />
              Delete all
            </Button>
          </ConfirmModal>
        </div>
      )}
      <div className="mt-2 px-1 pb-1">
        <p className="hidden last:block text-xs text-center text-muted-foreground pb-2">
          No canvas found
        </p>
        {filteredCanvas?.map((c) => (
          <div
            key={c._id}
            role="button"
            onClick={(e) => onClickCanvasName(e, c._id)}
            className="text-sm rounded-sm w-full hover:bg-primary/5 flex items-center text-primary justify-between"
          >
            <code className="pl-2 truncate">{c.title}</code>
            <div className="flex items-center">
              <div
                onClick={(e) => onRestore(e, c._id)}
                role="button"
                className="rounded-sm p-2 hover:bg-primary/10"
              >
                <Undo2 className="h-4 w-4" />
              </div>
              <ConfirmModal onConfirm={() => onRemove(c._id)}>
                <div
                  role="button"
                  className="rounded-sm p-2 hover:bg-primary/10"
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </div>
              </ConfirmModal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
