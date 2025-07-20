"use client";

import React, { useEffect, useState } from "react";

import { useGetVisionsQuery } from "@/redux/api/visionApi";
import { FaBox } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";

export default function OurVisionSection() {
  const [isVisible, setIsVisible] = useState(false);

  const { data } = useGetVisionsQuery({});

  const vision = data?.data?.[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("our-vision");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="our-vision"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-32 px-6 relative overflow-hidden min-h-screen"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-red-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto relative z-10 flex items-center min-h-screen">
        <div className="w-full">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-xl px-10 py-5 rounded-full border-2 border-red-500/40 mb-12 shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-bold text-xl uppercase tracking-wider">
                  {vision?.title || "Our Vision"}
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white mb-12 leading-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-red-600 drop-shadow-2xl ">
                  Services
                </span>
              </h2>

              <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                {vision?.description || "Loading..."}
              </p>
            </div>
          </div>

          {/* Enhanced Vision Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Our Vision Card */}
            <div
              className={`transition-all duration-1000 delay-300 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl hover:shadow-red-500/20 hover:border-red-500/50 transition-all duration-500 h-full hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/50 group-hover:shadow-red-500/70 transition-all duration-300 group-hover:scale-110">
                    <FaBox className="w-8 h-14  text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-white group-hover:text-red-400 transition-colors duration-300">
                    {vision?.ourVisionCardTitle || "Our Vision"}
                  </h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {vision?.ourVisionCardDescription || "Loading..."}
                </p>
              </div>
            </div>

            {/* Our Promise Card */}
            <div
              className={`transition-all duration-1000 delay-500 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all duration-500 h-full hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/50 group-hover:shadow-blue-500/70 transition-all duration-300 group-hover:scale-110">
                    <MdWarehouse className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
                    {vision?.ourPromiseCardTitle || "Our Promise"}
                  </h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {vision?.ourPromiseCardDescription || "Loading..."}
                </p>
              </div>
            </div>

            {/* Lightning Fast Card */}
            <div
              className={`transition-all duration-1000 delay-700 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-500 h-full hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-all duration-300 group-hover:scale-110">
                    <FaArrowLeft className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-white group-hover:text-purple-400 transition-colors duration-300">
                    {vision?.lightningFastCardTitle || "Lightning Fast"}
                  </h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {vision?.lightningFastCardDescription || "Loading..."}
                </p>
              </div>
            </div>

            {/* Kitting & Custom Projects Card */}
            <div
              className={`transition-all duration-1000 delay-900 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl hover:shadow-green-500/20 hover:border-green-500/50 transition-all duration-500 h-full hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/50 group-hover:shadow-green-500/70 transition-all duration-300 group-hover:scale-110">
                    <FaPuzzlePiece className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-white group-hover:text-green-400 transition-colors duration-300">
                    {vision?.projectTitle}
                  </h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {vision?.projectDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Call-to-Action */}
          {/* <div className="text-center">
            <div
              className={`transition-all duration-1000 delay-1100 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-12 py-6 rounded-full text-white font-bold text-xl shadow-2xl shadow-red-500/50 hover:shadow-red-500/70 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div> */}
        </div>
      </div>

      {/* Enhanced Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </section>
  );
}
