// ============================================================
// ALL WEBSITE CONTENT LIVES IN THIS FILE.
// To update your portfolio, edit the values below.
// You should not need to touch the components for content changes.
// ============================================================

// ---------- Types (describe the shape of the data) ----------

export type Project = {
  id: string; // "View project" jumps to the experience entry with the same id
  title: string;
  category: string; // Used by the filter buttons in the Portfolio section
  image?: string; // Optional: screenshot or workflow diagram, e.g. "/images/projects/ecl.png"
  tags: string[];
  description: string;
};

// A client project done while working at a company (e.g. the SGV engagements).
export type Engagement = {
  id?: string; // Optional: lets a project card link here
  name: string;
  role: string;
  period?: string;
  highlights: string[];
};

// One job in the Professional Experience timeline.
// Everything marked "?" is optional and only shown when filled in.
export type Job = {
  id?: string; // Optional: lets a project card link here
  role: string;
  company: string;
  companyNote?: string; // Shown after the company name, e.g. the department
  period?: string;
  location?: string;
  note?: string; // Small italic note, e.g. about confidentiality
  stack?: string; // "Stack: ..." line
  highlights?: string[];
  engagements?: Engagement[];
};

// ---------- Profile (used across the whole site) ----------

export const profile = {
  fullName: "Yul Stewart C. Gurrea",
  shortName: "Yul Gurrea",
  initials: "YG",
  title: "Software Engineer",
  location: "Philippines",
  email: "yulgurz@gmail.com",
  photo: "/images/profile.jpg",
  githubUrl: "https://github.com/yulstewartgurrea?tab=repositories",
  githubHandle: "@yulstewartgurrea",
  linkedinUrl: "https://www.linkedin.com/in/yul-gurrea-833a2313b/",
};

// ---------- Hero (top of the page) ----------

export const hero = {
  headline: "Software",
  highlightedWord: "Engineer", // Shown in blue, right after the headline
  description:
    "I'm a Software Engineer based in the Philippines, specializing in full-stack development, backend systems, and AI-powered applications. I design and build scalable, reliable software that solves real-world problems and delivers meaningful value.",
  focusAreas: ["AI Engineering", "Full-Stack Development", "Automation"],
};

// ---------- About ----------

export const about = {
  paragraphs: [
    "My background is in full-stack development, with most of my experience on the backend, building applications and automating business processes with Python. Python is my strongest language, but I’m not tied to one tech stack. I’m comfortable working across the frontend, backend, and cloud, and I can adapt to new technologies when the project calls for them.",
    "What I enjoy most is taking a business problem and building a system around it. That could mean developing a new application, improving an existing platform, or automating a manual process. I like understanding what the team needs and turning those requirements into software that’s reliable, easy to use, and easy to maintain. For me, the goal is to build something that improves how the business operates.",
  ],
};

// ---------- Projects ("Selected projects" section) ----------

export const projects: Project[] = [
  {
    id: "ai-document-analysis",
    title: "AI Document Analysis",
    category: "AI Engineering",
    tags: ["AI", "Document processing"],
    description: "AI-assisted document review and verification.",
  },
  {
    id: "ecl-automation",
    title: "ECL Automation",
    category: "Financial Automation",
    tags: ["Python", "Financial automation"],
    description: "Automated expected credit loss calculations and reporting.",
  },
  {
    id: "risk-capital-stress-testing",
    title: "Risk & Capital Stress Testing",
    category: "Financial Automation",
    tags: ["Python", "Django", "Pandas"],
    description: "Scenario modeling for financial risk teams.",
  },
  {
    id: "aml-name-matching",
    title: "AML Name Matching",
    category: "AI Engineering",
    tags: ["Python", "AI"],
    description: "Name screening and match evaluation.",
  },
  {
    id: "elated",
    title: "Elated",
    category: "Web Development",
    tags: ["Django", "PostGIS", "AWS"],
    description: "Backend engineering for a matching app.",
  },
];

// ---------- Professional Experience (full text from the resume, newest first) ----------

