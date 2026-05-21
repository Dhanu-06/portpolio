export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  features: string[];
  challenges: string[];
  impact: string;
  learnings: string[];
  techStack: string[];
  github?: string;
  live?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "clarityledger",
    title: "ClarityLedger",
    tagline: "Financial transparency for institutions",
    description:
      "A full-stack web platform that helps institutions manage budgets, track expenses, and share financial data with clarity and accountability.",
    problem:
      "Educational and organizational budgets often lack visibility—stakeholders struggle to track spending, approvals, and reports in one place.",
    features: [
      "Role-based access control for admins and members",
      "Real-time budget tracking with Firebase",
      "Submission and approval workflows",
      "Live financial reporting dashboards",
    ],
    challenges: [
      "Designing intuitive workflows for non-technical users",
      "Syncing real-time data across multiple user roles",
      "Structuring scalable Firebase data models",
    ],
    impact:
      "Delivered a production-ready transparency tool that simplifies budget management and builds trust through accessible financial reporting.",
    learnings: [
      "Next.js App Router patterns and server/client boundaries",
      "Firebase authentication and real-time database design",
      "Building accessible dashboards for diverse users",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Dhanu-06",
    gradient: "from-slate-100 to-slate-200",
  },
  {
    id: "medora",
    title: "Medora",
    tagline: "AI-powered health management platform",
    description:
      "A full-stack healthcare application that helps users track medications, nutrition, wellness, and receive guidance through an integrated AI assistant.",
    problem:
      "Health information is scattered across apps and notes—users need one thoughtful platform to manage daily wellness with reliable support.",
    features: [
      "Medication and nutrition tracking",
      "Wellness and women's health modules",
      "AI health assistant powered by OpenAI",
      "Secure user profiles with MongoDB",
    ],
    challenges: [
      "Integrating OpenAI API with meaningful, safe responses",
      "Designing modular features without overwhelming the UI",
      "Managing full-stack state across React and Express",
    ],
    impact:
      "Built an end-to-end platform demonstrating full-stack architecture, API integration, and user-centered health UX.",
    learnings: [
      "REST API design with Express and MongoDB",
      "Prompt engineering for practical AI features",
      "Balancing feature depth with clean interface design",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Tailwind CSS",
    ],
    github: "https://github.com/Dhanu-06",
    gradient: "from-neutral-100 to-stone-200",
  },
  {
    id: "friendsnavigation",
    title: "FriendsNavigation",
    tagline: "Real-time trip coordination for groups",
    description:
      "A web application for friends to share live locations, visualize routes, and coordinate trips with accurate ETAs—built for reliability on the move.",
    problem:
      "Group trips often fall apart when people lose track of each other's location and arrival times during travel.",
    features: [
      "Real-time location sharing",
      "Route visualization with TomTom Maps API",
      "ETA calculation for group coordination",
      "Firebase-backed live updates",
    ],
    challenges: [
      "Handling real-time geolocation updates efficiently",
      "Integrating third-party maps APIs with TypeScript",
      "Optimizing performance for mobile browsers",
    ],
    impact:
      "Created a practical coordination tool showcasing real-time systems, maps integration, and full-stack engineering.",
    learnings: [
      "TypeScript in production Next.js apps",
      "Maps API integration and geospatial UX",
      "Real-time synchronization patterns with Firebase",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "TomTom Maps API",
    ],
    github: "https://github.com/Dhanu-06",
    gradient: "from-zinc-100 to-gray-200",
  },
];
