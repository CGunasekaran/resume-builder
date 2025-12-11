import ModernProfessional from "./modern/ModernProfessional";
import TwoColumnModern from "./modern/TwoColumnModern";
import CreativePortfolio from "./creative/CreativePortfolio";
import ATSFriendly from "./professional/ATSFriendly";
import MinimalistElite from "./modern/MinimalistElite";

export interface TemplateInfo {
  id: string;
  name: string;
  category: "professional" | "modern" | "creative" | "minimalist";
  component: React.ComponentType<any>;
  thumbnail?: string;
  description: string;
  bestFor: string[];
}

export const TEMPLATES: TemplateInfo[] = [
  {
    id: "modern-professional",
    name: "Modern Professional",
    category: "professional",
    component: ModernProfessional,
    description: "Clean single-column layout with bold section headers",
    bestFor: ["Corporate", "Management", "Consulting"],
  },
  {
    id: "two-column-modern",
    name: "Two Column Modern",
    category: "modern",
    component: TwoColumnModern,
    description: "Eye-catching sidebar design with color accent",
    bestFor: ["Tech", "Marketing", "Design"],
  },
  {
    id: "creative-portfolio",
    name: "Creative Portfolio",
    category: "creative",
    component: CreativePortfolio,
    description: "Vibrant gradient header with portfolio-style layout",
    bestFor: ["Design", "Creative", "Startups", "Product"],
  },
  {
    id: "ats-friendly",
    name: "ATS Optimized",
    category: "professional",
    component: ATSFriendly,
    description: "Maximum compatibility with applicant tracking systems",
    bestFor: ["Corporate Jobs", "Large Companies", "Government"],
  },
  {
    id: "minimalist-elite",
    name: "Minimalist Elite",
    category: "minimalist",
    component: MinimalistElite,
    description: "Ultra-clean typography-focused design",
    bestFor: ["Executive", "Senior Roles", "Finance", "Law"],
  },
];

export function getTemplateById(id: string) {
  return TEMPLATES.find((t) => t.id === id);
}

export function getTemplatesByCategory(category: string) {
  return TEMPLATES.filter((t) => t.category === category);
}
