"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  RefreshCw,
  BarChart3,
  Tag,
  Settings,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import ContactModal from "./common/ContactModal";

export default function HexprepLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20 md:py-32 overflow-hidden">
        {/* Advanced Background */}
        <div className="absolute inset-0">
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/20 via-transparent to-red-500/20 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-500/15 via-transparent to-red-600/15 animate-pulse delay-1000"></div>
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-600/15 to-red-500/15 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-red-400/10 to-red-500/10 rounded-full blur-2xl animate-float delay-500"></div>

          {/* Geometric Shapes */}
          <div className="absolute inset-0">
            {/* Large hexagons */}
            <div className="absolute top-32 left-32 w-24 h-24 border border-red-500/20 rotate-12 animate-spin-slow">
              <div className="w-full h-full border border-red-400/10 rotate-45"></div>
            </div>
            <div className="absolute bottom-40 right-40 w-32 h-32 border border-white/10 rotate-45 animate-spin-reverse">
              <div className="w-full h-full border border-red-500/15 rotate-12"></div>
            </div>

            {/* Floating triangles */}
            <div className="absolute top-48 right-64 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-red-500/20 animate-bounce delay-300"></div>
            <div className="absolute bottom-64 left-48 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-white/20 animate-bounce delay-700"></div>

            {/* Circles */}
            <div className="absolute top-64 left-64 w-16 h-16 border-2 border-red-400/30 rounded-full animate-ping delay-1000"></div>
            <div className="absolute bottom-48 right-56 w-12 h-12 border-2 border-white/20 rounded-full animate-ping delay-500"></div>
          </div>

          {/* Dynamic Lines */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
              <path
                d="M0,300 Q250,100 500,300 T1000,300"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M0,700 Q250,500 500,700 T1000,700"
                stroke="url(#gradient2)"
                strokeWidth="1"
                fill="none"
                className="animate-pulse delay-500"
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(239, 68, 68, 0)" />
                  <stop offset="50%" stopColor="rgba(239, 68, 68, 0.3)" />
                  <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
                </linearGradient>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.2)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Particle Effect */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-400 rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Radial Overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/30"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main Heading */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to{" "}
              <span className="relative">
                <span className="text-red-500">Matthew</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your Complete Solution for Amazon FBA Prep and Reseller
              Profitability
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-3 text-red-500 group-hover:scale-110 transition-transform duration-300">
                $1,000,000+
              </div>
              <p className="text-gray-300 text-lg">
                Customer Revenue from Prepped and Shipped Products
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-3 text-red-500 group-hover:scale-110 transition-transform duration-300">
                10,000+
              </div>
              <p className="text-gray-300 text-lg">Shipped packages</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              {"Let's work together!"}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your work email"
                className="bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-400 border border-white/20 h-14 text-lg focus:border-red-500 focus:ring-red-500"
              />
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white h-14 px-8 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25 group"
              >
                Get in touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Modal */}
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>

      {/* Features Section */}
      <section className="relative z-20">
        {/* Modern Background for Features */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-white"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-black/5 to-gray-900/5 rounded-full blur-2xl"></div>

          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-32 left-32 w-8 h-8 border border-red-500 rotate-45"></div>
            <div className="absolute top-48 right-48 w-6 h-6 border border-black rotate-12"></div>
            <div className="absolute bottom-32 left-48 w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-48 right-32 w-2 h-2 bg-black rounded-full"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white/90 mt-10 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
            {/* Section Header */}
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Why Choose <span className="text-red-600">Matthew</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We deliver exceptional results with our comprehensive FBA prep
                services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {/* Quick turnaround */}
              <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                    <RefreshCw className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors duration-300">
                  Quick turnaround
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Fast, reliable processing to ensure your products are prepped
                  and shipped without delay.
                </p>
              </div>

              {/* Bulk order handling */}
              <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors duration-300">
                  Bulk order handling
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Efficiently managing and preparing large volumes of inventory
                  for seamless fulfillment.
                </p>
              </div>

              {/* Competitive pricing */}
              <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                    <Tag className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors duration-300">
                  Competitive pricing
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Affordable rates designed to deliver value and reliability for
                  your business.
                </p>
              </div>

              {/* Efficient operations */}
              <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                    <Settings className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors duration-300">
                  Efficient operations
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Streamlined processes ensure smooth, accurate, and timely
                  operations for maximum efficiency.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16 pt-12 border-t border-gray-200 relative z-10">
              <h3 className="text-2xl font-bold text-black mb-4">
                Ready to scale your Amazon business?
              </h3>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25 group"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </div>
  );
}
