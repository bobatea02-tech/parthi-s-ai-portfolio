export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  repo: string;
  tech: string[];
  highlights: string[];
  accent: string;
  icon: string;
};

export const projects: Project[] = [
  {
    slug: "modernize-now",
    title: "Modernize Now",
    tagline: "Legacy COBOL & Java → Modern Python",
    description:
      "AI-powered pipeline that translates legacy COBOL & Java repositories into clean, modern Python — with real-time progress, side-by-side inspection, and full artifact downloads.",
    longDescription:
      "A 9-phase AI migration pipeline that ingests legacy enterprise codebases (COBOL / Java) and produces a complete modernized Python repository, migration guide, pytest stubs, and validation reports. Built around Gemini 2.0 Flash with a FastAPI orchestrator and a React inspection UI offering real-time progress and side-by-side diffing.",
    repo: "https://github.com/bobatea02-tech/Legacy-Code-modernization",
    tech: ["Python 3.11", "FastAPI", "React 18", "Gemini 2.0 Flash", "WebSockets", "Docker"],
    highlights: [
      "9-phase deterministic AI pipeline",
      "Real-time progress via WebSockets",
      "Auto-generated pytest stubs",
      "Migration guide + validation reports",
    ],
    accent: "from-indigo-500 to-cyan-400",
    icon: "🔄",
  },
  {
    slug: "aqi-core",
    title: "AQI Core",
    tagline: "Predictive Atmospherics Dashboard",
    description:
      "Full-stack analytical dashboard tracking, visualizing, and predicting air quality across 17 major Indian cities using OpenWeather data and US EPA AQI scoring.",
    longDescription:
      "Live ingestion from the OpenWeather Air Pollution API with US EPA AQI computation, six specialized analytical tabs (Overview, Trends, Pollutants, Forecast, Comparison, Health), animated dark-mode UI, and a high-fidelity simulation fallback when the upstream API key is inactive. Auto-refreshes every 5 minutes.",
    repo: "https://github.com/bobatea02-tech/AQI-Core",
    tech: ["React", "TanStack", "TypeScript", "Recharts", "OpenWeather API", "Tailwind"],
    highlights: [
      "17 Indian cities, live + 24h forecast",
      "US EPA AQI scoring engine",
      "6 analytical tabs with rich charts",
      "Smart simulation fallback engine",
    ],
    accent: "from-emerald-400 to-cyan-400",
    icon: "🌫️",
  },
  {
    slug: "hiresync",
    title: "HireSync",
    tagline: "AI Onboarding, Personalized",
    description:
      "Intelligent onboarding platform that analyzes company documents and auto-generates personalized, adaptive onboarding workflows for every new hire.",
    longDescription:
      "Upload company handbooks, SOPs, and policies — HireSync uses Gemini to extract structure, build role-aware workflows, and adapt the journey based on the new hire's progress and feedback. TypeScript + React frontend, Node backend, with progress analytics for HR.",
    repo: "https://github.com/atharvax26/onboard-flow",
    tech: ["TypeScript", "React", "Node.js", "Google Gemini", "Tailwind"],
    highlights: [
      "Auto-extracts onboarding flows from docs",
      "Role-aware adaptive journeys",
      "HR analytics dashboard",
      "Gemini-powered content generation",
    ],
    accent: "from-purple-500 to-pink-400",
    icon: "🚀",
  },
  {
    slug: "emergency-triage",
    title: "Emergency Triage AI",
    tagline: "Context Pruning · ER Severity Classifier",
    description:
      "AI emergency triage assistant for hospital ERs combining context pruning, a calibrated ML severity pipeline, and Gemini reasoning — cutting LLM tokens by 68.73% with 100% pipeline validation across 150 cases.",
    longDescription:
      "Built for the Context Pruning / Token Compression Hackathon. A FastAPI backend serves a calibrated ML severity pipeline whose output is post-processed by a Gemini reasoning layer. A custom context-pruning engine compresses prompts by ~69% while preserving clinical accuracy. React + TypeScript clinician UI deployed live.",
    repo: "https://github.com/atharvax26/emergency-triage",
    tech: ["Python", "FastAPI", "React", "TypeScript", "Google Gemini", "Scikit-learn"],
    highlights: [
      "68.73% reduction in LLM tokens",
      "100% pipeline validation / 150 cases",
      "Calibrated ML + LLM hybrid",
      "Live deployed clinician UI",
    ],
    accent: "from-red-500 to-orange-400",
    icon: "🏥",
  },
  {
    slug: "petpal",
    title: "PetPal",
    tagline: "Voice-Enabled Pet Care Companion",
    description:
      "Comprehensive pet care platform with an AI voice assistant (JoJo), health tracking, and emergency features built for pet parents in India.",
    longDescription:
      "JoJo voice assistant with wake-word detection, Gemini-powered NLU, 10-turn context memory, hands-free mode, and ElevenLabs TTS. Plus health tracking, vaccination reminders, vet locator, and emergency SOS. FastAPI backend + React frontend.",
    repo: "https://github.com/bobatea02-tech/petcare-companion",
    tech: ["Python", "FastAPI", "React", "Gemini AI", "ElevenLabs", "Vite"],
    highlights: [
      'Wake-word "Hey JoJo" voice assistant',
      "10-turn contextual memory",
      "Health & vaccination tracking",
      "Emergency SOS + vet locator",
    ],
    accent: "from-amber-400 to-pink-400",
    icon: "🐾",
  },
];

