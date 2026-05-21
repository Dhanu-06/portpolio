"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
        {label}
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
