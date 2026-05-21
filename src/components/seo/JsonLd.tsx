import { siteConfig } from "@/data/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    jobTitle: "Full Stack Developer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University Visvesvaraya College of Engineering",
    },
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Software Engineering",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
