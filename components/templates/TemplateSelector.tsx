"use client";

import { useState } from "react";
import { useResumeStore } from "@/lib/store/resumeStore";
import { TEMPLATES } from "./TemplateRegistry";
import { FiEye, FiX } from "react-icons/fi";

export default function TemplateSelector() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [previewTemplate, setPreviewTemplate] = useState<string | null>(null);
  const resumeData = useResumeStore((state) => state.resumeData);
  const styleConfig = useResumeStore((state) => state.styleConfig);
  const setStyleConfig = useResumeStore((state) => state.setStyleConfig);

  const categories = [
    "all",
    "professional",
    "modern",
    "creative",
    "minimalist",
  ];

  const filteredTemplates =
    selectedCategory === "all"
      ? TEMPLATES
      : TEMPLATES.filter((t) => t.category === selectedCategory);

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-200 mb-4">
          Choose Template
        </h3>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            role="button"
            tabIndex={0}
            onClick={() => setStyleConfig({ templateId: template.id })}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setStyleConfig({ templateId: template.id });
              }
            }}
            className={`group relative p-4 sm:p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
              styleConfig.templateId === template.id
                ? "bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-400/50 shadow-xl"
                : "bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30"
            }`}
          >
            {/* Enhanced template preview */}
            <div
              className={`aspect-[8.5/11] rounded-xl mb-4 flex items-center justify-center transition-all duration-300 ${
                styleConfig.templateId === template.id
                  ? "bg-gradient-to-br from-white/20 to-white/10 shadow-inner"
                  : "bg-white/5 group-hover:bg-white/10"
              }`}
            >
              <div className="text-center">
                <span className="text-5xl mb-2 block">📄</span>
                <div className="space-y-1">
                  <div className="w-12 h-1 bg-white/30 rounded mx-auto"></div>
                  <div className="w-8 h-1 bg-white/20 rounded mx-auto"></div>
                  <div className="w-10 h-1 bg-white/20 rounded mx-auto"></div>
                </div>
              </div>
            </div>

            <div className="text-left">
              <h4 className="font-bold text-base text-gray-200 mb-2 group-hover:text-white transition-colors">
                {template.name}
              </h4>
              <p className="text-sm text-gray-400 mb-3 leading-relaxed group-hover:text-gray-300 transition-colors">
                {template.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {template.bestFor.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                        styleConfig.templateId === template.id
                          ? "bg-white/20 text-white border border-white/30"
                          : "bg-white/10 text-gray-300 border border-white/20 group-hover:bg-white/15 group-hover:text-white"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewTemplate(template.id);
                  }}
                  className="flex items-center gap-1 px-2 sm:px-3 py-1 bg-blue-600/80 hover:bg-blue-600 text-white text-xs rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <FiEye className="text-xs" />
                  <span className="hidden sm:inline">Preview</span>
                  <span className="sm:hidden">👁️</span>
                </button>
              </div>
            </div>

            {styleConfig.templateId === template.id && (
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}

            {/* Hover indicator */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 transition-all duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewTemplate &&
        (() => {
          const template = TEMPLATES.find((t) => t.id === previewTemplate);
          if (!template) return null;
          const TemplateComponent = template.component;

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4">
              <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-gray-50">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {template.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {template.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setPreviewTemplate(null)}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <FiX className="text-xl text-gray-600" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="overflow-auto max-h-[calc(95vh-120px)] sm:max-h-[calc(90vh-120px)] bg-gray-100 p-4 sm:p-8">
                  <div className="max-w-full sm:max-w-[210mm] mx-auto bg-white shadow-lg">
                    <div id="template-preview-modal">
                      <TemplateComponent
                        data={resumeData}
                        style={{
                          ...styleConfig,
                          templateId: template.id,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-t border-gray-200 bg-gray-50 gap-4 sm:gap-0">
                  <div className="flex flex-wrap gap-2">
                    {template.bestFor.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setPreviewTemplate(null)}
                      className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors order-2 sm:order-1"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        setStyleConfig({ templateId: template.id });
                        setPreviewTemplate(null);
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 order-1 sm:order-2"
                    >
                      Use This Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
    </div>
  );
}
