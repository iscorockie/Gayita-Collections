export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export function img(path: string) {
  // path should start with /
  if (path.startsWith("http")) return path;
  return `${BASE_PATH}${path}`;
}