export const experiences: Job[] = [
  {
    role: "Senior Developer, Technology Consulting",
    company: "SGV & Co.",
    companyNote: "FSO Technology Consulting, Digital Engineering Practice",
    period: "May 2022 - Present",
    location: "Philippines",
    note: "Selected engagements are anonymized to protect client and internal project confidentiality.",
    engagements: [
      {
        name: "Agentic AI Platform | Financial Services",
        role: "Contributor",
        period: "Mar 2026 - Present",
        highlights: [
          "Built a full-stack agentic AI platform that automates PFRS 9 / IFRS 9 Expected Credit Loss (ECL) computations while keeping financial calculations deterministic and auditable.",
          "Architected a skill-based workflow engine that embeds financial algorithms inside LLM-driven pipelines; achieved 100% numerical accuracy in controlled evaluation scenarios across tested model configurations.",
          "Developed backend and AI services with FastAPI, LangChain, LangGraph, PostgreSQL/pgvector, multi-provider LLM support, RAG retrieval, streaming responses, and session management.",
          "Built the frontend with Next.js, React, TypeScript, and Tailwind CSS, including real-time chat streaming, tabular previews, interactive visualizations, and file workflows.",
          "Integrated real-time voice using LiveKit/WebRTC, speech-to-text, and text-to-speech; designed evaluation covering accuracy, precision, recall, F1, latency, token usage, and cost.",
        ],
      },
      {
        id: "ecl-automation",
        name: "Expected Credit Loss Automation | Financial Services",
        role: "Lead Developer",
        period: "Nov 2025 - Mar 2026",
        highlights: [
          "Developed an IFRS 9-aligned analytics solution for processing loan portfolios, applying statistical and macroeconomic models, and producing transparent, audit-ready ECL outputs.",
          "Automated data validation, financial calculations, and reporting workflows to reduce manual processing and standardize repeatable risk analysis.",
        ],
      },
      {
        id: "ai-document-analysis",
        name: "AI Document Analysis & Monitoring | Financial Services",
        role: "Lead Developer",
        period: "Mar 2024 - Feb 2025",
        highlights: [
          "Built AI-driven workflows using LangChain and LLM APIs for website retrieval, document comparison, conversational workflows, and automated notifications.",
          "Delivered a document-comparison solution that achieved 95% accuracy in identifying discrepancies and similarities across evaluated datasets.",
        ],
      },
      {
        id: "risk-capital-stress-testing",
        name: "Risk & Capital Stress Testing | Banking",
        role: "Lead Developer",
        highlights: [
          "Automated financial forecasting and stressed risk calculations across multiple severity levels and economic scenarios.",
          "Used Python and Pandas for large-scale data processing, built validation controls, and automated publishing of outputs to enterprise collaboration platforms.",
        ],
      },
      {
        id: "aml-name-matching",
        name: "AML Name Matching | Compliance",
        role: "Lead Developer",
        period: "May 2024 - Jun 2024",
        highlights: [
          "Developed a name-matching and entity-resolution tool combining Levenshtein, Jaro-Winkler, Soundex, Metaphone, and BERT-based semantic matching to handle misspellings and complex name variations.",
        ],
      },
      {
        name: "Financial Services & Risk Management Application",
        role: "Lead Developer",
        period: "Apr 2023 - Jun 2024",
        highlights: [
          "Developed application workflows for credit scorecard validation and ECL calculations, reducing manual effort and improving consistency of data processing and reporting.",
          "Created user-facing workflows for data input, validation execution, and detailed report generation.",
        ],
      },
      {
        name: "Large-Scale Online Registration Platform | Public Sector",
        role: "Contributor",
        period: "Jun 2022 - Mar 2024",
        highlights: [
          "Contributed to a large-scale web platform supporting end-to-end registration and profile updates, including reusable UI components, API integrations, validation logic, and workflow automation.",
        ],
      },
    ],
  },
  {
    id: "elated",
    role: "Lead Backend Developer",
    company: "Elated",
    companyNote: "Dating & social-gaming app",
    stack:
      "Python, Django 5, Django REST Framework, Django Channels (WebSockets), PostgreSQL/PostGIS, Redis, Celery, AWS ECS/S3/Secrets Manager, Docker, GitHub Actions, Stripe, Firebase, OpenAI",
    highlights: [
      "Built the real-time multiplayer guest-games platform using Django Channels and Redis, covering matchmaking queues, lobbies, invitations, and live WebSocket game sessions; resolved intermittent disconnects and missed broadcast events.",
      "Co-developed the location-based matching engine using PostGIS radius search, questionnaire-based compatibility scoring, travel-mode matching, and batched background jobs designed to prevent duplicate matches.",
      "Remediated all 38 findings from a security audit, including 6 critical and 12 high-severity issues, closing IDOR vulnerabilities and adding CORS allowlisting, rate limiting, HMAC-signed tokens, and safer WebSocket authentication. Used configuration switches to ship fixes without breaking existing mobile or web clients.",
      "Built authentication integrations for Apple, Google, and Facebook, including Apple token revocation on account deletion and push-token cleanup on logout to prevent notifications from reaching the wrong account.",
      "Delivered payment and engagement features including Stripe payments/webhooks, in-app credits, encrypted QR transactions, achievements, leaderboards, timezone-aware streaks, and Firebase push notifications.",
      "Added an OpenAI-powered AI chat companion with a dedicated background queue and improved AI bot behavior for in-app word and emoji games.",
    ],
  },
];

// Shown under "Earlier software engineering experience"
export const earlierExperiences: Job[] = [
  {
    role: "Backend / Automation Engineering",
    company: "Spothop",
    highlights: [
      "Built REST APIs using Django, FastAPI, and Flask for backend services and integrations.",
      "Developed Selenium-based web scraping and automation scripts; used MongoDB and Git for data storage and source control.",
    ],
  },
  {
    role: "Full-Stack Development",
    company: "Exemplarsoft",
    highlights: [
      "Developed an e-learning platform with Angular and RESTful services backed by PostgreSQL.",
      "Used Git for version control and worked with AWS services as part of application delivery.",
    ],
  },
  {
    role: "Software / Database Engineering",
    company: "Mesasix",
    highlights: [
      "Reverse-engineered database queries for dental practice management systems including Dentrix, Eaglesoft, and OpenDental.",
      "Resolved database performance issues, created automation scripts, and implemented client-requested features through development, testing, and debugging.",
    ],
  },
];
