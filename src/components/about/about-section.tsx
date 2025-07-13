"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

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
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

      {/* Hexagonal grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ef4444' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large hexagons */}
        <div className="absolute -top-20 -left-20 w-40 h-40 opacity-10">
          <div className="w-full h-full bg-red-500 transform rotate-45 animate-spin-slow rounded-lg"></div>
        </div>
        <div className="absolute -top-10 right-20 w-32 h-32 opacity-10">
          <div className="w-full h-full bg-red-500 transform rotate-12 animate-pulse rounded-full"></div>
        </div>
        <div className="absolute bottom-20 -right-20 w-48 h-48 opacity-10">
          <div className="w-full h-full bg-red-500 transform -rotate-45 animate-spin-slow rounded-lg"></div>
        </div>
        <div className="absolute bottom-40 -left-10 w-36 h-36 opacity-10">
          <div className="w-full h-full bg-red-500 transform rotate-90 animate-bounce rounded-full"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-80 delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-bounce opacity-40 delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-70 delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-50 delay-500"></div>
        <div className="absolute top-3/4 right-1/6 w-1 h-1 bg-red-400 rounded-full animate-bounce opacity-60 delay-1200"></div>

        {/* Animated lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-20 animate-pulse delay-500"></div>
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full opacity-5 blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-red-600 rounded-full opacity-5 blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500 rounded-full opacity-3 blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Circuit-like pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <path
            d="M50 50 L150 50 L150 150 L250 150 L250 250 L350 250"
            stroke="#ef4444"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,1000;1000,0;0,1000"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M350 50 L250 50 L250 150 L150 150 L150 250 L50 250"
            stroke="#ef4444"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="stroke-dasharray"
              values="1000,0;0,1000;1000,0"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          <circle cx="150" cy="150" r="3" fill="#ef4444" opacity="0.5">
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="250" cy="150" r="3" fill="#ef4444" opacity="0.5">
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* New Layout Structure */}
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
                  Your Trusted
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                    Business Partner
                  </span>
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
                At{" "}
                <span className="text-red-400 font-bold">
                  Rapid Flow Fulfillment
                </span>
                ,we’re not just another prep center — we’re former 7-figure
                Amazon sellers who know exactly what it’s like to be on your
                side of the business. After years of scaling our own e-commerce
                brands and dealing with slow, overpriced, and unreliable
                fulfillment centers, we decided to build the solution we always
                needed
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                Based in New Jersey, Rapid Flow Fulfillment was created to bring
                true hands-on, seller-first service to the logistics world.
                We’ve lived the pain of delayed shipments, missed FBA windows,
                and outsourced customer service — and we’re here to make sure
                you don’t have to.
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={`transition-all duration-1000 delay-500 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* <button className="group relative px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25">
                <span className="relative z-10">Learn More About Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button> */}
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
                      <div className="text-2xl font-black text-white">R</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white mb-1">
                        Reliability
                      </div>
                      <div className="text-gray-400">
                        We deliver what we promise, always or your money back.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reliable Card */}
                <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                      <div className="text-2xl font-black text-white">F</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white mb-1">
                        Flexible Pricing
                      </div>
                      <div className="text-gray-400">
                        Pricing that helps you scale.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Affordable Card */}
                <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                      <div className="text-2xl font-black text-white">F</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white mb-1">
                        Flexible Solutions
                      </div>
                      <div className="text-gray-400">
                        Business designed to fit your needs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
    </section>
  );
}
