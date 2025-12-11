"use client";

import { useState } from "react";
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
} from "react-icons/fi";

export default function BuilderPage() {
  const [activeTab, setActiveTab] = useState<"edit" | "template" | "style">(
    "edit"
  );
  const [showUploader, setShowUploader] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      {/* Top Bar */}
      <header className="relative bg-white/5 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Resume Builder
            </h1>
            <p className="text-sm text-gray-300">
              Create your professional resume
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowUploader(true)}
              className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-gray-300 hover:bg-white/20 transition-all duration-200"
            >
              <FiUpload />
              Import Resume
            </button>

            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <FiDownload />
              Download PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative flex-1 flex overflow-hidden">
        {/* Left Sidebar - Controls */}
        <aside className="w-96 bg-white/5 backdrop-blur-xl border-r border-white/10 overflow-y-auto">
          {/* Tabs */}
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab("edit")}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === "edit"
                  ? "border-b-2 border-purple-500 text-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FiSettings className="inline mr-2" />
              Edit Content
            </button>
            <button
              onClick={() => setActiveTab("template")}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === "template"
                  ? "border-b-2 border-purple-500 text-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FiLayout className="inline mr-2" />
              Templates
            </button>
            <button
              onClick={() => setActiveTab("style")}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === "style"
                  ? "border-b-2 border-purple-500 text-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FiEye className="inline mr-2" />
              Styling
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
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
        <main className="flex-1 overflow-hidden">
          <TemplateRenderer />
        </main>
      </div>

      {/* Modals */}
      {showUploader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Import Resume</h3>
              <button
                onClick={() => setShowUploader(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <FileUploader />
          </div>
        </div>
      )}
    </div>
  );
}
