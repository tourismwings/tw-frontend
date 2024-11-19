import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "t1zc5zbe",
  dataset: "production",
  apiVersion: "2024-11-19",
  useCdn: false,
});