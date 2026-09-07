import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";

export const dynamic = "force-dynamic";

// Ensure build-time evaluation does not fail if environment variables are missing during Vercel build
if (!process.env.EDGE_STORE_ACCESS_KEY) {
  process.env.EDGE_STORE_ACCESS_KEY = "build_time_access_key";
}
if (!process.env.EDGE_STORE_SECRET_KEY) {
  process.env.EDGE_STORE_SECRET_KEY = "build_time_secret_key";
}

const es = initEdgeStore.create();

/**
 * This is the main router for the Edge Store buckets.
 */
const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket().beforeDelete(() => {
    return true; // allow delete
  }),
});

const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});

export { handler as GET, handler as POST };

/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;
