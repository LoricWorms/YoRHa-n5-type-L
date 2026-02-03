// src/utils/mockData/TechStackData.ts

// This file defines the data structure for the "Arsenal" section (Tech Stack).

export interface TechEntryContent {
  id: number;
  name: string;
  level: string; // e.g., "Expert", "Proficient", "Familiar"
  yearsOfExperience: string;
  description: string[];
  image?: string; // Path to an icon or image for the technology
  // Add more relevant properties as needed (e.g., projects using it)
}

export interface TechCategory {
  category: string; // e.g., "frontend", "backend", "databases"
  name: string; // Display name, e.g., "Frontend Development"
  technologies: TechEntryContent[];
}

const techStackData: TechCategory[] = [
  {
    category: "frontend",
    name: "Développement Frontend",
    technologies: [
      {
        id: 1,
        name: "React",
        level: "Expert",
        yearsOfExperience: "4+ ans",
        description: [
          "Construction d'interfaces utilisateur interactives et performantes avec React.js.",
          "Maîtrise des Hooks, Context API, Redux pour la gestion d'état.",
          "Expérience avec l'écosystème React (Next.js, Gatsby, CRA)."
        ],
        image: "react_icon.png", // Placeholder for an icon
      },
      {
        id: 2,
        name: "TypeScript",
        level: "Expert",
        yearsOfExperience: "3+ ans",
        description: [
          "Application rigoureuse du typage statique pour des bases de code robustes et maintenables.",
          "Réduction des erreurs et amélioration de la collaboration en équipe."
        ],
        image: "typescript_icon.png",
      },
      {
        id: 3,
        name: "HTML5 & CSS3",
        level: "Expert",
        yearsOfExperience: "5+ ans",
        description: [
          "Maîtrise des standards web et des techniques de stylisation modernes.",
          "Expérience avec SASS/SCSS, Styled Components, Tailwind CSS et animations CSS."
        ],
        image: "html_css_icon.png",
      },
    ],
  },
  {
    category: "backend",
    name: "Développement Backend",
    technologies: [
      {
        id: 4,
        name: "Node.js & Express.js",
        level: "Proficient",
        yearsOfExperience: "3+ ans",
        description: [
          "Conception et implémentation d'APIs RESTful performantes et scalables.",
          "Gestion des requêtes, middlewares, authentification et bases de données."
        ],
        image: "nodejs_icon.png",
      },
      {
        id: 5,
        name: "Python & Django/Flask",
        level: "Familiar",
        yearsOfExperience: "2+ ans",
        description: [
          "Développement d'applications web robustes avec Django et Flask.",
          "Scripts d'automatisation, traitement de données et intégrations système."
        ],
        image: "python_icon.png",
      },
    ],
  },
  {
    category: "databases",
    name: "Bases de Données",
    technologies: [
      {
        id: 6,
        name: "PostgreSQL",
        level: "Proficient",
        yearsOfExperience: "3+ ans",
        description: [
          "Modélisation de schémas, requêtes complexes et optimisation des performances.",
          "Utilisation d'ORM comme TypeORM/Sequelize."
        ],
        image: "postgresql_icon.png",
      },
      {
        id: 7,
        name: "MongoDB",
        level: "Familiar",
        yearsOfExperience: "2+ ans",
        description: [
          "Gestion de données NoSQL, agrégations et indexation.",
          "Adapté pour les données flexibles et les applications à forte croissance."
        ],
        image: "mongodb_icon.png",
      },
      {
        id: 8,
        name: "Redis",
        level: "Familiar",
        yearsOfExperience: "1+ an",
        description: [
          "Mise en cache, gestion de sessions et messagerie en temps réel.",
          "Amélioration des performances des applications distribuées."
        ],
        image: "redis_icon.png",
      },
    ],
  },
  {
    category: "tools-devops",
    name: "Outils & DevOps",
    technologies: [
      {
        id: 9,
        name: "Git & GitHub",
        level: "Expert",
        yearsOfExperience: "5+ ans",
        description: [
          "Gestion de versions, collaboration et workflows d'intégration continue.",
          "Utilisation avancée des branches, merges, rebases."
        ],
        image: "git_icon.png",
      },
      {
        id: 10,
        name: "Docker",
        level: "Proficient",
        yearsOfExperience: "2+ ans",
        description: [
          "Conteneurisation d'applications, orchestration et déploiement.",
          "Création d'environnements de développement isolés et reproductibles."
        ],
        image: "docker_icon.png",
      },
      {
        id: 11,
        name: "AWS",
        level: "Familiar",
        yearsOfExperience: "1+ an",
        description: [
          "Déploiement et gestion d'infrastructures cloud (EC2, S3, Lambda, RDS).",
          "Mise en place de CI/CD et de services serverless."
        ],
        image: "aws_icon.png",
      },
    ],
  },
];

export function getTechStackCategories(): TechCategory[] {
  return techStackData;
}

export function getTechEntriesByCategory(categoryName: string): TechEntryContent[] {
  const category = techStackData.find(cat => cat.category === categoryName);
  return category ? category.technologies : [];
}

export function getTechEntryById(categoryId: string, techId: number): TechEntryContent | null {
  const category = techStackData.find(cat => cat.category === categoryId);
  if (!category) return null;
  return category.technologies.find(tech => tech.id === techId) || null;
}