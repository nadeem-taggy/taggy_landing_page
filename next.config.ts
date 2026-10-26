import type { NextConfig } from "next";

// BASE_PATH is set only by the GitHub Pages workflow (project site lives under /<repo>).
// Static export can't use PPR / cache components, so those stay dev/server-only.
const basePath = process.env.BASE_PATH;

const nextConfig: NextConfig = basePath
  ? { output: "export", trailingSlash: true, basePath, images: { loader: "custom", loaderFile: "./image-loader.ts" }, env: { BASE_PATH: basePath } }
  : { cacheComponents: true, partialPrefetching: true };

export default nextConfig;
