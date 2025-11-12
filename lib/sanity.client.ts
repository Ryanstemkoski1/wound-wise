import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-11-12",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper for fetching with revalidation
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 3600, // 1 hour default
}: {
  query: string;
  params?: Record<string, unknown>;
  revalidate?: number | false;
}) {
  return client.fetch<T>(query, params, {
    next: { revalidate },
  });
}
