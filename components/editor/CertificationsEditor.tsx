"use client";

import { useResumeStore } from "@/lib/store/resumeStore";
import { useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function CertificationsEditor() {
  const {
    resumeData,
    addCertification,
    updateCertification,
    deleteCertification,
  } = useResumeStore();
  const [newCert, setNewCert] = useState({
    name: "",
    issuer: "",
    date: "",
    expiryDate: "",
    credentialId: "",
  });

  const handleAddCertification = () => {
    if (newCert.name && newCert.issuer) {
      addCertification({
        id: Date.now().toString(),
        ...newCert,
      });
      setNewCert({
        name: "",
        issuer: "",
        date: "",
        expiryDate: "",
        credentialId: "",
      });
    }
  };

  return (
    <div className="relative">
      {/* Glowing Card Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-20"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Certifications
          </h4>
        </div>

        <div className="space-y-6">
          {/* Existing Certifications */}
          {resumeData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="border border-white/30 rounded-xl p-5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1 grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={cert.name}
                    onChange={(e) =>
                      updateCertification(cert.id, { name: e.target.value })
                    }
                    placeholder="Certification Name"
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  />
                  <input
                    type="text"
                    value={cert.issuer}
                    onChange={(e) =>
                      updateCertification(cert.id, { issuer: e.target.value })
                    }
                    placeholder="Issuing Organization"
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  />
                </div>
                <button
                  onClick={() => deleteCertification(cert.id)}
                  className="ml-3 p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-xl transition-all duration-200 backdrop-blur-sm"
                >
                  <FiTrash2 />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-3">
                <input
                  type="date"
                  value={cert.date}
                  onChange={(e) =>
                    updateCertification(cert.id, { date: e.target.value })
                  }
                  placeholder="Issue Date"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                />
                <input
                  type="date"
                  value={cert.expiryDate || ""}
                  onChange={(e) =>
                    updateCertification(cert.id, { expiryDate: e.target.value })
                  }
                  placeholder="Expiry Date (optional)"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                />
                <input
                  type="text"
                  value={cert.credentialId || ""}
                  onChange={(e) =>
                    updateCertification(cert.id, {
                      credentialId: e.target.value,
                    })
                  }
                  placeholder="Credential ID (optional)"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                />
              </div>
            </div>
          ))}

          {/* Add New Certification */}
          <div className="border border-dashed border-white/30 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
            <h5 className="text-sm font-medium text-gray-200 mb-4">
              Add New Certification
            </h5>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <input
                type="text"
                value={newCert.name}
                onChange={(e) =>
                  setNewCert({ ...newCert, name: e.target.value })
                }
                placeholder="Certification Name"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
              <input
                type="text"
                value={newCert.issuer}
                onChange={(e) =>
                  setNewCert({ ...newCert, issuer: e.target.value })
                }
                placeholder="Issuing Organization"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <input
                type="date"
                value={newCert.date}
                onChange={(e) =>
                  setNewCert({ ...newCert, date: e.target.value })
                }
                placeholder="Issue Date"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
              <input
                type="date"
                value={newCert.expiryDate}
                onChange={(e) =>
                  setNewCert({ ...newCert, expiryDate: e.target.value })
                }
                placeholder="Expiry Date (optional)"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
              <input
                type="text"
                value={newCert.credentialId}
                onChange={(e) =>
                  setNewCert({ ...newCert, credentialId: e.target.value })
                }
                placeholder="Credential ID (optional)"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
            </div>

            <button
              onClick={handleAddCertification}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm font-medium"
            >
              <FiPlus />
              Add Certification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
