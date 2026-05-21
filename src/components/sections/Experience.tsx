"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { experience } from "@/data/experience";
import { certifications } from "@/data/leadership";

export function Experience() {
  return (
    <section id="experience" className="section-shell section-alt">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Experience"
          title="Education and professional growth"
          description="Academic foundation combined with industry-oriented programs."
        />

        <div className="space-y-6 mb-16">
          {experience.map((item) => (
            <Card key={item.title}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.organization}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground shrink-0">
                  {item.period}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <SectionHeading
          label="Certifications"
          title="Continuous learning"
          className="mb-8"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.title}>
              <h3 className="font-display font-semibold">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {cert.issuer} · {cert.year}
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {cert.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
