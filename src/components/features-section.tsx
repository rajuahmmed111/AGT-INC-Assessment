"use client";

import {
  Truck,
  Shield,
  CheckCircle,
  Rocket,
  Globe,
  Users,
  Sparkles,
  Crown,
  Flame,
} from "lucide-react";
import Link from "next/link";
import ContactModal from "./common/ContactModal";
import { useState } from "react";
import { useGetHomesQuery } from "@/redux/api/homeApi";

export default function Features() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetHomesQuery({});
  const home = data?.data?.[0];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 relative overflow-hidden">
      {/* ...background effects omitted for brevity... */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-3 mb-6 bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm px-8 py-4 rounded-full border border-red-200 shadow-xl">
            <Sparkles className="w-6 h-6 text-red-600 animate-pulse" />
            <span className="text-red-600 font-bold text-xl">
              Premium Excellence
            </span>
            <Crown className="w-6 h-6 text-red-600 animate-bounce" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            {home?.title?.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-red-600 relative inline-block">
              {home?.title?.split(" ").slice(-1)}
              <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
              <Flame className="absolute -top-2 -right-2 w-8 h-8 text-red-500 animate-bounce" />
            </span>
          </h2>

          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {home?.description}
          </p>
        </div>

        {/* First Large Card */}
        <div className="space-y-8 mb-16">
          <div className="group relative">
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-1 shadow-2xl hover:shadow-red-500/30 transition-all duration-500">
              <div className="bg-white rounded-3xl p-8 md:p-12 h-full relative overflow-hidden">
                {/* ...gradient bg omitted... */}
                <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <Rocket className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-green-100 px-4 py-2 rounded-full">
                        <span className="text-green-700 font-bold text-sm">
                          FASTEST IN INDUSTRY
                        </span>
                      </div>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-black group-hover:text-red-600 transition-colors duration-300">
                      {home?.fastestCardTitle}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {home?.fastestCardDescription}
                    </p>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-2xl p-8 border-2 border-red-200 group-hover:border-red-400 transition-all duration-500">
                      <div className="text-center space-y-4">
                        <div className="text-6xl font-bold text-red-600">
                          {home?.fastestCardHours || "48"}
                        </div>
                        <div className="text-xl font-semibold text-gray-700">
                          Hours Maximum
                        </div>
                        <div className="w-full bg-red-100 rounded-full h-3">
                          <div className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full w-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row: 2 Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tax-Free Card */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-1 shadow-2xl hover:shadow-green-500/30 transition-all duration-500">
                <div className="bg-white rounded-3xl p-8 h-full relative overflow-hidden">
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-black group-hover:text-green-600 transition-colors duration-300">
                      {home?.taxCardTitle}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {home?.taxCardDescription}
                    </p>

                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-700">
                          Your Savings
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        ${home?.taxCardPrice || 0}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Loading Docks Card */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-1 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
                <div className="bg-white rounded-3xl p-8 h-full relative overflow-hidden">
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Truck className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300">
                      {home?.receiveCardTitle}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {home?.receiveCardDescription}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">
                          {home?.receiveCardServiceTime || "24/7"} Receiving
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center relative">
          <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-3xl p-12 md:p-16 text-white relative overflow-hidden shadow-2xl border border-gray-800">
            {/* ...backgrounds omitted... */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-8 bg-red-600/20 backdrop-blur-sm px-8 py-4 rounded-full border border-red-500/30">
                <Users className="w-6 h-6 text-red-400 animate-pulse" />
                <span className="text-red-400 font-bold text-xl">
                  Join 10,000+ Elite Sellers
                </span>
                <Crown className="w-6 h-6 text-red-400 animate-bounce" />
              </div>

              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                {home?.subTitle}{" "}
                <span className="text-red-500 relative">
                  Ready to dominate with
                  <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
                </span>
                ?
              </h3>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-bounce">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-red-400">
                      {home?.fastestCardHours}
                    </div>
                    <div className="text-white font-semibold">Hours Max</div>
                  </div>

                  <div className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-spin">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-green-400">
                      {home?.taxCardPrice || "0"}%
                    </div>
                    <div className="text-white font-semibold">Sales Tax</div>
                  </div>

                  <div className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse">
                      <Truck className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-blue-400">
                      {home?.receiveCardServiceTime}
                    </div>
                    <div className="text-white font-semibold">Receiving</div>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <Link href="#">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-2xl text-xl transition-all duration-300 shadow-2xl hover:shadow-red-500/40 hover:scale-105 flex items-center gap-3 mx-auto"
                  >
                    <span>Get Started Today</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
