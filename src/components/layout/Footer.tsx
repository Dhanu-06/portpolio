import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground mt-1">
            Full stack developer · Software engineer · Builder
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.name}. Built with Next.js & Tailwind.
        </p>
      </div>
    </footer>
  );
}
