"use client";

import { useResumeStore } from "@/lib/store/resumeStore";
import { useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function HobbiesEditor() {
  const { resumeData, addHobby, updateHobby, deleteHobby } = useResumeStore();
  const [newHobby, setNewHobby] = useState("");

  const handleAddHobby = () => {
    if (newHobby.trim()) {
      addHobby(newHobby.trim());
      setNewHobby("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddHobby();
    }
  };

  return (
    <div className="relative">
      {/* Glowing Card Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-20"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Hobbies & Interests
          </h4>
        </div>

        <div className="space-y-6">
          {/* Existing Hobbies */}
          <div className="space-y-2">
            {(resumeData.hobbies || []).map((hobby, index) => (
              <div key={index} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={hobby}
                  onChange={(e) => updateHobby(index, e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="Enter hobby or interest"
                />
                <button
                  onClick={() => deleteHobby(index)}
                  className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-colors"
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>

          {/* Add New Hobby */}
          <div className="border border-dashed border-white/30 rounded-xl p-4 bg-white/5">
            <h5 className="text-sm font-medium text-gray-200 mb-3">
              Add New Hobby
            </h5>
            <div className="flex gap-3">
              <input
                type="text"
                value={newHobby}
                onChange={(e) => setNewHobby(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="e.g., Photography, Hiking, Reading"
                className="flex-1 min-w-0 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
              <button
                onClick={handleAddHobby}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
              >
                <FiPlus className="w-4 h-4" />
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
