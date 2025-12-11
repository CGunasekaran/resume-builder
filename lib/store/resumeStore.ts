import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ResumeData, StyleConfig } from "../types/resume";

interface ResumeStore {
  resumeData: ResumeData;
  styleConfig: StyleConfig;
  setResumeData: (data: Partial<ResumeData>) => void;
  setStyleConfig: (config: Partial<StyleConfig>) => void;
  updatePersonalInfo: (info: Partial<ResumeData["personalInfo"]>) => void;
  addExperience: (exp: ResumeData["experience"][0]) => void;
  updateExperience: (
    id: string,
    exp: Partial<ResumeData["experience"][0]>
  ) => void;
  deleteExperience: (id: string) => void;
  addEducation: (edu: ResumeData["education"][0]) => void;
  updateEducation: (
    id: string,
    edu: Partial<ResumeData["education"][0]>
  ) => void;
  deleteEducation: (id: string) => void;
  addSkill: (skill: ResumeData["skills"][0]) => void;
  updateSkill: (index: number, skill: Partial<ResumeData["skills"][0]>) => void;
  deleteSkill: (index: number) => void;
  addCertification: (cert: ResumeData["certifications"][0]) => void;
  updateCertification: (
    id: string,
    cert: Partial<ResumeData["certifications"][0]>
  ) => void;
  deleteCertification: (id: string) => void;
  addAward: (award: { title: string; issuer: string; date: string }) => void;
  updateAward: (
    index: number,
    award: Partial<{ title: string; issuer: string; date: string }>
  ) => void;
  deleteAward: (index: number) => void;
  addHobby: (hobby: string) => void;
  updateHobby: (index: number, hobby: string) => void;
  deleteHobby: (index: number) => void;
  resetResume: () => void;
}

const defaultResumeData: ResumeData = {
  personalInfo: {
    name: "John Doe",
    title: "Senior Software Engineer",
    email: "john.doe@email.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    summary:
      "Experienced software engineer with 5+ years developing scalable web applications and leading cross-functional teams.",
  },
  experience: [
    {
      id: "1",
      company: "Tech Corp",
      position: "Senior Software Engineer",
      location: "San Francisco, CA",
      startDate: "2022-01-01",
      endDate: "",
      current: true,
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Built React applications and Node.js APIs",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      id: "2",
      company: "StartupCo",
      position: "Software Developer",
      location: "San Jose, CA",
      startDate: "2020-06-01",
      endDate: "2021-12-31",
      current: false,
      description: [
        "Developed full-stack web applications using React, Node.js, and PostgreSQL",
        "Improved application performance by 40%",
        "Collaborated with design team to implement user interfaces",
      ],
    },
  ],
  education: [
    {
      id: "1",
      institution: "University of California",
      degree: "Bachelor of Science",
      field: "Computer Science",
      location: "Berkeley, CA",
      startDate: "2016-09-01",
      graduationDate: "2020-05-01",
      gpa: "3.8",
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "HTML/CSS"] },
    {
      category: "Backend",
      items: ["Node.js", "Express", "FastAPI", "PostgreSQL"],
    },
  ],
  certifications: [
    {
      id: "1",
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023-06-15",
    },
  ],
  projects: [],
  awards: [
    {
      title: "Employee of the Year",
      issuer: "TechCorp Inc.",
      date: "2023-12-01",
    },
    {
      title: "Outstanding Innovation Award",
      issuer: "StartupCo",
      date: "2021-11-15",
    },
  ],
  hobbies: ["Photography", "Rock Climbing", "Reading", "Cooking"],
};

const defaultStyleConfig: StyleConfig = {
  templateId: "modern-professional",
  fontFamily: "inter",
  fontSize: {
    name: 32,
    heading: 20,
    subheading: 16,
    body: 12,
  },
  colors: {
    primary: "#2563eb",
    secondary: "#64748b",
    accent: "#0ea5e9",
    background: "#ffffff",
    text: "#1e293b",
  },
  spacing: "normal",
  layout: "single-column",
};

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      resumeData: defaultResumeData,
      styleConfig: defaultStyleConfig,

      setResumeData: (data) =>
        set((state) => ({
          resumeData: { ...state.resumeData, ...data },
        })),

      setStyleConfig: (config) =>
        set((state) => ({
          styleConfig: { ...state.styleConfig, ...config },
        })),

      updatePersonalInfo: (info) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            personalInfo: { ...state.resumeData.personalInfo, ...info },
          },
        })),

      addExperience: (exp) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            experience: [...state.resumeData.experience, exp],
          },
        })),

      updateExperience: (id, exp) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            experience: state.resumeData.experience.map((e) =>
              e.id === id ? { ...e, ...exp } : e
            ),
          },
        })),

      deleteExperience: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            experience: state.resumeData.experience.filter((e) => e.id !== id),
          },
        })),

      addEducation: (edu) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            education: [...state.resumeData.education, edu],
          },
        })),

      updateEducation: (id, edu) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            education: state.resumeData.education.map((e) =>
              e.id === id ? { ...e, ...edu } : e
            ),
          },
        })),

      deleteEducation: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            education: state.resumeData.education.filter((e) => e.id !== id),
          },
        })),

      addSkill: (skill) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            skills: [...state.resumeData.skills, skill],
          },
        })),

      updateSkill: (index, skill) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            skills: state.resumeData.skills.map((s, i) =>
              i === index ? { ...s, ...skill } : s
            ),
          },
        })),

      deleteSkill: (index) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            skills: state.resumeData.skills.filter((_, i) => i !== index),
          },
        })),

      addCertification: (cert) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            certifications: [...state.resumeData.certifications, cert],
          },
        })),

      updateCertification: (id, cert) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            certifications: state.resumeData.certifications.map((c) =>
              c.id === id ? { ...c, ...cert } : c
            ),
          },
        })),

      deleteCertification: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            certifications: state.resumeData.certifications.filter(
              (c) => c.id !== id
            ),
          },
        })),

      addAward: (award) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            awards: [...(state.resumeData.awards || []), award],
          },
        })),

      updateAward: (index, award) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            awards: (state.resumeData.awards || []).map((a, i) =>
              i === index ? { ...a, ...award } : a
            ),
          },
        })),

      deleteAward: (index) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            awards: (state.resumeData.awards || []).filter(
              (_, i) => i !== index
            ),
          },
        })),

      addHobby: (hobby) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            hobbies: [...(state.resumeData.hobbies || []), hobby],
          },
        })),

      updateHobby: (index, hobby) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            hobbies: (state.resumeData.hobbies || []).map((h, i) =>
              i === index ? hobby : h
            ),
          },
        })),

      deleteHobby: (index) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            hobbies: (state.resumeData.hobbies || []).filter(
              (_, i) => i !== index
            ),
          },
        })),

      resetResume: () =>
        set({
          resumeData: defaultResumeData,
          styleConfig: defaultStyleConfig,
        }),
    }),
    {
      name: "resume-storage",
    }
  )
);
