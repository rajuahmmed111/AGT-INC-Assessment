import {
  Truck,
  Clock,
  Shield,
  Star,
  CheckCircle,
  TrendingUp,
  Rocket,
  Globe,
  Users,
  Sparkles,
  Crown,
  Flame,
} from "lucide-react";
import Link from "next/link";

export default function Features() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-black/5 to-gray-900/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-red-400/5 to-red-500/5 rounded-full blur-2xl animate-float delay-500"></div>

        {/* Geometric patterns */}
        <div className="absolute top-32 right-32 w-16 h-16 border-2 border-red-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-40 w-12 h-12 border border-black/10 rounded-full animate-ping delay-1000"></div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-400/30 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}

        {/* Dynamic lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1000 1000"
          fill="none"
        >
          <path
            d="M0,200 Q250,150 500,200 T1000,200"
            stroke="url(#featureGradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,800 Q250,750 500,800 T1000,800"
            stroke="url(#featureGradient2)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse delay-500"
          />
          <defs>
            <linearGradient
              id="featureGradient1"
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
              id="featureGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(0, 0, 0, 0)" />
              <stop offset="50%" stopColor="rgba(0, 0, 0, 0.2)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Eye-Catching Section Heading */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-3 mb-6 bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm px-8 py-4 rounded-full border border-red-200 shadow-xl">
            <Sparkles className="w-6 h-6 text-red-600 animate-pulse" />
            <span className="text-red-600 font-bold text-xl">
              Premium Excellence
            </span>
            <Crown className="w-6 h-6 text-red-600 animate-bounce" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            What makes us{" "}
            <span className="text-red-600 relative inline-block">
              legendary
              <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
              <Flame className="absolute -top-2 -right-2 w-8 h-8 text-red-500 animate-bounce" />
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the revolutionary advantages that make us the
            <span className="text-red-600 font-bold"> undisputed leader </span>
            in Amazon FBA prep services
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {/* Row 1: Large Feature Card */}
          <div className="group relative">
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-1 shadow-2xl hover:shadow-red-500/30 transition-all duration-500">
              <div className="bg-white rounded-3xl p-8 md:p-12 h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600 rounded-full blur-2xl"></div>
                </div>

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
                      Lightning-Fast 48H Turnaround
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      Your inventory doesn&apos;t just arrive—it{" "}
                      <span className="text-red-600 font-bold">
                        rockets out
                      </span>{" "}
                      within 48 hours. No delays, no excuses, just pure speed.
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full">
                        <Clock className="w-5 h-5 text-red-600" />
                        <span className="text-red-600 font-semibold">
                          48 Hours Max
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <span className="text-green-600 font-semibold">
                          99.8% On-Time
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-2xl p-8 border-2 border-red-200 group-hover:border-red-400 transition-all duration-500">
                      <div className="text-center space-y-4">
                        <div className="text-6xl font-bold text-red-600">
                          48
                        </div>
                        <div className="text-xl font-semibold text-gray-700">
                          Hours Maximum
                        </div>
                        <div className="w-full bg-red-100 rounded-full h-3">
                          <div className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full w-full animate-pulse"></div>
                        </div>
                        <div className="text-sm text-gray-600">
                          Industry Average: 5-7 days
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Two Medium Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tax-Free Card */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-1 shadow-2xl hover:shadow-green-500/30 transition-all duration-500">
                <div className="bg-white rounded-3xl p-8 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                      <div className="bg-green-100 px-3 py-1 rounded-full">
                        <span className="text-green-700 font-bold text-xs">
                          0% TAX
                        </span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-black group-hover:text-green-600 transition-colors duration-300">
                      Tax-FREE Oregon
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Save{" "}
                      <span className="text-green-600 font-bold">
                        thousands
                      </span>{" "}
                      with our strategic Oregon location
                    </p>

                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-700">
                          Your Savings
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        $0
                      </div>
                      <div className="text-sm text-green-600">
                        in sales tax, forever
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
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Truck className="w-7 h-7 text-white" />
                      </div>
                      <div className="bg-blue-100 px-3 py-1 rounded-full">
                        <span className="text-blue-700 font-bold text-xs">
                          PRO GRADE
                        </span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300">
                      Pro Loading Docks
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Enterprise-grade{" "}
                      <span className="text-blue-600 font-bold">LTL & FTL</span>{" "}
                      capabilities
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">
                          Dedicated loading bays
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">
                          24/7 receiving capability
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className="text-center relative">
          <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-3xl p-12 md:p-16 text-white relative overflow-hidden shadow-2xl border border-gray-800">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl -translate-x-32 -translate-y-32 animate-float"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-600/20 rounded-full blur-3xl translate-x-24 translate-y-24 animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-red-400/10 rounded-full blur-2xl animate-float delay-500"></div>

            {/* Floating particles */}
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-400 rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              ></div>
            ))}

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-8 bg-red-600/20 backdrop-blur-sm px-8 py-4 rounded-full border border-red-500/30">
                <Users className="w-6 h-6 text-red-400 animate-pulse" />
                <span className="text-red-400 font-bold text-xl">
                  Join 10,000+ Elite Sellers
                </span>
                <Crown className="w-6 h-6 text-red-400 animate-bounce" />
              </div>

              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Rapid Flow Fulfillment advantage{" "}
                <span className="text-red-500 relative">
                  Ready to dominate with
                  <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
                </span>
                ?
              </h3>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-bounce">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-red-400">48H</div>
                    <div className="text-white font-semibold">Turnaround</div>
                  </div>

                  <div className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-spin">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-green-400">0%</div>
                    <div className="text-white font-semibold">Sales Tax</div>
                  </div>

                  <div className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse">
                      <Truck className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-white font-semibold">Receiving</div>
                  </div>

                  <div className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-bounce">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-yellow-400">#1</div>
                    <div className="text-white font-semibold">Best Price</div>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <Link href="/testimonial">
                  <button className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-2xl text-xl transition-all duration-300 shadow-2xl hover:shadow-red-500/40 hover:scale-105 flex items-center gap-3 mx-auto">
                    <span>Get Started Today</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
