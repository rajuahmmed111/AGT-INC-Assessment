"use client";

import { useGetFrasQuery } from "@/redux/api/fraApi";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { data } = useGetFrasQuery({});
  const fra = data?.data?.[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-section"
      className="bg-black py-20 px-6 relative overflow-hidden"
    >
      {/* Backgrounds, Animations, and Decorations kept same (unchanged) */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="space-y-12">
            {/* Heading */}
            <div className="space-y-6">
              <div
                className={`transition-all duration-1000 transform ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <div className="inline-block bg-red-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-red-500/20 mb-6">
                  <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                    About Rapid Flow Fulfillment
                  </span>
                </div>

                <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                  {fra?.title || "Your Trusted"}
                </h2>
              </div>
            </div>

            {/* Description */}
            <div
              className={`transition-all duration-1000 delay-300 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {fra?.description ||
                  "At Rapid Flow Fulfillment, we’re not just another prep center — we’re former 7-figure Amazon sellers who know exactly what it’s like to be on your side of the business."}
              </p>

              {/* <p className="text-xl text-gray-300 leading-relaxed">
                Based in New Jersey, Rapid Flow Fulfillment was created to bring
                true hands-on, seller-first service to the logistics world.
              
              </p> */}
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 delay-700 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="grid gap-6">
                {/* Fast Card */}
                <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                      <div className="text-2xl font-black text-white">F</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white mb-1">
                        {fra?.fastTitle || "Reliability"}
                      </div>
                      <div className="text-gray-400">{fra?.fastDescription || "Reliability"}</div>
                    </div>
                  </div>
                </div>

                {/* Reliable Card */}
                <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                      <div className="text-2xl font-black text-white">R</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white mb-1">
                        {fra?.reliableTitle || "Flexible Pricing"}
                      </div>
                      <div className="text-gray-400">
                        {fra?.reliableDescription || "Flexible Pricing"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Affordable Card */}
                <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                      <div className="text-2xl font-black text-white">A</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white mb-1">
                        {fra?.affordableTitle || "Flexible Solutions"}
                      </div>
                      <div className="text-gray-400">
                        {fra?.affordableDescription || "Affordable"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Bottom border pulse effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
    </section>
  );
}
