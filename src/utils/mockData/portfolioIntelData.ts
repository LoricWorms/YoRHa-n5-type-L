// src/utils/mockData/portfolioIntelData.ts

export interface IntelEntryContent {
  title: string;
  id: number;
  image?: string;
  content: string[];
  descriptions?: string | null;
}

export interface DropDownIntelEntry {
  title: string;
  id: number;
  image?: string;
  content: string[];
  descriptions?: string | null;
}

export interface NestedIntelEntry {
  title: string;
  id: number;
  image?: string;
  content: string[];
  dropDownData: DropDownIntelEntry[];
}

export interface PortfolioIntelCategory {
  IntelType: string;
  data: IntelEntryContent[];
  nestedData: NestedIntelEntry[];
}

const portfolioIntelData: PortfolioIntelCategory[] = [
  {
    IntelType: "profile", 
    data: [
      {
        title: "Loric Worms - YORHA UNIT [DEVELO-TYPE]",
        id: 1,
        content: [
          "Currently in the 3rd year of a Bachelor's degree in Full Stack Development at EPSI Nantes, I am looking to apply my skills within an organization while continuing to grow my expertise.",
          "",
          "I specialize in Full Stack development with a focus on creating efficient business process digitization and modern web interfaces.",
          "",
          "Core Directive: Pursuit of technical excellence and innovative problem solving in both frontend and backend environments."
        ],
        descriptions: "[LOGISTIC NOTE]: Unit demonstrates high proficiency in multiple languages. Strategic interest in Japanese culture and Game Design detected.",
      },
    ],
    nestedData: [],
  },
  {
    IntelType: "skills", 
    data: [],
    nestedData: [
      {
        title: "Programming Languages [LOGIC CORES]",
        id: 10,
        content: ["Primary command sets for system operations."],
        dropDownData: [
          {
            title: "Java / PHP / Python",
            id: 11,
            content: ["Java (Spring Boot), PHP (Symfony, Laravel), Python (Django)."],
            descriptions: "Backend processing efficiency: High."
          },
          {
            title: "JavaScript / TypeScript",
            id: 12,
            content: ["Core scripting for interactive synchronization and type-safe architectures."],
          }
        ],
      },
      {
        title: "Web & Frontend [UI SYNC]",
        id: 20,
        content: ["Visual interface and responsive integration modules."],
        dropDownData: [
          {
            title: "React / Vue.js",
            id: 21,
            content: ["Modern component-based architecture and dynamic interface design."],
          },
          {
            title: "HTML5 / CSS3",
            id: 22,
            content: ["Standard web building blocks with advanced styling and responsive integration."],
          },
        ],
      },
      {
        title: "Database Units [DATA PERSISTENCE]",
        id: 30,
        content: ["Storage and retrieval systems for critical mission data."],
        dropDownData: [
          {
            title: "SQL & NoSQL",
            id: 31,
            content: ["MySQL, PostgreSQL, SQLite. Familiar with NoSQL concepts and CRUD management."],
          }
        ],
      },
    ],
  },
  {
    IntelType: "experience", 
    data: [],
    nestedData: [
      {
        title: "Field Operations History",
        id: 50,
        content: ["Record of successful deployments and missions."],
        dropDownData: [
          {
            title: "Apprenticeship @ WIKLOG (2025 - 2026)",
            id: 51,
            content: [
              "Development of a web application using PHP (Laravel) to digitize client business processes.",
              "Status: Ongoing deployment."
            ],
            descriptions: "Authority: Resistance Support (Digitization Division)."
          },
          {
            title: "Internship @ Ludwig Informatique (2025)",
            id: 52,
            content: [
              "Development of a ticketing application using PHP (Symfony).",
              "Restructuring and update of a showcase website using WordPress."
            ],
          },
          {
            title: "Internship @ Groupe Open (2024)",
            id: 53,
            content: [
              "Development of a Vue.js and Spring Boot application to manage and display LDAP directory accounts."
            ],
          },
        ],
      },
    ],
  },
  {
    IntelType: "education", 
    data: [
      {
        title: "Bachelor's Degree",
        id: 70,
        content: [
          "Full Stack Developer - EPSI Nantes (2025 - 2026)",
          "Authority: Council of Humanity."
        ],
      },
      {
        title: "BTS SIO [SLAM]",
        id: 71,
        content: [
          "Software Solutions and Business Applications - La Joliverie (2023 - 2025)"
        ],
      },
      {
        title: "General Baccalaureate",
        id: 72,
        content: [
          "Math / Computer Science Specialization - Lycée du Pays de Retz (2020 - 2023)"
        ],
      },
    ],
    nestedData: [],
  },
  {
    IntelType: "contact", 
    data: [
      {
        title: "Communications Terminal",
        id: 80,
        content: [
          "Email: loricworms@orange.fr",
          "Phone: 06 81 52 05 50",
          "Operational Area: Nantes / Pornic / Challans",
          "Languages: English (B2), Japanese (Notions)",
        ],
        descriptions: "Awaiting incoming transmission...",
      },
    ],
    nestedData: [],
  },
];

export function getPortfolioIntelData(): PortfolioIntelCategory[] {
  return portfolioIntelData;
}

export function getPortfolioIntelEntry(intelType: string, id: number): IntelEntryContent | DropDownIntelEntry | null {
  const category = portfolioIntelData.find(cat => cat.IntelType === intelType);
  if (!category) return null;

  const directEntry = category.data.find(entry => entry.id === id);
  if (directEntry) return directEntry;

  for (const nestedItem of category.nestedData) {
    const entry = nestedItem.dropDownData.find(entry => entry.id === id);
    if (entry) return entry;
  }

  return null;
}
