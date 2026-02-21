let ItemsData = [
  {
    name: "React Engine",
    type: "frameworks",
    image: "",
    description: ["Core frontend synchronization module. High-performance rendering detected."],
    quantity: 95,
    id: 1,
  },
  {
    name: "PHP Symfony/Laravel",
    type: "frameworks",
    image: "",
    description: ["Robust backend frameworks. Optimized for business process digitization."],
    quantity: 90,
    id: 2,
  },
  {
    name: "Java Spring Boot",
    type: "frameworks",
    image: "",
    description: ["Enterprise-grade backend unit. High-bandwidth data processing."],
    quantity: 85,
    id: 3,
  },
  {
    name: "Vue.js Module",
    type: "frameworks",
    image: "",
    description: ["Reactive frontend synchronization module. Fast UI deployment."],
    quantity: 88,
    id: 12,
  },
  {
    name: "Agile Methodology",
    type: "enhancement",
    image: "",
    description: ["Scrum and Kanban tactical workflows. Increases team synchronization."],
    quantity: 90,
    id: 4,
  },
  {
    name: "Git / GitLab / GitHub",
    type: "support",
    image: "",
    description: ["Version control communication protocols. Essential for collaborative missions."],
    quantity: 94,
    id: 8,
  },
  {
    name: "IntelliJ / Android Studio",
    type: "support",
    image: "",
    description: ["Heavy tactical IDEs for Java and Android deployments."],
    quantity: 88,
    id: 13,
  },
  {
    name: "PostgreSQL / MySQL",
    type: "materials",
    image: "",
    description: ["Relational data storage units. Ensures information persistence."],
    quantity: 86,
    id: 9,
  },
  {
    name: "Bachelor's Degree",
    type: "key",
    image: "",
    description: ["Current authorization of advanced software engineering capabilities. [EPSI]"],
    quantity: 1,
    id: 10,
  },
  {
    name: "BTS SIO [SLAM]",
    type: "key",
    image: "",
    description: ["Validated tactical certificate in software solutions and applications."],
    quantity: 1,
    id: 14,
  },
  {
    name: "Legendary Game Pad",
    type: "fish",
    image: "",
    description: ["A relic from the past. Still functional for recreation during downtime."],
    quantity: 3,
    id: 11,
  }
];

export function getItemsData(){
  return ItemsData;
}

export function getItemsId(id){
  return ItemsData.find((item) => item.id === id);
}
