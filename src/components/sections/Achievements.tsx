"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";
import { cn } from "@/lib/utils";

export function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Achievements"
          title="Competing, presenting, and growing"
          description="Hackathons, national recognition, and technical events that shaped my journey."
        />

        <div className="relative">
          <div
            className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border"
            aria-hidden
          />

          <div className="space-y-10">
            {achievements.map((item, index) => (
              <div
                key={`${item.title}-${item.year}`}
                className={cn(
                  "relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12",
                  index % 2 === 0 ? "md:text-right" : ""
                )}
              >
                <div
                  className={cn(
                    "absolute left-0 md:left-1/2 md:-translate-x-1/2 w-[15px] h-[15px] rounded-full border-2 border-background bg-foreground",
                    item.highlight && "ring-2 ring-foreground/20"
                  )}
                  aria-hidden
                />

                <div
                  className={cn(
                    "md:col-span-1",
                    index % 2 === 0
                      ? "md:col-start-1 md:pr-12"
                      : "md:col-start-2 md:pl-12"
                  )}
                >
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    {item.year}
                  </span>
                  <h3
                    className={cn(
                      "font-display text-lg font-semibold mt-1",
                      item.highlight && "text-foreground"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {item.organization}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
