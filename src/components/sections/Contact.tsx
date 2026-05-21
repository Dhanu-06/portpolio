"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, FileDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { buildMailto } from "@/lib/links";

const mailtoPrimary = buildMailto(siteConfig.contactEmail, {
  subject: "Hello from your portfolio — Dhanushree R",
  body: "Hi Dhanushree,\n\nI came across your portfolio and would like to connect regarding ",
});

const mailtoKatalyst = buildMailto(siteConfig.email, {
  subject: "Portfolio inquiry",
});

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email (Gmail)",
      value: siteConfig.contactEmail,
      href: mailtoPrimary,
    },
    {
      icon: Mail,
      label: "Email (Katalyst)",
      value: siteConfig.email,
      href: mailtoKatalyst,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.location,
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Dhanu-06",
      href: siteConfig.github,
      external: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dhanushree-r-482b9429a",
      href: siteConfig.linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's build something meaningful"
          description="Open to internships, collaborations, and conversations about technology and growth."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-accent p-8 md:p-10 space-y-2 shadow-md">
            {contactLinks.map((item) => (
              <div key={item.label} className="link-row">
                <div className="icon-box">
                  <item.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium hover:text-[var(--highlight)] transition-colors mt-0.5 inline-block break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium mt-0.5">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <p className="text-xs text-muted-foreground text-center pt-4 pb-2">
              Resume not downloading? Add{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">
                resume.pdf
              </code>{" "}
              to the <code className="rounded bg-muted px-1.5 py-0.5">public</code>{" "}
              folder — see <code className="rounded bg-muted px-1.5 py-0.5">public/HOW_TO_ADD_RESUME.txt</code>
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center border-t border-border mt-4">
              <Button href={mailtoPrimary} variant="primary">
                <Mail size={16} />
                Send Email
              </Button>
              <Button
                href={siteConfig.resumePath}
                variant="secondary"
                download={siteConfig.resumeFileName}
              >
                <FileDown size={16} />
                Download Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
