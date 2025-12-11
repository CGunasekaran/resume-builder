'use client';

import { useState } from 'react';
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import { useResumeStore } from '@/lib/store/resumeStore';
import PDFResume from './PDFResume';
import { FiDownload, FiLoader } from 'react-icons/fi';

export default function PDFDownloader() {
  const resumeData = useResumeStore((state) => state.resumeData);
  const styleConfig = useResumeStore((state) => state.styleConfig);
  const [isReady, setIsReady] = useState(false);

  const filename = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;

  // Alternative: Generate blob and handle manually
  const handleDownload = async () => {
    const blob = await pdf(
      <PDFResume
        data={resumeData}
        style={styleConfig}
        templateId={styleConfig.templateId}
      />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* Option 1: Built-in PDFDownloadLink */}
      <PDFDownloadLink
        document={
          <PDFResume
            data={resumeData}
            style={styleConfig}
            templateId={styleConfig.templateId}
          />
        }
        fileName={filename}
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
      >
        {({ loading }) =>
          loading ? (
            <>
              <FiLoader className="animate-spin" />
              Preparing PDF...
            </>
          ) : (
            <>
              <FiDownload />
              Download PDF
            </>
          )
        }
      </PDFDownloadLink>

      {/* Option 2: Manual download button */}
      {/* <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        <FiDownload />
        Download PDF
      </button> */}
    </div>
  );
}
