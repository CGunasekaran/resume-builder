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
        <h3 className="text-lg font-semibold mb-3">Choose Template</h3>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredTemplates.map((template) => (
          <button
            key={template.id}
            onClick={() => setStyleConfig({ templateId: template.id })}
            className={`group relative p-4 rounded-lg border-2 transition-all hover:shadow-lg ${
              styleConfig.templateId === template.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            {/* Template preview thumbnail would go here */}
            <div className="aspect-[8.5/11] bg-gray-100 rounded mb-3 flex items-center justify-center">
              <span className="text-4xl">📄</span>
            </div>

            <h4 className="font-semibold text-sm mb-1">{template.name}</h4>
            <p className="text-xs text-gray-600 mb-2">{template.description}</p>
            
            <div className="flex flex-wrap gap-1">
              {template.bestFor.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-0.5 bg-gray-200 text-gray-700 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {styleConfig.templateId === template.id && (
              <div className="absolute top-2 right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
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
          </button>
        ))}
      </div>
    </div>
  );
}
