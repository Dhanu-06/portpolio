"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const highlights = [
  { label: "CGPA", value: "8.66" },
  { label: "Graduation", value: "2027" },
  { label: "Focus", value: "Full Stack Development" },
  { label: "Based in", value: "Bengaluru" },
];

export function About() {
  return (
    <section id="about" className="section-shell section-alt">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="Building with purpose, learning with discipline"
          description="A motivated CSE student who combines technical skill with communication, creativity, and leadership."
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Card accent className="md:col-span-1">
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a Computer Science Engineering student at{" "}
              <strong className="text-foreground font-medium">UVCE, Bengaluru</strong>
              , focused on full-stack development with React, Next.js, Node.js,
              and modern databases. I build end-to-end products—from APIs and data
              layers to polished user interfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beyond code, I bring experience in event management, poster design,
              and public presentation—skills that help me collaborate effectively
              and communicate ideas with clarity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Raised in a rural farming community, I carry a growth mindset and
              determination to create meaningful technology—and to support others
              on similar paths.
            </p>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <Card key={item.label} hover={false} className="text-center bg-card shadow-sm">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {item.label}
                </p>
                <p className="font-display text-2xl font-semibold">{item.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