export const certificates = [
  { name: "Generative AI Engineering Mastermind", issuer: "GenAI" },
  { name: "Oracle AI Foundation", issuer: "Oracle" },
  { name: "AI Fundamentals", issuer: "IBM SkillsBuild" },
  { name: "Apply AI: Analyze Customer Reviews", issuer: "IBM SkillsBuild" },
  { name: "Introduction to Modern AI", issuer: "IBM SkillsBuild" },
  { name: "Cybersecurity Essentials", issuer: "Cisco" },
  { name: "Networking Basics", issuer: "Cisco" },
  { name: "Programming Essentials in C (CLA)", issuer: "Cisco / OpenEDG" },
  { name: "AI-ML Virtual Internship", issuer: "AICTE / EduSkills" },
  { name: "React Bootcamp", issuer: "Bootcamp" },
  { name: "Generative AI Certificate", issuer: "Workshop" },
  { name: "Aptitude, Soft & Technical Skills Program", issuer: "SAKEC" },
  { name: "Hackathon Participant Certificates ×4", issuer: "Various" },
];

export const CERT_DRIVE =
  "https://drive.google.com/drive/folders/1fkDbLEkPEV7rc15HQPIb6fxbOiqJJmDd?usp=sharing";

export const skills = [
  { category: "AI / ML", items: ["Gemini", "LLM Pipelines", "Prompt Engineering", "Scikit-learn", "Context Pruning"] },
  { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "C", "Java", "SQL"] },
  { category: "Frontend", items: ["React", "TanStack", "Tailwind", "Framer Motion", "Vite"] },
  { category: "Backend", items: ["FastAPI", "Node.js", "REST", "WebSockets", "Docker"] },
  { category: "Data & Cloud", items: ["PostgreSQL", "OpenWeather API", "Vercel", "Render", "Cloudflare"] },
];

export const timeline = [
  { year: "2023 – Present", title: "B.Tech in AI & Data Science", org: "Shah and Anchor Kutchhi Engineering College", detail: "CGPA 8.64 · Building AI products end-to-end" },
  { year: "2023", title: "HSC — Science (PCM)", org: "Maharashtra Board", detail: "70%" },
  { year: "2021", title: "SSC", org: "Maharashtra Board", detail: "88%" },
];
