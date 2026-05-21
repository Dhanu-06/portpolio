export type Achievement = {
  year: string;
  title: string;
  organization: string;
  description: string;
  highlight?: boolean;
};

export const achievements: Achievement[] = [
  {
    year: "2025",
    title: "1st Place — National Poster Presentation",
    organization: "KAGADA IEEE National Conference",
    description:
      "Recognized for presenting research on IoT applications in smart city infrastructure, demonstrating strong communication and technical storytelling.",
    highlight: true,
  },
  {
    year: "2025",
    title: "Finalist — Katathon",
    organization: "Katalyst India",
    description:
      "Competed in Katalyst's flagship hackathon, building under pressure with a focused team and delivering a complete solution within tight deadlines.",
    highlight: true,
  },
  {
    year: "2024–2025",
    title: "Hackathon Participant",
    organization: "JP Morgan Generative AI Hackathon",
    description:
      "Explored generative AI applications in a competitive, industry-oriented environment alongside peers from across the country.",
  },
  {
    year: "2024",
    title: "Hackathon Participant",
    organization: "Codefurry 8.0",
    description:
      "Collaborated on rapid prototyping and problem-solving in a high-energy coding competition.",
  },
  {
    year: "2024",
    title: "Technical Event Participant",
    organization: "IEEE Computer Society — Securathon",
    description:
      "Engaged in competitive technical challenges that strengthened analytical thinking and teamwork under time constraints.",
  },
];
