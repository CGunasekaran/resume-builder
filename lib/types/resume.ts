export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
  summary: string;
  photo?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  highlights?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location?: string;
  startDate: string;
  graduationDate: string;
  gpa?: string;
  honors?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialId?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  startDate?: string;
  endDate?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
  projects: Project[];
  languages?: { language: string; proficiency: string }[];
  awards?: { title: string; issuer: string; date: string }[];
  hobbies?: string[];
}

export interface StyleConfig {
  templateId: string;
  fontFamily: "inter" | "roboto" | "playfair" | "montserrat" | "lato";
  fontSize: {
    name: number;
    heading: number;
    subheading: number;
    body: number;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  spacing: "compact" | "normal" | "relaxed";
  layout: "single-column" | "two-column" | "sidebar";
}

export interface Resume {
  id: string;
  userId?: string;
  data: ResumeData;
  style: StyleConfig;
  createdAt: Date;
  updatedAt: Date;
}
