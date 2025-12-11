'use client';

import { useResumeStore } from '@/lib/store/resumeStore';
import { TEMPLATES } from './TemplateRegistry';

export default function TemplateRenderer() {
  const resumeData = useResumeStore((state) => state.resumeData);
  const styleConfig = useResumeStore((state) => state.styleConfig);

  const template = TEMPLATES.find((t) => t.id === styleConfig.templateId);

  if (!template) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Template not found</p>
      </div>
    );
  }

  const TemplateComponent = template.component;

  return (
    <div className="w-full h-full overflow-auto bg-gray-100 p-8">
      <div className="max-w-[210mm] mx-auto">
        {/* This ID is crucial for PDF generation */}
        <div id="resume-preview">
          <TemplateComponent data={resumeData} style={styleConfig} />
        </div>
      </div>
    </div>
  );
}
