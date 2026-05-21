/** Use a plain <a> tag — not Next.js Link — for these href types */
export function shouldUseNativeAnchor(href: string): boolean {
  return (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("/") // static files in public/ e.g. resume.pdf
  );
}

export function buildMailto(
  email: string,
  options?: { subject?: string; body?: string }
): string {
  const params = new URLSearchParams();
  if (options?.subject) params.set("subject", options.subject);
  if (options?.body) params.set("body", options.body);
  const query = params.toString();
  return query ? `mailto:${email}?${query}` : `mailto:${email}`;
}
