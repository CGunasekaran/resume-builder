"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TEMPLATES } from "@/components/templates/TemplateRegistry";

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "all",
    "professional",
    "modern",
    "creative",
    "minimalist",
  ];

  const filteredTemplates =
    selectedCategory === "all"
      ? TEMPLATES
      : TEMPLATES.filter((t) => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <Link
              href="/dashboard"
              className="mr-4 p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>

            <div className="flex items-center">
              <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Resume Templates
                </h1>
                <p className="text-gray-300 mt-2">
                  Choose from our collection of professional resume templates
                </p>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => {
            const categoryColors = {
              professional: "from-blue-500 to-cyan-500",
              modern: "from-purple-500 to-pink-500",
              creative: "from-green-500 to-emerald-500",
              minimalist: "from-gray-500 to-slate-600",
            };

            const color =
              categoryColors[template.category] || "from-gray-500 to-gray-600";

            return (
              <div key={template.id} className="group">
                <div className="relative">
                  {/* Glowing Effect */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
                  ></div>

                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden">
                    {/* Template Preview */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="text-center w-full">
                          <div
                            className={`h-12 w-12 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center mb-4 shadow-lg mx-auto`}
                          >
                            <svg
                              className="h-6 w-6 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-700 rounded w-24 mx-auto"></div>
                            <div className="h-2 bg-gray-600 rounded w-16 mx-auto"></div>
                            <div className="h-1 bg-gray-400 rounded w-20 mx-auto mt-4"></div>
                            <div className="h-1 bg-gray-400 rounded w-18 mx-auto"></div>
                            <div className="h-1 bg-gray-400 rounded w-16 mx-auto"></div>
                            <div className="mt-4 space-y-1">
                              <div className="h-1 bg-gray-300 rounded w-full"></div>
                              <div className="h-1 bg-gray-300 rounded w-4/5 mx-auto"></div>
                              <div className="h-1 bg-gray-300 rounded w-3/4 mx-auto"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-4">
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium hover:bg-white/30 transition-all duration-200 text-sm">
                            Preview
                          </button>
                          <Link
                            href={`/builder?template=${template.id}`}
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-sm"
                          >
                            Use Template
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Template Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {template.name}
                        </h3>
                        <span
                          className={`px-2 py-1 bg-gradient-to-r ${color} rounded-md text-xs font-medium text-white`}
                        >
                          {template.category}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">
                        {template.description}
                      </p>

                      {/* Best For Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {template.bestFor.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-xs text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-all duration-200 text-sm">
                          Preview
                        </button>
                        <Link
                          href={`/builder?template=${template.id}`}
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-sm text-center"
                        >
                          Use Template
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Can&apos;t find the perfect template?
            </h2>
            <p className="text-gray-300 mb-6">
              Start from scratch and create your own unique resume design
            </p>
            <Link
              href="/builder"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Start From Scratch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
