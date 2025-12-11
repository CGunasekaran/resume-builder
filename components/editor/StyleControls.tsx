"use client";

import { useResumeStore } from "@/lib/store/resumeStore";
import { FiType, FiLayout } from "react-icons/fi";

const FONTS = [
  { value: "inter", label: "Inter" },
  { value: "roboto", label: "Roboto" },
  { value: "playfair", label: "Playfair Display" },
  { value: "montserrat", label: "Montserrat" },
  { value: "lato", label: "Lato" },
];

const COLOR_PRESETS = [
  {
    name: "Professional Blue",
    primary: "#2563eb",
    secondary: "#64748b",
    accent: "#0ea5e9",
  },
  {
    name: "Corporate Gray",
    primary: "#374151",
    secondary: "#6b7280",
    accent: "#9ca3af",
  },
  {
    name: "Creative Purple",
    primary: "#7c3aed",
    secondary: "#a78bfa",
    accent: "#c4b5fd",
  },
  {
    name: "Modern Green",
    primary: "#059669",
    secondary: "#10b981",
    accent: "#34d399",
  },
  {
    name: "Bold Red",
    primary: "#dc2626",
    secondary: "#ef4444",
    accent: "#f87171",
  },
  {
    name: "Elegant Navy",
    primary: "#1e40af",
    secondary: "#3b82f6",
    accent: "#60a5fa",
  },
];

export default function StyleControls() {
  const styleConfig = useResumeStore((state) => state.styleConfig);
  const setStyleConfig = useResumeStore((state) => state.setStyleConfig);

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-200 flex items-center gap-2">
        <FiType />
        Style Customization
      </h3>

      {/* Font Family */}
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-2">
          Font Family
        </label>
        <select
          value={styleConfig.fontFamily}
          onChange={(e) =>
            setStyleConfig({
              fontFamily: e.target.value as any,
            })
          }
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {FONTS.map((font) => (
            <option
              key={font.value}
              value={font.value}
              className="bg-gray-800 text-white"
            >
              {font.label}
            </option>
          ))}
        </select>
      </div>

      {/* Font Sizes */}
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-3">
          Font Sizes
        </label>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Name</span>
              <span className="font-medium text-white">
                {styleConfig.fontSize.name}px
              </span>
            </div>
            <input
              type="range"
              min="24"
              max="48"
              value={styleConfig.fontSize.name}
              onChange={(e) =>
                setStyleConfig({
                  fontSize: {
                    ...styleConfig.fontSize,
                    name: parseInt(e.target.value),
                  },
                })
              }
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Headings</span>
              <span className="font-medium text-white">
                {styleConfig.fontSize.heading}px
              </span>
            </div>
            <input
              type="range"
              min="14"
              max="28"
              value={styleConfig.fontSize.heading}
              onChange={(e) =>
                setStyleConfig({
                  fontSize: {
                    ...styleConfig.fontSize,
                    heading: parseInt(e.target.value),
                  },
                })
              }
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Body Text</span>
              <span className="font-medium text-white">
                {styleConfig.fontSize.body}px
              </span>
            </div>
            <input
              type="range"
              min="9"
              max="14"
              value={styleConfig.fontSize.body}
              onChange={(e) =>
                setStyleConfig({
                  fontSize: {
                    ...styleConfig.fontSize,
                    body: parseInt(e.target.value),
                  },
                })
              }
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Color Presets */}
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-3">
          Color Schemes
        </label>
        <div className="grid grid-cols-2 gap-3">
          {COLOR_PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() =>
                setStyleConfig({
                  colors: {
                    ...styleConfig.colors,
                    primary: preset.primary,
                    secondary: preset.secondary,
                    accent: preset.accent,
                  },
                })
              }
              className="p-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl hover:border-purple-400/50 hover:bg-white/15 transition-all duration-200 text-left"
            >
              <div className="flex gap-2 mb-3">
                <div
                  className="w-6 h-6 rounded-lg shadow-sm"
                  style={{ backgroundColor: preset.primary }}
                />
                <div
                  className="w-6 h-6 rounded-lg shadow-sm"
                  style={{ backgroundColor: preset.secondary }}
                />
                <div
                  className="w-6 h-6 rounded-lg shadow-sm"
                  style={{ backgroundColor: preset.accent }}
                />
              </div>
              <div className="text-sm font-medium text-gray-200">
                {preset.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Colors */}
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-3">
          Custom Colors
        </label>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Primary Color
            </label>
            <input
              type="color"
              value={styleConfig.colors.primary}
              onChange={(e) =>
                setStyleConfig({
                  colors: {
                    ...styleConfig.colors,
                    primary: e.target.value,
                  },
                })
              }
              className="w-full h-12 rounded-xl cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Secondary Color
            </label>
            <input
              type="color"
              value={styleConfig.colors.secondary}
              onChange={(e) =>
                setStyleConfig({
                  colors: {
                    ...styleConfig.colors,
                    secondary: e.target.value,
                  },
                })
              }
              className="w-full h-12 rounded-xl cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Accent Color
            </label>
            <input
              type="color"
              value={styleConfig.colors.accent}
              onChange={(e) =>
                setStyleConfig({
                  colors: {
                    ...styleConfig.colors,
                    accent: e.target.value,
                  },
                })
              }
              className="w-full h-12 rounded-xl cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20"
            />
          </div>
        </div>
      </div>

      {/* Spacing */}
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-3">
          Spacing
        </label>
        <div className="grid grid-cols-3 gap-3">
          {["compact", "normal", "relaxed"].map((spacing) => (
            <button
              key={spacing}
              onClick={() =>
                setStyleConfig({
                  spacing: spacing as any,
                })
              }
              className={`px-4 py-3 rounded-xl font-medium capitalize transition-all duration-200 ${
                styleConfig.spacing === spacing
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {spacing}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
