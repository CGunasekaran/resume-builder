'use client';

import { useState } from 'react';
import { useResumeStore } from '@/lib/store/resumeStore';
import { TEMPLATES } from './TemplateRegistry';

export default function TemplateSelector() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const styleConfig = useResumeStore((state) => state.styleConfig);
  const setStyleConfig = useResumeStore((state) => state.setStyleConfig);

  const categories = ['all', 'professional', 'modern', 'creative', 'minimalist'];

  const filteredTemplates =
    selectedCategory === 'all'
      ? TEMPLATES
      : TEMPLATES.filter((t) => t.category === selectedCategory);

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-200 mb-4">Choose Template</h3>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {filteredTemplates.map((template) => (
          <button
            key={template.id}
            onClick={() => setStyleConfig({ templateId: template.id })}
            className={`group relative p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
              styleConfig.templateId === template.id
                ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-400/50 shadow-xl'
                : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30'
            }`}
          >
            {/* Enhanced template preview */}
            <div className={`aspect-[8.5/11] rounded-xl mb-4 flex items-center justify-center transition-all duration-300 ${
              styleConfig.templateId === template.id
                ? 'bg-gradient-to-br from-white/20 to-white/10 shadow-inner'
                : 'bg-white/5 group-hover:bg-white/10'
            }`}>
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
              
              <div className="flex flex-wrap gap-2">
                {template.bestFor.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                      styleConfig.templateId === template.id
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'bg-white/10 text-gray-300 border border-white/20 group-hover:bg-white/15 group-hover:text-white'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
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
          </button>
        ))}
      </div>
    </div>
  );
}
