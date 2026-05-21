"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { buildMailto } from "@/lib/links";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const mailto = buildMailto(siteConfig.contactEmail, {
    subject: "Internship / Collaboration — Dhanushree R",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % siteConfig.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-slate-500/10 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pill-badge mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Computer Science · UVCE · Bengaluru · CGPA 8.66
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight leading-[1.05]"
        >
          <span className="gradient-text">{siteConfig.name.split(" ")[0]}</span>
          <br />
          <span className="text-muted-foreground">
            {siteConfig.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6 h-8 overflow-hidden"
        >
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl font-medium text-foreground/80"
          >
            {siteConfig.roles[roleIndex]}
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed border-l-2 border-[var(--highlight)] pl-5"
        >
          I build full-stack web applications with React, Next.js, and Node.js—
          from databases and APIs to clean, usable interfaces. Hackathon
          participant, team leader, and creative problem solver seeking an
          internship where I can ship real impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href={mailto} variant="secondary">
            Send Email
          </Button>
          <Button
            href={siteConfig.resumePath}
            variant="ghost"
            download={siteConfig.resumeFileName}
          >
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.15 }}
          className="mt-12 flex items-center gap-3"
        >
          {[
            { href: siteConfig.github, icon: Github, label: "GitHub" },
            { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: mailto, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="icon-box hover:border-[var(--highlight)]/40 hover:text-[var(--highlight)] transition-colors"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
