"use client";

import { useResumeStore } from "@/lib/store/resumeStore";
import { useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function AwardsEditor() {
  const { resumeData, addAward, updateAward, deleteAward } = useResumeStore();
  const [newAward, setNewAward] = useState({
    title: "",
    issuer: "",
    date: "",
  });

  const handleAddAward = () => {
    if (newAward.title && newAward.issuer) {
      addAward(newAward);
      setNewAward({
        title: "",
        issuer: "",
        date: "",
      });
    }
  };

  return (
    <div className="relative">
      {/* Glowing Card Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-20"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
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
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Awards & Honors
          </h4>
        </div>

        <div className="space-y-6">
          {/* Existing Awards */}
          {(resumeData.awards || []).map((award, index) => (
            <div
              key={index}
              className="border border-white/30 rounded-xl p-5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1 grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={award.title}
                    onChange={(e) =>
                      updateAward(index, { title: e.target.value })
                    }
                    placeholder="Award Title"
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  />
                  <input
                    type="text"
                    value={award.issuer}
                    onChange={(e) =>
                      updateAward(index, { issuer: e.target.value })
                    }
                    placeholder="Issuing Organization"
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  />
                </div>
                <button
                  onClick={() => deleteAward(index)}
                  className="ml-3 p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-xl transition-all duration-200 backdrop-blur-sm"
                >
                  <FiTrash2 />
                </button>
              </div>

              <input
                type="date"
                value={award.date}
                onChange={(e) => updateAward(index, { date: e.target.value })}
                placeholder="Date Received"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
            </div>
          ))}

          {/* Add New Award */}
          <div className="border border-dashed border-white/30 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
            <h5 className="text-sm font-medium text-gray-200 mb-4">
              Add New Award
            </h5>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <input
                type="text"
                value={newAward.title}
                onChange={(e) =>
                  setNewAward({ ...newAward, title: e.target.value })
                }
                placeholder="Award Title"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
              <input
                type="text"
                value={newAward.issuer}
                onChange={(e) =>
                  setNewAward({ ...newAward, issuer: e.target.value })
                }
                placeholder="Issuing Organization"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
            </div>

            <input
              type="date"
              value={newAward.date}
              onChange={(e) =>
                setNewAward({ ...newAward, date: e.target.value })
              }
              placeholder="Date Received"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm mb-4"
            />

            <button
              onClick={handleAddAward}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm font-medium"
            >
              <FiPlus />
              Add Award
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
