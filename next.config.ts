import type { NextConfig } from "next";

/**
 * GitHub Pages project sites serve content from a subpath
 * (https://<org>.github.io/main-site/), so CI builds with
 * NEXT_PUBLIC_BASE_PATH=/main-site. Local dev/builds stay at the root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (generates the `out/` folder)
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  // GitHub Pages cannot run the Next.js image optimizer
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
