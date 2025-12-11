"use client";

import { useResumeStore } from "@/lib/store/resumeStore";
import { useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function ExperienceEditor() {
  const { resumeData, addExperience, updateExperience, deleteExperience } =
    useResumeStore();
  const [newExp, setNewExp] = useState({
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: [""],
  });

  const handleAddExperience = () => {
    if (newExp.company && newExp.position) {
      addExperience({
        id: Date.now().toString(),
        ...newExp,
      });
      setNewExp({
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: [""],
      });
    }
  };

  const handleUpdateDescription = (
    expId: string,
    index: number,
    value: string
  ) => {
    const exp = resumeData.experience.find((e) => e.id === expId);
    if (exp) {
      const newDescription = [...exp.description];
      newDescription[index] = value;
      updateExperience(expId, { description: newDescription });
    }
  };

  return (
    <div className="relative">
      {/* Glowing Card Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-20"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Work Experience
          </h4>
        </div>

        <div className="space-y-6">
          {/* Existing Experience */}
          {resumeData.experience.map((exp) => (
            <div
              key={exp.id}
              className="border border-white/30 rounded-xl p-5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1 grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(exp.id, { company: e.target.value })
                    }
                    placeholder="Company Name"
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  />
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) =>
                      updateExperience(exp.id, { position: e.target.value })
                    }
                    placeholder="Job Title"
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  />
                </div>
                <button
                  onClick={() => deleteExperience(exp.id)}
                  className="ml-3 p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-xl transition-all duration-200 backdrop-blur-sm"
                >
                  <FiTrash2 />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-3">
                <input
                  type="text"
                  value={exp.location || ""}
                  onChange={(e) =>
                    updateExperience(exp.id, { location: e.target.value })
                  }
                  placeholder="Location"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                />
                <input
                  type="date"
                  value={exp.startDate}
                  onChange={(e) =>
                    updateExperience(exp.id, { startDate: e.target.value })
                  }
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                />
                <input
                  type="date"
                  value={exp.endDate}
                  onChange={(e) =>
                    updateExperience(exp.id, { endDate: e.target.value })
                  }
                  disabled={exp.current}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm disabled:bg-white/5 disabled:opacity-60"
                />
              </div>

              <label className="flex items-center mb-3">
                <input
                  type="checkbox"
                  checked={exp.current}
                  onChange={(e) =>
                    updateExperience(exp.id, { current: e.target.checked })
                  }
                  className="mr-2 w-4 h-4 text-purple-600 bg-white/10 border-white/20 rounded focus:ring-purple-500 focus:ring-2"
                />
                <span className="text-sm text-gray-200">
                  Currently working here
                </span>
              </label>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Job Description
                </label>
                {exp.description.map((desc, index) => (
                  <textarea
                    key={index}
                    value={desc}
                    onChange={(e) =>
                      handleUpdateDescription(exp.id, index, e.target.value)
                    }
                    placeholder="Describe your responsibilities and achievements..."
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm resize-none"
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Add New Experience */}
          <div className="border border-dashed border-white/30 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
            <h5 className="text-sm font-medium text-gray-200 mb-4">
              Add New Experience
            </h5>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                value={newExp.company}
                onChange={(e) =>
                  setNewExp({ ...newExp, company: e.target.value })
                }
                placeholder="Company Name"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
              <input
                type="text"
                value={newExp.position}
                onChange={(e) =>
                  setNewExp({ ...newExp, position: e.target.value })
                }
                placeholder="Job Title"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
            </div>

            <button
              onClick={handleAddExperience}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm font-medium"
            >
              <FiPlus />
              Add Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
