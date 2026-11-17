// ============================================================
// ALL WEBSITE CONTENT LIVES IN THIS FILE.
// To update your portfolio, edit the values below.
// You should not need to touch the components for content changes.
// ============================================================

import type { IconName } from "@/components/Icons";

// ---------- Types (describe the shape of the data) ----------

export type Service = {
  title: string;
  icon: IconName;
  tags: string[];
  description: string;
};

export type Project = {
  id: string; // Used for links, e.g. "View project" jumps to #ai-document-analysis
  title: string;
  category: string; // Used by the filter buttons in the Portfolio section
  icon: IconName;
  tags: string[];
  description: string;
  details: string[]; // Shown when "Project details" is opened in the timeline
};

// ---------- Profile (used across the whole site) ----------

export const profile = {
  fullName: "Yul Stewart C. Gurrea",
  shortName: "Yul Gurrea",
  initials: "YG",
  title: "Senior Software Engineer",
  location: "Philippines",
  email: "yulgurz@gmail.com",
  photo: "/images/profile.jpg",
  githubUrl: "https://github.com/yulstewartgurrea?tab=repositories",
  githubHandle: "@yulstewartgurrea",
  linkedinUrl: "https://www.linkedin.com/in/yul-gurrea-833a2313b/",
};

// ---------- Hero (top of the page) ----------

export const hero = {
  headline: "I build AI-powered",
  highlightedWord: "software.", // Shown in blue on its own line
  description:
    "I'm a senior software engineer in the Philippines. I build full-stack applications and turn complex financial workflows into reliable, auditable software.",
  focusAreas: ["AI Engineering", "Full-Stack Development", "Automation"],
};

// ---------- About ----------

export const about = {
  paragraphs: [
    "I build AI-powered applications and turn complex financial and regulatory workflows into reliable, auditable software.",
    "My work spans AI document analysis, credit risk automation, and full-stack development with Python and Next.js.",
  ],
};

// ---------- Experience ----------

export const experience = {
  title: "AI, financial automation, and web development",
  description:
    "My work has included leading projects in AI document analysis, expected credit loss automation, risk and capital stress testing, and AML name matching.",
  techStack: ["Python", "Django", "FastAPI", "React", "Next.js", "AWS"],
};

// ---------- Services ----------

export const services: Service[] = [
  {
    title: "AI Engineering",
    icon: "sparkle",
    tags: ["Document analysis", "LLM integration"],
    description:
      "Build AI features for document review and information extraction, with human review where decisions need it.",
  },
  {
    title: "Full-Stack Development",
    icon: "code",
    tags: ["Python", "Django", "Next.js"],
    description:
      "Build web applications end to end, from backend APIs and data models to responsive interfaces.",
  },
  {
    title: "Workflow Automation",
    icon: "network",
    tags: ["Financial modeling", "Reporting"],
    description:
      "Turn manual, spreadsheet-heavy workflows into repeatable calculations and reporting tools.",
  },
];

// ---------- Projects (used by "Selected projects" AND "Project milestones") ----------

export const projects: Project[] = [
  {
    id: "ai-document-analysis",
    title: "AI Document Analysis",
    category: "AI Engineering",
    icon: "document",
    tags: ["AI", "Document processing"],
    description: "AI-assisted document review and verification.",
    details: [
      "Built AI-driven workflows using LangChain and LLM APIs for website retrieval, document comparison, conversational workflows, and automated notifications.",
      "Delivered a document-comparison solution that achieved 95% accuracy in identifying discrepancies and similarities across evaluated datasets.",
    ],
  },
  {
    id: "ecl-automation",
    title: "ECL Automation",
    category: "Financial Automation",
    icon: "chart",
    tags: ["Python", "Financial automation"],
    description: "Automated expected credit loss calculations and reporting.",
    details: [
      "Developed an IFRS 9-aligned analytics solution for processing loan portfolios, applying statistical and macroeconomic models, and producing transparent, audit-ready ECL outputs.",
      "Automated data validation, financial calculations, and reporting workflows to reduce manual processing and standardize repeatable risk analysis.",
    ],
  },
  {
    id: "risk-capital-stress-testing",
    title: "Risk & Capital Stress Testing",
    category: "Financial Automation",
    icon: "chart",
    tags: ["Python", "Django", "Pandas"],
    description: "Scenario modeling for financial risk teams.",
    details: [
      "Automated financial forecasting and stressed risk calculations across multiple severity levels and economic scenarios.",
      "Used Python and Pandas for large-scale data processing, built validation controls, and automated publishing of outputs to enterprise collaboration platforms.",
    ],
  },
  {
    id: "aml-name-matching",
    title: "AML Name Matching",
    category: "AI Engineering",
    icon: "shield",
    tags: ["Python", "AI"],
    description: "Name screening and match evaluation.",
    details: [
      "Developed a name-matching and entity-resolution tool combining Levenshtein, Jaro-Winkler, Soundex, Metaphone, and BERT-based semantic matching to handle misspellings and complex name variations.",
    ],
  },
  {
    id: "elated",
    title: "Elated",
    category: "Web Development",
    icon: "code",
    tags: ["Django", "PostGIS", "AWS"],
    description: "Backend engineering for a matching app.",
    details: [
      "Built the real-time multiplayer guest-games platform using Django Channels and Redis, covering matchmaking queues, lobbies, invitations, and live WebSocket game sessions.",
      "Co-developed the location-based matching engine using PostGIS radius search, questionnaire-based compatibility scoring, travel-mode matching, and batched background jobs.",
      "Remediated all 38 findings from a security audit, including 6 critical and 12 high-severity issues, without breaking existing mobile or web clients.",
      "Built Apple, Google, and Facebook sign-in, plus Stripe payments, in-app credits, leaderboards, streaks, and Firebase push notifications.",
      "Added an OpenAI-powered AI chat companion with a dedicated background queue.",
    ],
  },
];
