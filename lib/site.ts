export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://niharmajalikar.github.io/homelab-portfolio";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}
