export type Experience = {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "internship" | "program" | "education";
};

export const experience: Experience[] = [
  {
    title: "Katalyst Scholar Program",
    organization: "Katalyst India",
    period: "2023 — Present",
    description:
      "Part of a leadership and skills development program for high-potential women in STEM, focusing on professional growth, mentorship, and industry readiness.",
    type: "program",
  },
  {
    title: "B.Tech — Computer Science & Engineering",
    organization: "UVCE, Bengaluru",
    period: "2023 — 2027",
    description:
      "Pursuing core CS fundamentals with 8.66 CGPA. Relevant coursework: Data Structures & Algorithms, Operating Systems, DBMS, Web Design, and Computer Organization.",
    type: "education",
  },
  {
    title: "PUC — PCMB",
    organization: "Presidency PU College, Sira",
    period: "2021 — 2023",
    description:
      "Scored 95.5%. KCET Rank 4247, JEE Mains 79 percentile — strong foundation in science and competitive problem-solving.",
    type: "education",
  },
];
