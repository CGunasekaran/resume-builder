'use client';

import { useState } from 'react';
import { generatePDFFromHTML } from '@/lib/utils/pdfGenerator';
import { useResumeStore } from '@/lib/store/resumeStore';
import { FiX, FiDownload, FiSettings } from 'react-icons/fi';

interface Props {
  elementId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PDFDownloadModal({ elementId, isOpen, onClose }: Props) {
  const resumeData = useResumeStore((state) => state.resumeData);
  const [filename, setFilename] = useState(
    `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`
  );
  const [quality, setQuality] = useState(0.95);
  const [format, setFormat] = useState<'a4' | 'letter'>('a4');
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      await generatePDFFromHTML(elementId, {
        filename,
        quality,
        format,
      });
      onClose();
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <FiSettings className="text-blue-600" />
            <h2 className="text-xl font-bold">Download Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Filename */}
          <div>
            <label className="block text-sm font-medium mb-2">
              File Name
            </label>
            <input
              type="text"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="resume.pdf"
            />
          </div>

          {/* Format */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Page Format
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setFormat('a4')}
                className={`px-4 py-3 border-2 rounded-lg font-medium transition-colors ${
                  format === 'a4'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                A4
                <div className="text-xs opacity-60">210 × 297 mm</div>
              </button>
              <button
                onClick={() => setFormat('letter')}
                className={`px-4 py-3 border-2 rounded-lg font-medium transition-colors ${
                  format === 'letter'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                Letter
                <div className="text-xs opacity-60">8.5 × 11 in</div>
              </button>
            </div>
          </div>

          {/* Quality */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Quality: {Math.round(quality * 100)}%
            </label>
            <input
              type="range"
              min="0.5"
              max="1"
              step="0.05"
              value={quality}
              onChange={(e) => setQuality(parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Smaller file</span>
              <span>Better quality</span>
            </div>
          </div>

          {/* Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>💡 Tip:</strong> Higher quality produces larger files but better
              print results. 95% is recommended for most uses.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            disabled={isGenerating}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-medium disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleDownload}
            disabled={isGenerating}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-400 flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <FiDownload />
                Download PDF
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
