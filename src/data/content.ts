export const person = {
  name: "Biswaranjan Nayak",
  role: "Fullstack Developer",
  yearsRaw: "14+",
  tagline:
    "Building web applications, enterprise software, communication systems, SDKs and real-time technologies.",
};

export type TechCluster = {
  id: string;
  label: string;
  hint: string;
  items: { name: string; weight?: number }[];
};

export const techClusters: TechCluster[] = [
  {
    id: "frontend",
    label: "Frontend",
    hint: "Interfaces & experiences",
    items: [
      { name: "React", weight: 1 },
      { name: "Angular", weight: 1 },
      { name: "TypeScript", weight: 1 },
      { name: "JavaScript", weight: 1 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    hint: "Application logic & APIs",
    items: [
      { name: "C#", weight: 1 },
      { name: ".NET", weight: 1 },
      { name: "Node.js", weight: 1 },
    ],
  },
  {
    id: "data",
    label: "Data",
    hint: "Persistence & storage",
    items: [
      { name: "MongoDB", weight: 1 },
      { name: "PostgreSQL", weight: 1 },
      { name: "MS SQL", weight: 1 },
      { name: "MySQL", weight: 1 },
      { name: "SQLite", weight: 1 },
    ],
  },
  {
    id: "comm",
    label: "Communication",
    hint: "Voice & real-time",
    items: [
      { name: "PJSIP", weight: 1 },
      { name: "WebRTC", weight: 1 },
      { name: "TAPI", weight: 1 },
      { name: "Avaya", weight: 1 },
    ],
  },
  {
    id: "systems",
    label: "Systems",
    hint: "Native & low-level",
    items: [
      { name: "C", weight: 1 },
      { name: "Windows Native", weight: 1 },
      { name: "SDK Design", weight: 1 },
    ],
  },
];

export type CareerNode = {
  id: string;
  year: string;
  years?: string;
  company: string;
  role: string;
  summary: string;
  scale: number; // relative visual scale
};

export const career: CareerNode[] = [
  {
    id: "niit",
    year: "2010",
    years: "2010 – 2011",
    company: "NIIT",
    role: "Faculty",
    summary: "Mentored students in programming fundamentals & software engineering practice.",
    scale: 0.55,
  },
  {
    id: "cord",
    year: "2010",
    years: "2010 – 2012",
    company: "CORD",
    role: "Faculty",
    summary: "Chinmaya Organization of Rural Development — training initiative.",
    scale: 0.6,
  },
  {
    id: "cnet",
    year: "2011",
    years: "2011 – 2012",
    company: "CNET",
    role: "Faculty",
    summary: "Center of Networking Education — networks, systems and applied programming.",
    scale: 0.65,
  },
  {
    id: "cadence",
    year: "2012",
    years: "2012 – 2015",
    company: "Cadence Software Solutions Pvt. Ltd.",
    role: "Software Developer",
    summary: "Built production applications and moved from taught theory into shipping systems.",
    scale: 0.82,
  },
  {
    id: "vis",
    year: "2015",
    years: "2015 – Present",
    company: "VIS Networks Pvt. Ltd.",
    role: "Tech Lead",
    summary:
      "Leading the engineering of communication systems, SDKs and enterprise integrations across telephony, WebRTC and native Windows layers.",
    scale: 1.15,
  },
];

export type EducationNode = {
  id: string;
  year: string;
  degree: string;
  institution: string;
};

export const education: EducationNode[] = [
  { id: "hsc", year: "2003", degree: "HSC", institution: "BSE, Odisha" },
  { id: "isc", year: "2006", degree: "ISC", institution: "CHSE, Odisha" },
  { id: "bsc", year: "2009", degree: "B.Sc.", institution: "Sambalpur University" },
  { id: "gniit", year: "2010", degree: "GNIIT", institution: "NIIT University" },
  { id: "btech", year: "2013", degree: "B.Tech", institution: "NIT, Rourkela" },
  { id: "mtech", year: "2015", degree: "M.Tech", institution: "NIT, Rourkela" },
];

export type Project = {
  id: string;
  domain: string;
  name: string;
  category: string;
  description: string;
  motif: "filigree" | "gem" | "network-blue" | "network-orange";
};

export const projects: Project[] = [
  {
    id: "ambuja",
    domain: "AmbujaExporters.in",
    name: "Ambuja Exporters",
    category: "Handicrafts & Filigree",
    description:
      "A catalog experience for handcrafted metalwork and filigree — celebrating precision, texture and craft.",
    motif: "filigree",
  },
  {
    id: "tarini",
    domain: "tariniexporters.in",
    name: "Tarini Exporters",
    category: "Gemstones",
    description:
      "A quiet, luxury showcase for gemstones — dark backdrop, controlled reflections, focused product moments.",
    motif: "gem",
  },
  {
    id: "paxblue",
    domain: "paxblue.in",
    name: "PaxBlue",
    category: "Multi-level Marketing",
    description:
      "A networked platform visualizing hierarchy, distribution and interconnected participants.",
    motif: "network-blue",
  },
  {
    id: "pramax",
    domain: "pramax.in",
    name: "Pramax",
    category: "Multi-level Marketing",
    description:
      "A sibling network platform — separate identity, consistent engineering DNA underneath.",
    motif: "network-orange",
  },
];

export type Product = {
  id: string;
  name: string;
  kind: string;
  intro: string;
  layers: { label: string; kind: "web" | "sdk" | "engine" | "native" | "protocol" | "signal" }[];
  deployments?: string[];
};

export const products: Product[] = [
  {
    id: "radix",
    name: "RADIX",
    kind: "Softphone Engine",
    intro:
      "A softphone engine bridging browser interfaces to a native voice stack — written in C and C# on top of PJSIP, exposed to the web through a JavaScript SDK.",
    layers: [
      { label: "Browser", kind: "web" },
      { label: "JavaScript SDK", kind: "sdk" },
      { label: "RADIX", kind: "engine" },
      { label: "C / C#", kind: "native" },
      { label: "PJSIP", kind: "protocol" },
      { label: "Communication", kind: "signal" },
    ],
  },
  {
    id: "vision",
    name: "VISION",
    kind: "Screen Recording Engine",
    intro:
      "A screen capture pipeline that exposes a native Windows recording layer to any web application through a JavaScript SDK.",
    layers: [
      { label: "Web Application", kind: "web" },
      { label: "JavaScript SDK", kind: "sdk" },
      { label: "VISION", kind: "engine" },
      { label: "Windows Native Layer", kind: "native" },
      { label: "Screen", kind: "signal" },
    ],
  },
  {
    id: "webrtc",
    name: "WebRTC Wrapper SDK",
    kind: "Real-time Communication",
    intro:
      "A JavaScript SDK wrapping WebRTC to bring telephone and real-time communication features into web applications with a stable, simple interface.",
    layers: [
      { label: "Browser", kind: "web" },
      { label: "JavaScript SDK", kind: "sdk" },
      { label: "WebRTC Wrapper", kind: "engine" },
      { label: "Real-Time Communication", kind: "signal" },
    ],
  },
  {
    id: "telephony",
    name: "Enterprise Telephony",
    kind: "Communication Applications",
    intro:
      "Rich-feature telephony applications integrating with enterprise voice infrastructure — TAPI, Avaya IP Office and Avaya POM.",
    layers: [
      { label: "Application", kind: "web" },
      { label: "SDK", kind: "sdk" },
      { label: "TAPI / Avaya", kind: "protocol" },
      { label: "Endpoints", kind: "signal" },
    ],
    deployments: [
      "FANUC India — TAPI + Avaya IP Office",
      "Eros International — TAPI + Avaya IP Office (IVR)",
      "Tech Mahindra — Avaya POM",
    ],
  },
];

export type DNABranch = {
  id: string;
  label: string;
  angle: number; // degrees
  detail: string;
};

export const dnaBranches: DNABranch[] = [
  { id: "fullstack", label: "FULLSTACK", angle: -90, detail: "Web · API · Data" },
  { id: "enterprise", label: "ENTERPRISE", angle: -45, detail: "Integrations · Scale" },
  { id: "telephony", label: "TELEPHONY", angle: 0, detail: "TAPI · Avaya" },
  { id: "sdk", label: "SDK", angle: 45, detail: "JS · C# · C" },
  { id: "webrtc", label: "WEBRTC", angle: 90, detail: "Real-time voice" },
  { id: "native", label: "NATIVE", angle: 135, detail: "Windows · C" },
  { id: "database", label: "DATABASE", angle: 180, detail: "SQL · NoSQL" },
  { id: "leadership", label: "TECH LEADERSHIP", angle: -135, detail: "Teams · Architecture" },
];

export const architectureLayers = [
  { id: "frontend", name: "Frontend", tech: "React · Angular · TypeScript" },
  { id: "api", name: "API", tech: "REST · gRPC · WebSocket" },
  { id: "logic", name: "Business Logic", tech: "C# .NET · Node.js" },
  { id: "services", name: "Services", tech: "SDK · Microservices" },
  { id: "database", name: "Database", tech: "SQL · NoSQL" },
  { id: "infra", name: "Infrastructure", tech: "Windows Native · OS" },
];
