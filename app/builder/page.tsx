"use client";

import { useState } from "react";
import Link from "next/link";
import TemplateRenderer from "@/components/templates/TemplateRenderer";
import TemplateSelector from "@/components/templates/TemplateSelector";
import FileUploader from "@/components/upload/FileUploader";
import StyleControls from "@/components/editor/StyleControls";
import PersonalInfoEditor from "@/components/editor/PersonalInfoEditor";
import ExperienceEditor from "@/components/editor/ExperienceEditor";
import SkillsEditor from "@/components/editor/SkillsEditor";
import EducationEditor from "@/components/editor/EducationEditor";
import CertificationsEditor from "@/components/editor/CertificationsEditor";
import AwardsEditor from "@/components/editor/AwardsEditor";
import HobbiesEditor from "@/components/editor/HobbiesEditor";
import {
  FiLayout,
  FiUpload,
  FiDownload,
  FiEye,
  FiSettings,
  FiHome,
} from "react-icons/fi";
import { generatePDFFromHTML } from "@/lib/utils/pdfGenerator";

export default function BuilderPage() {
  const [activeTab, setActiveTab] = useState<"edit" | "template" | "style">(
    "edit"
  );
  const [showUploader, setShowUploader] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      await generatePDFFromHTML("resume-preview", {
        filename: "my-resume.pdf",
        quality: 0.95,
        format: "a4",
        orientation: "portrait",
      });
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      // Fallback to print dialog if PDF generation fails
      window.print();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      {/* Top Bar */}
      <header className="relative bg-white/5 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Resume Builder
            </h1>
            <p className="text-sm text-gray-300">
              Create your professional resume
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-200 text-sm"
            >
              <FiHome />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
            <button
              onClick={() => setShowUploader(true)}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-gray-300 hover:bg-white/20 transition-all duration-200 text-sm"
            >
              <FiUpload />
              <span className="hidden sm:inline">Import Resume</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              <FiDownload />
              <span className="hidden sm:inline">Download PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Sidebar - Controls */}
        <aside className="w-full lg:w-96 bg-white/5 backdrop-blur-xl border-b lg:border-b-0 lg:border-r border-white/10 overflow-y-auto max-h-[50vh] lg:max-h-full">
          {/* Tabs */}
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab("edit")}
              className={`flex-1 px-2 sm:px-4 py-3 text-xs sm:text-sm font-medium transition-colors ${
                activeTab === "edit"
                  ? "border-b-2 border-purple-500 text-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FiSettings className="inline mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Edit Content</span>
              <span className="sm:hidden">Edit</span>
            </button>
            <button
              onClick={() => setActiveTab("template")}
              className={`flex-1 px-2 sm:px-4 py-3 text-xs sm:text-sm font-medium transition-colors ${
                activeTab === "template"
                  ? "border-b-2 border-purple-500 text-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FiLayout className="inline mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Templates</span>
              <span className="sm:hidden">Style</span>
            </button>
            <button
              onClick={() => setActiveTab("style")}
              className={`flex-1 px-2 sm:px-4 py-3 text-xs sm:text-sm font-medium transition-colors ${
                activeTab === "style"
                  ? "border-b-2 border-purple-500 text-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FiEye className="inline mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Styling</span>
              <span className="sm:hidden">View</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6">
            {activeTab === "edit" && (
              <div className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    Edit Resume Content
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Update your resume information in the sections below.
                    Changes will be reflected in real-time.
                  </p>
                </div>

                <div className="space-y-6">
                  <PersonalInfoEditor />
                  <ExperienceEditor />
                  <EducationEditor />
                  <SkillsEditor />
                  <CertificationsEditor />
                  <AwardsEditor />
                  <HobbiesEditor />
                </div>
              </div>
            )}

            {activeTab === "template" && <TemplateSelector />}

            {activeTab === "style" && <StyleControls />}
          </div>
        </aside>

        {/* Right Side - Preview */}
        <main className="flex-1 overflow-hidden lg:overflow-auto">
          <div className="h-full w-full">
            <TemplateRenderer />
          </div>
        </main>
      </div>

      {/* Modals */}
      {showUploader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="max-w-2xl w-full mx-4">
            <FileUploader
              onDataImported={() => setActiveTab("edit")}
              onClose={() => setShowUploader(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
