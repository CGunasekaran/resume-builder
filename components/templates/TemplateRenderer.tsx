"use client";

import { useResumeStore } from "@/lib/store/resumeStore";
import { TEMPLATES } from "./TemplateRegistry";

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
    <>
      <style jsx global>{`
        @media print {
          .page-break {
            page-break-before: always;
          }
          .avoid-break {
            page-break-inside: avoid;
          }
          .break-after {
            page-break-after: always;
          }
        }

        /* PDF-specific styles */
        #resume-preview {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
          zoom: 1;
          transform-origin: top left;
        }

        #resume-preview * {
          box-sizing: border-box;
        }

        /* Ensure minimum font sizes for readability */
        #resume-preview {
          font-size: 14px !important;
          line-height: 1.4 !important;
        }

        #resume-preview h1 {
          font-size: 32px !important;
          line-height: 1.2 !important;
          font-weight: 700 !important;
        }

        #resume-preview h2 {
          font-size: 22px !important;
          line-height: 1.3 !important;
          font-weight: 600 !important;
        }

        #resume-preview h3 {
          font-size: 18px !important;
          line-height: 1.3 !important;
          font-weight: 600 !important;
        }

        #resume-preview h4 {
          font-size: 16px !important;
          line-height: 1.3 !important;
          font-weight: 500 !important;
        }

        #resume-preview p,
        #resume-preview span,
        #resume-preview div {
          font-size: 14px !important;
          line-height: 1.4 !important;
        }

        #resume-preview .text-xs {
          font-size: 12px !important;
        }

        #resume-preview .text-sm {
          font-size: 13px !important;
        }

        #resume-preview .text-base {
          font-size: 14px !important;
        }

        #resume-preview .text-lg {
          font-size: 16px !important;
        }

        #resume-preview .text-xl {
          font-size: 18px !important;
        }

        #resume-preview .text-2xl {
          font-size: 22px !important;
        }

        #resume-preview .text-3xl {
          font-size: 26px !important;
        }

        #resume-preview .text-4xl {
          font-size: 32px !important;
        }

        /* Improve text contrast for better readability */
        #resume-preview {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        #resume-preview section {
          page-break-inside: avoid;
          break-inside: avoid;
          margin-bottom: 1rem;
        }

        #resume-preview h1,
        #resume-preview h2,
        #resume-preview h3 {
          page-break-after: avoid;
          break-after: avoid;
        }

        /* Ensure white backgrounds are visible */
        #resume-preview .bg-white {
          background-color: #ffffff !important;
        }
      `}</style>
      <div className="w-full h-full overflow-auto bg-gray-100 p-8">
        <div className="max-w-[210mm] mx-auto">
          {/* This ID is crucial for PDF generation */}
          <div
            id="resume-preview"
            className="print:shadow-none bg-white rounded-lg overflow-hidden"
            style={{ minHeight: "297mm" }}
          >
            <TemplateComponent
              data={resumeData}
              style={{
                ...styleConfig,
                fontSize: {
                  ...styleConfig.fontSize,
                  body: Math.max(styleConfig.fontSize.body, 14),
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
