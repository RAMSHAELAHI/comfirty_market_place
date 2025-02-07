import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Load environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = "2024-02-07"; // Update to the latest API version
const token = process.env.SANITY_API_TOKEN; // Use token from .env.local

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if using authentication
  token, // Use token for authenticated requests
});

// Image URL Builder
const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}
