import { ResumeData, StyleConfig } from "@/lib/types/resume";

// Modern Templates
import ModernProfessional from "./modern/ModernProfessional";
import TwoColumnModern from "./modern/TwoColumnModern";
import MinimalistElite from "./modern/MinimalistElite";
import BoldGeometric from "./modern/BoldGeometric";
import SplitScreen from "./modern/SplitScreen";
import ColorBlockResume from "./modern/ColorBlockResume";
import TechMinimal from "./modern/TechMinimal";
import GradientModern from "./modern/GradientModern";

// Creative Templates
import CreativePortfolio from "./creative/CreativePortfolio";
import MagazineLayout from "./creative/MagazineLayout";
import InfographicStyle from "./creative/InfographicStyle";
import TimelineCreative from "./creative/TimelineCreative";
import ArtisticBold from "./creative/ArtisticBold";
import VisualStoryteller from "./creative/VisualStoryteller";

// Professional Templates
import ATSFriendly from "./professional/ATSFriendly";
import ExecutiveModern from "./professional/ExecutiveModern";
import ClassicElegant from "./professional/ClassicElegant";
import CorporatePro from "./professional/CorporatePro";
import CompactEfficient from "./professional/CompactEfficient";

export interface TemplateInfo {
  id: string;
  name: string;
  category: "professional" | "modern" | "creative" | "minimalist";
  component: React.ComponentType<{ data: ResumeData; style: StyleConfig }>;
  thumbnail?: string;
  description: string;
  bestFor: string[];
  features: string[];
}

