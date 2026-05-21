import Link from "next/link";
import { cn } from "@/lib/utils";
import { shouldUseNativeAnchor } from "@/lib/links";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  download?: boolean | string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className,
  download,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants = {
    primary:
      "bg-accent text-accent-foreground hover:opacity-90 shadow-sm hover:shadow-md",
    secondary:
      "border border-border bg-card text-foreground hover:bg-muted hover:border-foreground/20 hover:shadow-sm",
    ghost: "text-foreground hover:bg-muted",
  };

  const classes = cn(base, variants[variant], className);

  const useNative =
    shouldUseNativeAnchor(href) || external || Boolean(download);

  if (useNative) {
    const isExternal =
      external ||
      href.startsWith("http://") ||
      href.startsWith("https://");

    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        download={download === true ? "" : download || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
