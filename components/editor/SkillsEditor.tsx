"use client";

import { useResumeStore } from "@/lib/store/resumeStore";
import { useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function SkillsEditor() {
  const { resumeData, addSkill, updateSkill, deleteSkill } = useResumeStore();
  const [newSkill, setNewSkill] = useState({
    category: "",
    items: [""],
  });

  const handleAddSkill = () => {
    if (newSkill.category && newSkill.items.some((item) => item.trim())) {
      addSkill({
        category: newSkill.category,
        items: newSkill.items.filter((item) => item.trim()),
      });
      setNewSkill({ category: "", items: [""] });
    }
  };

  const handleUpdateSkillItems = (index: number, items: string[]) => {
    updateSkill(index, { items });
  };

  const handleSkillItemChange = (
    skillIndex: number,
    itemIndex: number,
    value: string
  ) => {
    const skill = resumeData.skills[skillIndex];
    const newItems = [...skill.items];
    newItems[itemIndex] = value;
    handleUpdateSkillItems(skillIndex, newItems);
  };

  const addSkillItem = (skillIndex: number) => {
    const skill = resumeData.skills[skillIndex];
    handleUpdateSkillItems(skillIndex, [...skill.items, ""]);
  };

  const removeSkillItem = (skillIndex: number, itemIndex: number) => {
    const skill = resumeData.skills[skillIndex];
    const newItems = skill.items.filter((_, i) => i !== itemIndex);
    handleUpdateSkillItems(skillIndex, newItems);
  };

  return (
    <div className="relative">
      {/* Glowing Card Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
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
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills
          </h4>
        </div>

        <div className="space-y-6">
          {/* Existing Skills */}
          {resumeData.skills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className="border border-white/30 rounded-xl p-5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex justify-between items-center mb-4">
                <input
                  type="text"
                  value={skill.category}
                  onChange={(e) =>
                    updateSkill(skillIndex, { category: e.target.value })
                  }
                  placeholder="Skill Category (e.g., Programming Languages)"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                />
                <button
                  onClick={() => deleteSkill(skillIndex)}
                  className="ml-3 p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-xl transition-all duration-200 backdrop-blur-sm"
                >
                  <FiTrash2 />
                </button>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-200">
                  Skills
                </label>
                {skill.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex gap-3">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) =>
                        handleSkillItemChange(
                          skillIndex,
                          itemIndex,
                          e.target.value
                        )
                      }
                      placeholder="Enter skill"
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    />
                    {skill.items.length > 1 && (
                      <button
                        onClick={() => removeSkillItem(skillIndex, itemIndex)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-xl px-3 transition-all duration-200 backdrop-blur-sm"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addSkillItem(skillIndex)}
                  className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-500/20 transition-all duration-200 backdrop-blur-sm"
                >
                  <FiPlus size={14} />
                  Add Skill
                </button>
              </div>
            </div>
          ))}

          {/* Add New Skill Category */}
          <div className="border border-dashed border-white/30 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
            <h5 className="text-sm font-medium text-gray-200 mb-4">
              Add New Skill Category
            </h5>
            <input
              type="text"
              value={newSkill.category}
              onChange={(e) =>
                setNewSkill({ ...newSkill, category: e.target.value })
              }
              placeholder="Skill Category (e.g., Programming Languages)"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm mb-4"
            />

            <div className="space-y-3 mb-4">
              {newSkill.items.map((item, index) => (
                <input
                  key={index}
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const newItems = [...newSkill.items];
                    newItems[index] = e.target.value;
                    setNewSkill({ ...newSkill, items: newItems });
                  }}
                  placeholder="Enter skill"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                />
              ))}
              <button
                onClick={() =>
                  setNewSkill({ ...newSkill, items: [...newSkill.items, ""] })
                }
                className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-500/20 transition-all duration-200 backdrop-blur-sm"
              >
                <FiPlus size={14} />
                Add Another Skill
              </button>
            </div>

            <button
              onClick={handleAddSkill}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm font-medium"
            >
              <FiPlus />
              Add Skill Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
