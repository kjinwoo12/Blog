/** `public/` 경로 → GitHub Pages `base` 포함 URL */
export function publicUrl(path: string): string {
  const normalized = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
}
