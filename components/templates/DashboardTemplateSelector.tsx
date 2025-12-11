"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useResumeStore } from "@/lib/store/resumeStore";
import { TEMPLATES } from "./TemplateRegistry";

export default function DashboardTemplateSelector() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const router = useRouter();
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

  const handleTemplateSelect = (templateId: string) => {
    setStyleConfig({ templateId });
    router.push("/builder");
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-200 mb-4">
          Quick Template Selection
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredTemplates.slice(0, 4).map((template) => (
          <div
            key={template.id}
            onClick={() => handleTemplateSelect(template.id)}
            className="group relative p-4 rounded-2xl backdrop-blur-xl border bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            {/* Template preview */}
            <div className="aspect-[8.5/11] rounded-xl mb-4 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-all duration-300">
              <div className="text-center">
                <span className="text-4xl mb-2 block">📄</span>
                <div className="space-y-1">
                  <div className="w-8 h-1 bg-white/30 rounded mx-auto"></div>
                  <div className="w-6 h-1 bg-white/20 rounded mx-auto"></div>
                  <div className="w-7 h-1 bg-white/20 rounded mx-auto"></div>
                </div>
              </div>
            </div>

            <div className="text-left">
              <h4 className="font-bold text-sm text-gray-200 mb-2 group-hover:text-white transition-colors">
                {template.name}
              </h4>
              <p className="text-xs text-gray-400 mb-3 leading-relaxed group-hover:text-gray-300 transition-colors line-clamp-2">
                {template.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {template.bestFor.slice(0, 2).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full font-medium bg-white/10 text-gray-300 border border-white/20 group-hover:bg-white/15 group-hover:text-white transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover indicator */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 transition-all duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {filteredTemplates.length > 4 && (
        <div className="mt-6 text-center">
          <Link
            href="/templates"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30 border border-white/20 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            View All Templates ({filteredTemplates.length})
          </Link>
        </div>
      )}
    </div>
  );
}
