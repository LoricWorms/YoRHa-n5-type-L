// src/utils/mockData/portfolioIntelData.ts

// This file will house the new data structure for the "Intel" section of the portfolio.
// It maps the original game-themed categories to portfolio-relevant content.

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
    IntelType: "profile", // Personal Profile (About Me)
    data: [
      {
        title: "Loric Worms - Unité YORHA",
        id: 1,
        image: "", // You can add an image here later if desired
        content: [
          "Bonjour, je suis Loric Worms, un développeur passionné par la création d'expériences numériques immersives et fonctionnelles. Inspiré par des interfaces utilisateur élégantes et des systèmes robustes, je me spécialise dans le développement full-stack, avec une affinité particulière pour React et TypeScript.",
          "",
          "Ce portfolio est une démonstration de mes compétences et de ma créativité, conçu avec le même esprit d'ingéniosité que le design system de NieR: Automata.",
          "",
          "Mes intérêts vont de l'optimisation des performances à la conception d'architectures logicielles évolutives, en passant par l'exploration de nouvelles technologies et l'apport de solutions innovantes aux défis complexes."
        ],
        descriptions: null,
      },
    ],
    nestedData: [],
  },
  {
    IntelType: "skills", // Technical Skills
    data: [],
    nestedData: [
      {
        title: "Développement Frontend",
        id: 10,
        content: ["Maîtrise des technologies de pointe pour des interfaces utilisateur réactives et intuitives."],
        dropDownData: [
          {
            title: "React / Redux",
            id: 11,
            content: ["Expertise dans la construction de SPA complexes, gestion d'état centralisée et optimisation des performances. Expérience avec Next.js et Gatsby."],
          },
          {
            title: "TypeScript",
            id: 12,
            content: ["Application rigoureuse du typage statique pour des bases de code plus robustes et maintenables."],
          },
          {
            title: "HTML5 / CSS3 / SASS",
            id: 13,
            content: ["Création de layouts modernes, animations fluides et styles adaptatifs. Utilisation de Styled Components et Tailwind CSS."],
          },
        ],
      },
      {
        title: "Développement Backend",
        id: 20,
        content: ["Conception et implémentation d'APIs RESTful et GraphQL pour des applications évolutives et performantes."],
        dropDownData: [
          {
            title: "Node.js / Express.js",
            id: 21,
            content: ["Développement d'APIs scalables et de microservices, middleware personnalisés et authentification sécurisée."],
          },
          {
            title: "Python / Django / Flask",
            id: 22,
            content: ["Création d'applications web robustes, scripts d'automatisation et outils de traitement de données."],
          },
        ],
      },
      {
        title: "Bases de Données",
        id: 30,
        content: ["Modélisation et gestion de bases de données relationnelles et non-relationnelles."],
        dropDownData: [
          {
            title: "SQL (PostgreSQL, MySQL)",
            id: 31,
            content: ["Conception de schémas, requêtes complexes et optimisation des performances."],
          },
          {
            title: "NoSQL (MongoDB, Redis)",
            id: 32,
            content: ["Gestion de données non structurées et mise en cache pour des applications à haute performance."],
          },
        ],
      },
      {
        title: "Outils & DevOps",
        id: 40,
        content: ["Maîtrise des outils de développement et des pratiques DevOps pour des pipelines CI/CD efficaces."],
        dropDownData: [
          {
            title: "Git / GitHub",
            id: 41,
            content: ["Gestion de version, collaboration et revues de code."],
          },
          {
            title: "Docker / Kubernetes",
            id: 42,
            content: ["Conteneurisation d'applications, orchestration et déploiement."],
          },
          {
            title: "AWS / Google Cloud Platform",
            id: 43,
            content: ["Déploiement et gestion d'infrastructures cloud (EC2, S3, Lambda, GCP App Engine...)."],
          },
        ],
      },
    ],
  },
  {
    IntelType: "experience", // Professional Experience
    data: [],
    nestedData: [
      {
        title: "Développeur Full-Stack @ [Nom de l'Entreprise A] (2022 - Présent)",
        id: 50,
        content: ["Conception et développement de [description du projet 1], améliorant [métrique clé] de X%."],
        dropDownData: [
          {
            title: "Projet Alpha",
            id: 51,
            content: ["Responsable du développement frontend avec React/TypeScript. Implémentation d'une API RESTful avec Node.js. Réduction du temps de chargement de 30%."],
          },
          {
            title: "Projet Beta",
            id: 52,
            content: ["Migration d'une base de données MongoDB vers PostgreSQL. Optimisation des requêtes, améliorant les performances de 20%."],
          },
        ],
      },
      {
        title: "Développeur Frontend Junior @ [Nom de l'Entreprise B] (2020 - 2022)",
        id: 60,
        content: ["Participation au développement de [description du projet X], acquisition d'expérience en [technologies]."],
        dropDownData: [
          {
            title: "Site E-commerce",
            id: 61,
            content: ["Intégration de nouvelles fonctionnalités UI/UX avec React. Amélioration de l'accessibilité (WCAG 2.1)."],
          },
        ],
      },
    ],
  },
  {
    IntelType: "education", // Education & Certifications
    data: [
      {
        title: "Master en Ingénierie Logicielle",
        id: 70,
        image: "",
        content: ["[Nom de l'Université/École], [Ville], (2018 - 2023)", "Spécialisation en Intelligence Artificielle et Systèmes Distribués."],
        descriptions: null,
      },
      {
        title: "Certification AWS Certified Developer - Associate",
        id: 71,
        image: "",
        content: ["Obtenue en [Année]. Démontre des compétences en développement et déploiement sur AWS."],
        descriptions: null,
      },
    ],
    nestedData: [],
  },
  {
    IntelType: "contact", // Contact Information
    data: [
      {
        title: "Communications de l'Unité",
        id: 80,
        image: "",
        content: [
          "Email: [Votre Email]",
          "LinkedIn: [Lien LinkedIn]",
          "GitHub: [Lien GitHub (déjà présent via les projets)]",
          "Portfolio (ce site): [URL du site]",
        ],
        descriptions: "N'hésitez pas à me contacter pour toute opportunité ou question.",
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

  // Check in direct data
  const directEntry = category.data.find(entry => entry.id === id);
  if (directEntry) return directEntry;

  // Check in nested data dropdowns
  for (const nestedItem of category.nestedData) {
    const dropDownEntry = nestedItem.dropDownData.find(entry => dropDownEntry.id === id);
    if (dropDownEntry) return dropDownEntry;
  }

  return null;
}
