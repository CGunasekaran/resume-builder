'use client';

import { useState } from 'react';
import { generatePDFFromHTML, printResume } from '@/lib/utils/pdfGenerator';
import { FiDownload, FiPrinter, FiLoader } from 'react-icons/fi';

interface Props {
  elementId: string;
  filename?: string;
  className?: string;
}

export default function PDFDownloadButton({ 
  elementId, 
  filename = 'resume.pdf',
  className = '' 
}: Props) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      await generatePDFFromHTML(elementId, { filename });
    } catch (err) {
      console.error('Download error:', err);
      setError('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = async () => {
    setIsPrinting(true);
    setError(null);

    try {
      await printResume(elementId);
    } catch (err) {
      console.error('Print error:', err);
      setError('Failed to print. Please try again.');
    } finally {
      setIsPrinting(false);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex gap-2">
        <button
          onClick={handleDownload}
          disabled={isGenerating || isPrinting}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium shadow-sm"
        >
          {isGenerating ? (
            <>
              <FiLoader className="animate-spin" />
              Generating PDF...
            </>
          ) : (
            <>
              <FiDownload />
              Download PDF
            </>
          )}
        </button>

        <button
          onClick={handlePrint}
          disabled={isGenerating || isPrinting}
          className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium shadow-sm"
        >
          {isPrinting ? (
            <>
              <FiLoader className="animate-spin" />
              Preparing...
            </>
          ) : (
            <>
              <FiPrinter />
              Print
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="text-red-600 text-sm p-2 bg-red-50 rounded border border-red-200">
          {error}
        </div>
      )}
    </div>
  );
}
