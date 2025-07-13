"use client";

import React, { useEffect, useState } from "react";
import { Eye, Target, Zap, Star } from "lucide-react";
import { useGetVisionsQuery } from "@/redux/api/visionApi";

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
      className="bg-black py-20 px-6 relative overflow-hidden min-h-screen"
    >
      {/* All your beautiful design remains unchanged */}

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto relative z-10 flex items-center min-h-screen">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-20">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-3 bg-red-500/15 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-red-500/30 mb-8 shadow-2xl shadow-red-500/20">
                <Eye className="w-6 h-6 text-red-400" />
                <span className="text-white font-bold text-4xl uppercase tracking-wider">
                  {vision?.title || "Our Vision"}
                </span>
              </div>

              <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                Shaping The
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 drop-shadow-2xl">
                  Future
                </span>
              </h2>

              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {vision?.description || "Loading..."}
              </p>
            </div>
          </div>

          {/* Vision Cards */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            {/* Left Vision */}
            <div
              className={`space-y-12 transition-all duration-1000 delay-300 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-8">
                {/* Our Vision Card */}
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/30 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/50">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white">
                      {vision?.ourVisionCardTitle || "Our Vision"}
                    </h3>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {vision?.ourVisionCardDescription || "Loading..."}
                  </p>
                </div>

                {/* Our Promise Card */}
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/30 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/50">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white">
                      {vision?.ourPromiseCardTitle || "Our Promise"}
                    </h3>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {vision?.ourPromiseCardDescription || "Loading..."}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Vision */}
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/30 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/50">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-white">
                  {vision?.lightningFastCardTitle || "Lightning Fast"}
                </h3>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                {vision?.lightningFastCardDescription || "Loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
    </section>
  );
}
