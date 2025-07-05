"use client";

import { useEffect, useState } from "react";

export default function OurMissionSection() {
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

    const section = document.getElementById("our-mission");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="our-mission"
      className="bg-black py-20 px-6 relative overflow-hidden min-h-screen"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-red-500 opacity-20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-red-500 opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 border border-red-500 opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-8 h-8 bg-white opacity-10 transform rotate-45 animate-ping"></div>
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-bounce opacity-60 delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-30 delay-700"></div>
        <div className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-white rounded-full animate-pulse opacity-50 delay-1000"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-10 animate-pulse"></div>
        <div className="absolute left-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Glowing effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-32 w-40 h-40 bg-red-500 rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-32 w-48 h-48 bg-white rounded-full opacity-5 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content Section - Left Only */}
      <div className="max-w-4xl mx-auto relative z-10 h-full flex items-center">
        <div className="space-y-8">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-6xl lg:text-8xl font-black text-white leading-none mb-8">
              Our
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Mission
              </span>
            </h2>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="text-2xl text-white leading-relaxed">
              At{" "}
              <span className="text-red-400 font-bold">
                Rapid Flow Fulfillment
              </span>
              , our mission is simple: to deliver the kind of prep and logistics
              service we always wished we had as sellers. After years of
              navigating unreliable, slow, and overpriced fulfillment centers
              while running our own e-commerce business, we realized the
              industry needed a serious upgrade. That’s why we built Rapid Flow
              — a fulfillment solution created by sellers, for sellers. We’re
              here to bring speed, transparency, and true partnership back to
              the 3PL experience. Our goal is to help e-commerce brands grow by
              handling their backend operations with the same care and urgency
              we gave our own.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
    </section>
  );
}
