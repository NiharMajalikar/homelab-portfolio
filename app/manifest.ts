import type { MetadataRoute } from "next";

import { assetPath, basePath } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nihar Majalikar Engineering Portfolio",
    short_name: "Nihar Portfolio",
    description:
      "Telecommunications, networking, infrastructure and IT portfolio.",
    start_url: basePath ? `${basePath}/` : "/",
    display: "standalone",
    background_color: "#07111f",
    theme_color: "#0f766e",
    icons: [
      { src: assetPath("/icon.svg"), sizes: "any", type: "image/svg+xml" },
    ],
  };
}
