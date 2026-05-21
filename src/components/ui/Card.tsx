"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accent?: boolean;
};

export function Card({
  children,
  className,
  hover = true,
  accent = false,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        accent ? "card-accent" : "card-elevated",
        "p-6 md:p-8",
        !hover && "hover:translate-y-0 hover:shadow-sm",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
