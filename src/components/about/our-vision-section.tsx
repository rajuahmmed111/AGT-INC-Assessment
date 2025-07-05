"use client";

import React from "react";

import { useEffect, useState } from "react";
import {
  Eye,
  Target,
  Rocket,
  Globe,
  TrendingUp,
  Zap,
  Star,
} from "lucide-react";

export default function OurVisionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeVision, setActiveVision] = useState(0);

  const visionPoints = [
    {
      icon: Globe,
      title: "Global Expansion",
      description:
        "Becoming the world's most trusted fulfillment partner for e-commerce businesses",
      stat: "50+ Countries",
    },
    {
      icon: Rocket,
      title: "Innovation Leader",
      description:
        "Pioneering cutting-edge technology solutions for seamless order fulfillment",
      stat: "99.9% Accuracy",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description:
        "Building eco-friendly operations while scaling businesses responsibly",
      stat: "Carbon Neutral",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Setting new industry standards for speed and efficiency in fulfillment",
      stat: "24hr Turnaround",
    },
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVision((prev) => (prev + 1) % visionPoints.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [visionPoints.length]);

  return (
    <section
      id="our-vision"
      className="bg-black py-20 px-6 relative overflow-hidden min-h-screen"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-red-500/5 to-transparent animate-pulse delay-1000"></div>
        </div>

        {/* Large animated orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-red-600/15 to-red-700/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Additional floating orbs */}
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-red-400/15 to-red-300/15 rounded-full blur-2xl animate-bounce delay-200"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-red-600/15 to-red-500/15 rounded-full blur-2xl animate-float delay-1500"></div>

        {/* Complex geometric patterns */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-32 left-32 w-20 h-20 border-4 border-red-500 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 right-32 w-16 h-16 border-2 border-white rotate-12 animate-spin-reverse"></div>
          <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-red-500 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-white rounded-full animate-ping delay-700"></div>
          <div className="absolute top-2/3 left-1/5 w-14 h-14 border border-red-600 rounded-full animate-pulse delay-900"></div>
          <div className="absolute bottom-1/5 right-1/5 w-6 h-6 bg-red-400 transform rotate-45 animate-bounce delay-1200"></div>
        </div>

        {/* Enhanced SVG patterns */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            {/* Vision rays emanating from center */}
            <g transform="translate(500,500)">
              {[...Array(8)].map((_, i) => (
                <path
                  key={i}
                  d={`M0,0 L${200 * Math.cos((i * 45 * Math.PI) / 180)},${
                    200 * Math.sin((i * 45 * Math.PI) / 180)
                  }`}
                  stroke="url(#visionGradient)"
                  strokeWidth="2"
                  opacity="0.6"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,400;400,0;0,400"
                    dur={`${6 + i}s`}
                    repeatCount="indefinite"
                  />
                </path>
              ))}
            </g>

            {/* Orbital rings */}
            <circle
              cx="500"
              cy="500"
              r="150"
              stroke="url(#visionGradient2)"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,942;942,0;0,942"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx="500"
              cy="500"
              r="250"
              stroke="url(#visionGradient3)"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
            >
              <animate
                attributeName="stroke-dasharray"
                values="942,0;0,942;942,0"
                dur="10s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Connection nodes */}
            <circle cx="300" cy="300" r="6" fill="#ef4444" opacity="0.8">
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="4;10;4"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="700" cy="300" r="5" fill="#dc2626" opacity="0.7">
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="3;8;3"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="300" cy="700" r="7" fill="#b91c1c" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.2;0.9;0.2"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="5;12;5"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="700" cy="700" r="4" fill="#991b1b" opacity="0.9">
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur="1.8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="2;7;2"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>

            <defs>
              <radialGradient id="visionGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0.8)" />
                <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
              </radialGradient>
              <linearGradient
                id="visionGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(220, 38, 38, 0)" />
                <stop offset="50%" stopColor="rgba(220, 38, 38, 0.8)" />
                <stop offset="100%" stopColor="rgba(220, 38, 38, 0)" />
              </linearGradient>
              <linearGradient
                id="visionGradient3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(185, 28, 28, 0)" />
                <stop offset="50%" stopColor="rgba(185, 28, 28, 0.6)" />
                <stop offset="100%" stopColor="rgba(185, 28, 28, 0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-400 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex items-center min-h-screen">
        <div className="w-full">
          {/* Header Section */}
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
                  Our Vision
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
                At{" "}
                <span className="text-red-400 font-bold">
                  Rapid Flow Fulfillment
                </span>
                , our vision is to redefine what e-commerce sellers expect from
                a 3PL partner. We are building a fulfillment center where
                same-day shipping is the standard, calls are always answered,
                and nothing is outsourced — because we believe in full
                accountability and hands-on service. Born from the frustrations
                we faced as sellers, our goal is to create a seamless,
                seller-first experience powered by real people who care. We
                envision a future where every brand, regardless of size, can
                rely on a logistics partner that’s fast, responsive, and fully
                in-house — delivering the kind of support we always wished we
                had.
              </p>
            </div>
          </div>

          {/* Main Vision Content */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            {/* Left Side - Vision Statement */}
            <div
              className={`space-y-12 transition-all duration-1000 delay-300 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/30 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/50">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    To revolutionize the fulfillment industry by creating
                    seamless, intelligent, and sustainable solutions that
                    empower businesses to reach their full potential while
                    delivering exceptional customer experiences.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/30 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/50">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white">
                      Our Promise
                    </h3>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    We promise to be more than just a service provider -
                    we&apos;re your strategic partner in growth, committed to
                    innovation, sustainability, and excellence in every package
                    we handle.
                  </p>
                </div>
              </div>

             
            </div>

            {/* Right Side - Vision Points Carousel */}
            <div
              className={`transition-all duration-1000 delay-500 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Main Vision Card */}
                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/30 shadow-2xl min-h-[400px] flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-red-500/50 animate-pulse">
                      {React.createElement(visionPoints[activeVision].icon, {
                        className: "w-12 h-12 text-white",
                      })}
                    </div>

                    <h3 className="text-4xl font-black text-white mb-6">
                      {visionPoints[activeVision].title}
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                      {visionPoints[activeVision].description}
                    </p>

                    <div className="inline-block bg-red-500/20 border-2 border-red-500/40 rounded-2xl px-6 py-3">
                      <span className="text-red-300 font-bold text-lg">
                        {visionPoints[activeVision].stat}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vision Point Indicators */}
                <div className="flex justify-center gap-4 mt-8">
                  {visionPoints.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveVision(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === activeVision
                          ? "bg-red-500 w-12 shadow-lg shadow-red-500/50"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Section */}
          <div
            className={`transition-all duration-1000 delay-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/30 hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="text-5xl font-black text-red-400 mb-3">
                  2030
                </div>
                <div className="text-white font-bold text-lg">
                  Carbon Neutral Goal
                </div>
              </div>

              <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/30 hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="text-5xl font-black text-red-400 mb-3">1M+</div>
                <div className="text-white font-bold text-lg">
                  Packages Monthly
                </div>
              </div>

              <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/30 hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="text-5xl font-black text-red-400 mb-3">
                  24/7
                </div>
                <div className="text-white font-bold text-lg">
                  Global Operations
                </div>
              </div>

              <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/30 hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="text-5xl font-black text-red-400 mb-3">
                  100%
                </div>
                <div className="text-white font-bold text-lg">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
    </section>
  );
}