export const TEMPLATES: TemplateInfo[] = [
  {
    id: "modern-professional",
    name: "Modern Professional",
    category: "professional",
    component: ModernProfessional,
    description: "Clean single-column layout with bold section headers",
    bestFor: ["Corporate", "Management", "Consulting"],
    features: ["ATS-Compatible", "Print-Friendly", "Traditional"],
  },
  {
    id: "two-column-modern",
    name: "Two Column Modern",
    category: "modern",
    component: TwoColumnModern,
    description: "Eye-catching sidebar design with color accent",
    bestFor: ["Tech", "Marketing", "Design"],
    features: ["Colorful", "Visual", "Space-Efficient"],
  },
  {
    id: "creative-portfolio",
    name: "Creative Portfolio",
    category: "creative",
    component: CreativePortfolio,
    description: "Vibrant gradient header with portfolio-style layout",
    bestFor: ["Design", "Creative", "Startups", "Product"],
    features: ["Gradient", "Visual", "Projects"],
  },
  {
    id: "ats-friendly",
    name: "ATS Optimized",
    category: "professional",
    component: ATSFriendly,
    description: "Maximum compatibility with applicant tracking systems",
    bestFor: ["Corporate Jobs", "Large Companies", "Government"],
    features: ["ATS-Optimized", "Simple", "Machine-Readable"],
  },
  {
    id: "minimalist-elite",
    name: "Minimalist Elite",
    category: "minimalist",
    component: MinimalistElite,
    description: "Ultra-clean typography-focused design",
    bestFor: ["Executive", "Senior Roles", "Finance", "Law"],
    features: ["Elegant", "Typography", "Professional"],
  },
  {
    id: "bold-geometric",
    name: "Bold Geometric",
    category: "modern",
    component: BoldGeometric,
    description: "Dynamic angles and geometric shapes",
    bestFor: ["Tech", "Engineering", "Modern Companies"],
    features: ["Geometric", "Bold", "Modern"],
  },
  {
    id: "magazine-layout",
    name: "Magazine Layout",
    category: "creative",
    component: MagazineLayout,
    description: "Editorial-style multi-column design",
    bestFor: ["Media", "Publishing", "Communications"],
    features: ["Editorial", "Multi-Column", "Stylish"],
  },
  {
    id: "infographic-style",
    name: "Infographic Style",
    category: "creative",
    component: InfographicStyle,
    description: "Visual data presentation with progress bars",
    bestFor: ["Data", "Analytics", "Visual Roles"],
    features: ["Visual", "Data-Driven", "Colorful"],
  },
  {
    id: "executive-modern",
    name: "Executive Modern",
    category: "professional",
    component: ExecutiveModern,
    description: "Sophisticated design for senior positions",
    bestFor: ["C-Suite", "Directors", "VP Roles"],
    features: ["Elegant", "Spacious", "Premium"],
  },
  {
    id: "split-screen",
    name: "Split Screen",
    category: "modern",
    component: SplitScreen,
    description: "Dramatic dark/light contrast split design",
    bestFor: ["Creative Tech", "Design", "Startups"],
    features: ["Contrast", "Bold", "Modern"],
  },
  {
    id: "color-block",
    name: "Color Block Resume",
    category: "modern",
    component: ColorBlockResume,
    description: "Vibrant color blocks for visual impact",
    bestFor: ["Marketing", "Brand", "Creative"],
    features: ["Colorful", "Visual", "Modern"],
  },
  {
    id: "timeline-creative",
    name: "Timeline Creative",
    category: "creative",
    component: TimelineCreative,
    description: "Horizontal timeline showcasing career journey",
    bestFor: ["Creative", "Visual", "Storytelling"],
    features: ["Timeline", "Visual", "Unique"],
  },
  {
    id: "classic-elegant",
    name: "Classic Elegant",
    category: "professional",
    component: ClassicElegant,
    description: "Timeless professional design",
    bestFor: ["Law", "Finance", "Academia"],
    features: ["Traditional", "Professional", "Clean"],
  },
  {
    id: "tech-minimal",
    name: "Tech Minimal",
    category: "modern",
    component: TechMinimal,
    description: "Clean lines for technical professionals",
    bestFor: ["Software", "Engineering", "IT"],
    features: ["Minimal", "Technical", "Clean"],
  },
  {
    id: "artistic-bold",
    name: "Artistic Bold",
    category: "creative",
    component: ArtisticBold,
    description: "Expressive design for creative professionals",
    bestFor: ["Artists", "Designers", "Creative"],
    features: ["Bold", "Artistic", "Expressive"],
  },
  {
    id: "corporate-pro",
    name: "Corporate Pro",
    category: "professional",
    component: CorporatePro,
    description: "Professional corporate template",
    bestFor: ["Corporate", "Business", "Management"],
    features: ["Corporate", "Professional", "Structured"],
  },
  {
    id: "gradient-modern",
    name: "Gradient Modern",
    category: "modern",
    component: GradientModern,
    description: "Smooth gradients and modern aesthetics",
    bestFor: ["Tech", "Startups", "Modern"],
    features: ["Gradient", "Modern", "Stylish"],
  },
  {
    id: "compact-efficient",
    name: "Compact Efficient",
    category: "professional",
    component: CompactEfficient,
    description: "Maximum information in minimal space",
    bestFor: ["All Industries", "Experienced", "Dense Info"],
    features: ["Compact", "Efficient", "Space-Saving"],
  },
  {
    id: "visual-storyteller",
    name: "Visual Storyteller",
    category: "creative",
    component: VisualStoryteller,
    description: "Tell your career story visually",
    bestFor: ["Creative", "Marketing", "Brand"],
    features: ["Storytelling", "Visual", "Engaging"],
  },
];

export function getTemplateById(id: string) {
  return TEMPLATES.find((t) => t.id === id);
}

export function getTemplatesByCategory(category: string) {
  return TEMPLATES.filter((t) => t.category === category);
}

export const TEMPLATE_CATEGORIES = [
  { id: "all", name: "All Templates", count: TEMPLATES.length },
  {
    id: "professional",
    name: "Professional",
    count: TEMPLATES.filter((t) => t.category === "professional").length,
  },
  {
    id: "modern",
    name: "Modern",
    count: TEMPLATES.filter((t) => t.category === "modern").length,
  },
  {
    id: "creative",
    name: "Creative",
    count: TEMPLATES.filter((t) => t.category === "creative").length,
  },
  {
    id: "minimalist",
    name: "Minimalist",
    count: TEMPLATES.filter((t) => t.category === "minimalist").length,
  },
];
