import React from "react";
import Link from "next/link";
import DashboardTemplateSelector from "@/components/templates/DashboardTemplateSelector";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Glowing Card Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25"></div>

        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
          <div className="px-6 py-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                {/* Logo/Brand */}
                <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
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
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Resume Builder Dashboard
                  </h1>
                  <p className="text-gray-300">
                    Welcome back! Ready to build your perfect resume?
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* User Profile Placeholder */}
                <div className="h-10 w-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">U</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Create New Resume */}
              <Link href="/builder">
                <div className="group cursor-pointer">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
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
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                      <h3 className="ml-4 text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                        Create New Resume
                      </h3>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      Start building your professional resume from scratch with
                      our interactive builder.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Templates */}
              <Link href="/templates">
                <div className="group cursor-pointer">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
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
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </div>
                      <h3 className="ml-4 text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                        Browse Templates
                      </h3>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      Explore our collection of professional resume templates.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Upload Resume */}
              <Link href="/builder?upload=true">
                <div className="group cursor-pointer">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
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
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <h3 className="ml-4 text-xl font-semibold text-white group-hover:text-orange-300 transition-colors">
                        Upload Existing Resume
                      </h3>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      Upload your current resume to edit and improve it.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Dashboard Template Selector - No Preview Buttons */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <DashboardTemplateSelector />
            </div>

            {/* Recent Resumes Section */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Recent Resumes
              </h2>
              <div className="text-center py-12">
                <div className="h-16 w-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-white"
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
                <p className="text-gray-400 mb-4">No resumes yet</p>
                <p className="text-gray-500 text-sm">
                  Your created resumes will appear here for easy access and
                  editing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
