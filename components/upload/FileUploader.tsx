"use client";

import { useState } from "react";
import { useResumeStore } from "@/lib/store/resumeStore";
import {
  FiUpload,
  FiFile,
  FiCheck,
  FiX,
  FiEye,
  FiUser,
  FiBriefcase,
  FiBookOpen,
  FiEdit,
} from "react-icons/fi";
import { ResumeData } from "@/lib/types/resume";

interface FileUploaderProps {
  onDataImported?: () => void;
  onClose?: () => void;
}

export default function FileUploader({
  onDataImported,
  onClose,
}: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [importedData, setImportedData] = useState<ResumeData | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const replaceResumeData = useResumeStore((state) => state.replaceResumeData);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validate file type
      const validTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
      ];

      if (!validTypes.includes(selectedFile.type)) {
        setError("Please upload a PDF or DOCX file");
        return;
      }

      // Validate file size (max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB");
        return;
      }

      setFile(selectedFile);
      setError(null);
      setSuccess(false);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/parse-resume", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to parse resume");
      }

      const result = await response.json();

      if (result.data) {
        // Store imported data for preview
        setImportedData(result.data);
        // Completely replace the resume data with imported data
        replaceResumeData(result.data);
        setShowPreview(true);
        // Notify parent component that data was imported
        onDataImported?.();
      }

      setSuccess(true);
      setTimeout(() => {
        setFile(null);
        setSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload file");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Glassmorphism Card */}
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
        <div
          className="relative backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl p-6"
          style={{ backgroundColor: "rgba(30, 41, 59, 0.85)" }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FiUpload className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white drop-shadow-lg mb-2">
              Import Your Resume
            </h3>
            <p
              className="text-white text-sm mb-6 drop-shadow-lg font-medium"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Upload PDF or DOCX file (up to 5MB) and we'll extract your
              information automatically
            </p>

            <div className="mt-6">
              <label
                htmlFor="file-upload"
                className="cursor-pointer inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <FiFile className="mr-2" />
                Select File
              </label>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </div>

            {file && (
              <div className="mt-4">
                <div
                  className="flex items-center justify-between p-4 backdrop-blur-sm border border-white/40 rounded-xl"
                  style={{ backgroundColor: "rgba(51, 65, 85, 0.7)" }}
                >
                  <div className="flex items-center space-x-3">
                    <FiFile className="text-purple-300 text-lg" />
                    <span className="text-sm font-medium text-white drop-shadow-md">
                      {file.name}
                    </span>
                  </div>
                  <button
                    onClick={() => setFile(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FiX className="text-lg" />
                  </button>
                </div>

                <button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:transform-none"
                >
                  {uploading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Parsing Resume...
                    </span>
                  ) : (
                    "🚀 Parse & Import Resume"
                  )}
                </button>
              </div>
            )}

            {error && (
              <div
                className="mt-4 p-4 border border-red-400/60 rounded-xl backdrop-blur-sm"
                style={{ backgroundColor: "rgba(220, 38, 38, 0.2)" }}
              >
                <p
                  className="text-sm text-white font-semibold drop-shadow-lg"
                  style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
                >
                  {error}
                </p>
              </div>
            )}

            {success && (
              <div
                className="mt-4 p-4 border border-green-400/60 rounded-xl backdrop-blur-sm"
                style={{ backgroundColor: "rgba(34, 197, 94, 0.2)" }}
              >
                <div className="flex items-center justify-center mb-3">
                  <FiCheck className="text-green-200 mr-2" />
                  <p
                    className="text-sm text-white font-semibold drop-shadow-lg"
                    style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
                  >
                    Resume imported successfully! Data is now in the preview.
                  </p>
                </div>
                {onDataImported && onClose && (
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => {
                        onDataImported();
                        onClose();
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                    >
                      <FiEdit className="text-sm" />
                      Edit Content
                    </button>
                    <button
                      onClick={onClose}
                      className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg transition-all duration-200"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            )}

            {importedData && showPreview && (
              <div
                className="mt-6 p-4 border border-blue-400/50 rounded-xl backdrop-blur-sm"
                style={{ backgroundColor: "rgba(59, 130, 246, 0.15)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FiEye className="text-blue-300 mr-2" />
                    <h4 className="text-lg font-semibold text-white drop-shadow-md">
                      Imported Resume Preview
                    </h4>
                  </div>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FiX className="text-lg" />
                  </button>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {/* Personal Info */}
                  {importedData.personalInfo && (
                    <div
                      className="rounded-lg p-3"
                      style={{ backgroundColor: "rgba(71, 85, 105, 0.6)" }}
                    >
                      <div className="flex items-center mb-2">
                        <FiUser className="text-purple-300 mr-2" />
                        <h5 className="font-medium text-white">
                          Personal Information
                        </h5>
                      </div>
                      <div
                        className="text-sm text-white space-y-1"
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
                      >
                        <p>
                          <strong>Name:</strong>{" "}
                          {importedData.personalInfo.name}
                        </p>
                        <p>
                          <strong>Title:</strong>{" "}
                          {importedData.personalInfo.title}
                        </p>
                        <p>
                          <strong>Email:</strong>{" "}
                          {importedData.personalInfo.email}
                        </p>
                        <p>
                          <strong>Phone:</strong>{" "}
                          {importedData.personalInfo.phone}
                        </p>
                        {importedData.personalInfo.location && (
                          <p>
                            <strong>Location:</strong>{" "}
                            {importedData.personalInfo.location}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Experience */}
                  {importedData.experience &&
                    importedData.experience.length > 0 && (
                      <div
                        className="rounded-lg p-3"
                        style={{ backgroundColor: "rgba(71, 85, 105, 0.6)" }}
                      >
                        <div className="flex items-center mb-2">
                          <FiBriefcase className="text-blue-200 mr-2" />
                          <h5
                            className="font-medium text-white"
                            style={{
                              textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                            }}
                          >
                            Experience ({importedData.experience.length}{" "}
                            positions)
                          </h5>
                        </div>
                        <div
                          className="text-sm text-white space-y-2"
                          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
                        >
                          {importedData.experience
                            .slice(0, 2)
                            .map((exp, idx) => (
                              <div
                                key={idx}
                                className="border-l-2 border-blue-300/50 pl-3"
                              >
                                <p className="font-medium">
                                  {exp.position} at {exp.company}
                                </p>
                                <p className="text-xs text-gray-200">
                                  {exp.startDate} - {exp.endDate || "Present"}
                                </p>
                              </div>
                            ))}
                          {importedData.experience.length > 2 && (
                            <p className="text-xs text-gray-200 italic">
                              +{importedData.experience.length - 2} more
                              positions...
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                  {/* Education */}
                  {importedData.education &&
                    importedData.education.length > 0 && (
                      <div
                        className="rounded-lg p-3"
                        style={{ backgroundColor: "rgba(71, 85, 105, 0.6)" }}
                      >
                        <div className="flex items-center mb-2">
                          <FiBookOpen className="text-green-200 mr-2" />
                          <h5
                            className="font-medium text-white"
                            style={{
                              textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                            }}
                          >
                            Education ({importedData.education.length} degrees)
                          </h5>
                        </div>
                        <div
                          className="text-sm text-white space-y-2"
                          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
                        >
                          {importedData.education
                            .slice(0, 2)
                            .map((edu, idx) => (
                              <div
                                key={idx}
                                className="border-l-2 border-green-300/50 pl-3"
                              >
                                <p className="font-medium">{edu.degree}</p>
                                <p className="text-xs text-gray-200">
                                  {edu.institution} ({edu.graduationDate})
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                  {/* Skills */}
                  {importedData.skills && importedData.skills.length > 0 && (
                    <div
                      className="rounded-lg p-3"
                      style={{ backgroundColor: "rgba(71, 85, 105, 0.6)" }}
                    >
                      <h5
                        className="font-medium text-white mb-2"
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
                      >
                        Skills ({importedData.skills.length} categories)
                      </h5>
                      <div className="space-y-2">
                        {importedData.skills
                          .slice(0, 3)
                          .map((skillGroup, idx) => (
                            <div key={idx}>
                              <p
                                className="text-xs font-medium text-white"
                                style={{
                                  textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                                }}
                              >
                                {skillGroup.category}:
                              </p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {skillGroup.items
                                  .slice(0, 5)
                                  .map((item, itemIdx) => (
                                    <span
                                      key={itemIdx}
                                      className="text-xs text-white px-2 py-1 rounded"
                                      style={{
                                        backgroundColor:
                                          "rgba(147, 51, 234, 0.4)",
                                        textShadow:
                                          "1px 1px 2px rgba(0,0,0,0.8)",
                                      }}
                                    >
                                      {item}
                                    </span>
                                  ))}
                                {skillGroup.items.length > 5 && (
                                  <span className="text-xs text-gray-200 italic">
                                    +{skillGroup.items.length - 5} more...
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-300">
                      💡 All data has been imported to your resume builder.
                      Switch to the "Edit Content" tab to customize further.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
