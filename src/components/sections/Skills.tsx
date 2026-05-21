"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technical depth with a design-aware mindset"
          description="Tools and strengths I use to ship reliable, user-focused applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} accent>
              <h3 className="font-display text-lg font-semibold mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
