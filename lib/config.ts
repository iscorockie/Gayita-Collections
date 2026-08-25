export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a local URL when the site is exported below a GitHub Pages base path. */
export function sitePath(path: string) {
  if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

export function img(path: string) {
  if (path.startsWith("http")) return path;
  return sitePath(path);
}
