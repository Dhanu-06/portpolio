"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <section id="projects" className="section-shell section-alt">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Real applications, real problem-solving"
          description="Selected work that reflects my approach to building, learning, and delivering impact."
        />

        <div className="space-y-6">
          {projects.map((project, index) => {
            const isOpen = expanded === project.id;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpanded(isOpen ? null : project.id)
                  }
                  className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/20"
                  aria-expanded={isOpen}
                >
                  <div
                    className={cn(
                      "w-full md:w-48 h-32 md:h-28 rounded-lg shrink-0 bg-gradient-to-br",
                      project.gradient
                    )}
                    aria-hidden
                  >
                    <div className="h-full flex items-center justify-center">
                      <span className="font-display text-2xl font-bold text-foreground/20">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-semibold">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mt-1">
                          {project.tagline}
                        </p>
                      </div>
                      <ChevronDown
                        className={cn(
                          "shrink-0 text-muted-foreground transition-transform duration-200",
                          isOpen && "rotate-180"
                        )}
                        size={20}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge>+{project.techStack.length - 4}</Badge>
                      )}
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 border-t border-border space-y-6">
                        <p className="text-muted-foreground leading-relaxed pt-6">
                          {project.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold mb-2">
                              Problem
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {project.problem}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold mb-2">
                              Impact
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {project.impact}
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold mb-2">
                              Key Features
                            </h4>
                            <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
                              {project.features.map((f) => (
                                <li key={f}>{f}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold mb-2">
                              What I Learned
                            </h4>
                            <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
                              {project.learnings.map((l) => (
                                <li key={l}>{l}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                          <Button
                            href={project.github ?? siteConfig.github}
                            variant="secondary"
                            external
                          >
                            <Github size={16} />
                            GitHub
                          </Button>
                          {project.live && (
                            <Button href={project.live} variant="primary" external>
                              <ExternalLink size={16} />
                              Live Demo
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
