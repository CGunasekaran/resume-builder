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
  resetResume: () => void;
}

const defaultResumeData: ResumeData = {
  personalInfo: {
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
  certifications: [],
  projects: [],
};

const defaultStyleConfig: StyleConfig = {
  templateId: "modern-1",
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
