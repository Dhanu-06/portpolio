"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { leadershipItems } from "@/data/leadership";

export function Leadership() {
  return (
    <section id="leadership" className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Leadership"
          title="Beyond the codebase"
          description="Communication, creativity, and community—the skills that make engineering work matter."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {leadershipItems.map((item) => (
            <Card key={item.title} accent>
              <h3 className="font-display text-base font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
