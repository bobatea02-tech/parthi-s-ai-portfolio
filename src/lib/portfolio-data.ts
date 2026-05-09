export type ProjectTag = "AI" | "Full-Stack" | "Data Science";

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
  tags: ProjectTag[];
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
    tags: ["AI", "Full-Stack"],
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
    tags: ["Data Science", "Full-Stack"],
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
    tags: ["AI", "Full-Stack"],
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
    tags: ["AI", "Data Science", "Full-Stack"],
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
    tags: ["AI", "Full-Stack"],
  },
];

export const PROJECT_TAGS: ProjectTag[] = ["AI", "Full-Stack", "Data Science"];

// Each cert links to its real PDF in /public/certificates/
export type Certificate = { name: string; issuer: string; file: string; year?: string };

const C = "/certificates/";
export const certificates: Certificate[] = [
  { name: "Generative AI Engineering Mastermind", issuer: "GenAI Mastermind", file: C + "Parthi_Gadher_GENAI ENGINEERING MASTERMIND.pdf" },
  { name: "Oracle AI Foundation", issuer: "Oracle", file: C + "Oracle AI foundation Certificate.pdf" },
  { name: "AI Fundamentals", issuer: "IBM SkillsBuild", file: C + "AI_Fundamentals_with_IBM_SkillsBuild_certificate_parthi-17884-sakec-ac-in_0299ecf0-f71b-417c-8062-35d243a70b3b.pdf" },
  { name: "Apply AI: Analyze Customer Reviews", issuer: "IBM SkillsBuild", file: C + "Apply_AI-_Analyze_Customer_Reviews_certificate_parthi-17884-sakec-ac-in_630342ac-171f-4a3a-8bcf-e45249b74c48.pdf" },
  { name: "Introduction to Modern AI", issuer: "IBM SkillsBuild", file: C + "Introduction_to_Modern_AI_certificate_parthi-17884-sakec-ac-in_4d540de7-e00c-4702-b2d6-017903d586b5.pdf" },
  { name: "Cybersecurity Essentials", issuer: "Cisco", file: C + "Cybersecurity_Essentials_certificate_parthi-17884-sakec-ac-in_66a9a251-0aa2-493d-9e2f-049a72225da7.pdf" },
  { name: "Networking Basics", issuer: "Cisco", file: C + "Networking_Basics_certificate_parthi-17884-sakec-ac-in_356d1182-4dd0-4349-b121-4f0cc74950b8.pdf" },
  { name: "Programming Essentials in C (CLA)", issuer: "Cisco / OpenEDG", file: C + "Partner-_CLA_-_Programming_Essentials_in_C_certificate_parthi-17884-sakec-ac-in_04508687-555b-4da2-9406-bec10e71f0e6.pdf" },
  { name: "AI-ML Virtual Internship", issuer: "AICTE / EduSkills", file: C + "AI-ML Virtual Internship.pdf" },
  { name: "React Bootcamp", issuer: "Bootcamp", file: C + "React Bootcamp certificate.pdf" },
  { name: "Generative AI Workshop", issuer: "Workshop", file: C + "GnerativeAI certificate.pdf" },
  { name: "Aptitude, Soft & Technical Skills Program", issuer: "SAKEC", file: C + "Aptitude, Soft skills and Technical Skill Employability Enhancing Program Certificate.pdf" },
  { name: "Hackathon Participant", issuer: "Hackathon", file: C + "PARTHI-GADHER-Participant-Certificate.pdf" },
  { name: "Hackathon Participant II", issuer: "Hackathon", file: C + "PARTHI-GADHER-Participant-Certificate(1).pdf" },
  { name: "Hackathon Participant III", issuer: "Hackathon", file: C + "PARTHI-GADHER-Participant-Certificate(2).pdf" },
  { name: "Hackathon Participant IV", issuer: "Hackathon", file: C + "PARTHI-GADHER-Participant-Certificate(3).pdf" },
  { name: "Achievement", issuer: "Recognition", file: C + "Parthi Gadher.pdf" },
  { name: "Achievement (Honors)", issuer: "Recognition", file: C + "Parthi Gadher .pdf" },
];

export const CERT_DRIVE =
  "https://drive.google.com/drive/folders/1fkDbLEkPEV7rc15HQPIb6fxbOiqJJmDd?usp=sharing";

export const RESUME_URL = "/Parthi_Gadher_Resume.pdf";
export const CONTACT_EMAIL = "parthigadher@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/parthi-gadher";
export const GITHUB_URL = "https://github.com/bobatea02-tech";

export const skills = [
  { category: "AI / ML", level: 92, items: ["Gemini", "LLM Pipelines", "RAG", "Prompt Engineering", "Context Pruning", "Scikit-learn", "Vector DBs"] },
  { category: "Languages", level: 88, items: ["Python", "TypeScript", "JavaScript", "C", "Java", "SQL"] },
  { category: "Frontend", level: 85, items: ["React", "TanStack", "Next.js", "Tailwind", "Framer Motion", "Vite"] },
  { category: "Backend", level: 82, items: ["FastAPI", "Node.js", "REST", "WebSockets", "Docker", "Auth"] },
  { category: "Data & Cloud", level: 78, items: ["PostgreSQL", "Supabase", "Vercel", "Render", "Cloudflare", "OpenWeather API"] },
  { category: "Tools", level: 86, items: ["Git", "GitHub Actions", "Postman", "Figma", "VS Code", "Linux"] },
];

export const timeline = [
  { year: "2023 – Present", title: "B.Tech in AI & Data Science", org: "Shah and Anchor Kutchhi Engineering College", detail: "CGPA 8.64 · Building AI products end-to-end" },
  { year: "2023", title: "HSC — Science (PCM)", org: "Maharashtra Board", detail: "70%" },
  { year: "2021", title: "SSC", org: "Maharashtra Board", detail: "88%" },
];
