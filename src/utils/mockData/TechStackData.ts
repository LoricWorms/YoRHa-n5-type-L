// src/utils/mockData/TechStackData.ts

export interface TechEntryContent {
  id: number;
  name: string;
  level: string; 
  yearsOfExperience: string;
  description: string[];
  image?: string; 
}

export interface TechCategory {
  category: string; 
  name: string; 
  technologies: TechEntryContent[];
}

const techStackData: TechCategory[] = [
  {
    category: "frontend",
    name: "Frontend Synchronization",
    technologies: [
      {
        id: 1,
        name: "React / Redux",
        level: "Combat Grade S",
        yearsOfExperience: "4+ cycles",
        description: [
          "Construction of high-performance user interfaces with React.js.",
          "Mastery of Hooks, Context API, and state management."
        ],
        image: "react_icon.png",
      },
      {
        id: 21,
        name: "Vue.js",
        level: "Combat Grade A",
        yearsOfExperience: "1+ cycle",
        description: [
          "Integration of complex Vue.js interfaces.",
          "Used in LDAP account management for large-scale operations."
        ],
        image: "vue_icon.png",
      },
      {
        id: 2,
        name: "TypeScript",
        level: "Combat Grade S",
        yearsOfExperience: "3+ cycles",
        description: [
          "Rigorous application of static typing for robust codebases."
        ],
        image: "typescript_icon.png",
      },
      {
        id: 3,
        name: "HTML5 & CSS3",
        level: "Combat Grade S",
        yearsOfExperience: "5+ cycles",
        description: [
          "Mastery of web standards and modern styling techniques."
        ],
        image: "html_css_icon.png",
      },
    ],
  },
  {
    category: "backend",
    name: "Backend Logic Core",
    technologies: [
      {
        id: 4,
        name: "PHP (Symfony, Laravel)",
        level: "Combat Grade S",
        yearsOfExperience: "3+ cycles",
        description: [
          "MVC Architecture design and implementation.",
          "Expert in Laravel (digitization) and Symfony (ticketing)."
        ],
        image: "php_icon.png",
      },
      {
        id: 22,
        name: "Java (Spring Boot)",
        level: "Combat Grade A",
        yearsOfExperience: "1+ cycle",
        description: [
          "Backend application development for directory management.",
          "Seamless integration with Vue.js frontends."
        ],
        image: "java_icon.png",
      },
      {
        id: 5,
        name: "Python (Django)",
        level: "Combat Grade B",
        yearsOfExperience: "2+ cycles",
        description: [
          "Creation of robust web applications and automation scripts."
        ],
        image: "python_icon.png",
      },
    ],
  },
  {
    category: "databases",
    name: "Data Storage Units",
    technologies: [
      {
        id: 6,
        name: "MySQL / PostgreSQL / SQLite",
        level: "Combat Grade A",
        yearsOfExperience: "3+ cycles",
        description: [
          "Schema modeling, complex query optimization, and CRUD management."
        ],
        image: "sql_icon.png",
      }
    ],
  },
  {
    category: "tools-devops",
    name: "Tactical Support & DevOps",
    technologies: [
      {
        id: 9,
        name: "Git / GitHub / GitLab",
        level: "Combat Grade S",
        yearsOfExperience: "5+ cycles",
        description: [
          "Advanced version control and team collaboration workflows."
        ],
        image: "git_icon.png",
      },
      {
        id: 10,
        name: "Docker",
        level: "Combat Grade B",
        yearsOfExperience: "1+ cycle",
        description: [
          "Application containerization and environment isolation."
        ],
        image: "docker_icon.png",
      },
      {
        id: 23,
        name: "VS Code / IntelliJ / Android Studio",
        level: "Combat Grade S",
        yearsOfExperience: "Persistent",
        description: [
          "Advanced mastery of IDE tactical environments."
        ],
        image: "ide_icon.png",
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
