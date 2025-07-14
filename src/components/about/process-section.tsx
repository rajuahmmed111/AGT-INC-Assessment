"use client";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { useGetProcessesQuery } from "@/redux/api/processApi";

export default function ProcessSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [steps, setSteps] = useState<{ id: number; text: string }[]>([]);

  const { data } = useGetProcessesQuery({});

  useEffect(() => {
    if (data?.data?.[0]) {
      const process = data.data[0];
      const newSteps = [
        { id: process.orderId1, text: process.textRoles1 },
        { id: process.orderId2, text: process.textRoles2 },
        { id: process.orderId3, text: process.textRoles3 },
        { id: process.orderId4, text: process.textRoles4 },
        { id: process.orderId5, text: process.textRoles5 },
        { id: process.orderId6, text: process.textRoles6 },
      ];
      setSteps(newSteps.sort((a, b) => a.id - b.id));
    }
  }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= 7) return 1;
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStepStatus = (stepId: number) => {
    if (stepId < currentStep) return "completed";
    if (stepId === currentStep) return "active";
    return "pending";
  };

  const getStepIcon = (stepId: number) => {
    const status = getStepStatus(stepId);
    if (status === "completed") {
      return (
        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
          <Check className="w-8 h-8 text-white" />
        </div>
      );
    }
    if (status === "active") {
      return (
        <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-white font-bold text-xl">{stepId}</span>
        </div>
      );
    }
    return (
      <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-xl">{stepId}</span>
      </div>
    );
  };

  return (
    <section
      id="our-process"
      className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 relative overflow-hidden"
    >
      {/* Animated Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center animate-pulse"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
            animation: "float 6s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black/3 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-red-500/20 mb-6">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
             Sets Us Apart
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            {data?.data?.[0]?.title ?? "Our Process"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {data?.data?.[0]?.description ??
              "A streamlined 6-step process designed to handle your packages with precision and care"}
          </p>
        </div>

        {/* Process Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual Progress */}
          <div className="relative">
            <div
              className="relative w-80 h-80 mx-auto transition-transform duration-700 ease-in-out cursor-pointer hover:rotate-360"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transform: isHovered
                  ? "rotate(360deg) scale(1.05)"
                  : "rotate(0deg) scale(1)",
              }}
            >
              <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
              <div
                className="absolute inset-0 rounded-full border-8 border-red-500 transition-all duration-1000"
                style={{
                  clipPath: `polygon(50% 50%, 50% 0%, ${
                    50 +
                    50 *
                      Math.cos(
                        (((Math.min(currentStep, steps.length) / steps.length) *
                          360 -
                          90) *
                          Math.PI) /
                          180
                      )
                  }% ${
                    50 +
                    50 *
                      Math.sin(
                        (((Math.min(currentStep, steps.length) / steps.length) *
                          360 -
                          90) *
                          Math.PI) /
                          180
                      )
                  }%, 50% 50%)`,
                }}
              ></div>
              <div className="absolute inset-8 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center">
                <div className="text-4xl font-black text-gray-900 mb-2">
                  Step
                </div>
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  {Math.min(currentStep, steps.length)}
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  of {steps.length}
                </div>
              </div>
              {steps.map((step, index) => {
                const angle = (index / steps.length) * 360 - 90;
                const x = 50 + 45 * Math.cos((angle * Math.PI) / 180);
                const y = 50 + 45 * Math.sin((angle * Math.PI) / 180);
                return (
                  <div
                    key={step.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {getStepIcon(step.id)}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Step Details */}
          <div className="space-y-6">
            {steps.map((step) => {
              const status = getStepStatus(step.id);
              return (
                <div
                  key={step.id}
                  className={`relative p-6 rounded-2xl transition-all duration-500 transform ${
                    status === "active"
                      ? "bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 scale-105 shadow-xl"
                      : status === "completed"
                      ? "bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 shadow-lg"
                      : "bg-white border-2 border-gray-100 shadow-md hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                        status === "active"
                          ? "bg-red-500 text-white"
                          : status === "completed"
                          ? "bg-green-500 text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {status === "completed" ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <div
                      className={`text-sm font-semibold uppercase tracking-wider ${
                        status === "active"
                          ? "text-red-600"
                          : status === "completed"
                          ? "text-green-600"
                          : "text-gray-500"
                      }`}
                    >
                      {status === "active"
                        ? "In Progress"
                        : status === "completed"
                        ? "Completed"
                        : "Pending"}
                    </div>
                  </div>
                  <p
                    className={`text-lg leading-relaxed ${
                      status === "active"
                        ? "text-red-900 font-semibold"
                        : status === "completed"
                        ? "text-green-900 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {step.text}
                  </p>
                  {status === "active" && (
                    <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-red-500 to-red-600 rounded-r-full"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-700">
                Overall Progress
              </span>
              <span className="text-lg font-bold text-red-600">
                {Math.round(
                  (Math.min(currentStep, steps.length) / steps.length) * 100
                )}
                %
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-red-500 to-red-600 h-4 rounded-full transition-all duration-1000 relative overflow-hidden"
                style={{
                  width: `${
                    (Math.min(currentStep, steps.length) / steps.length) * 100
                  }%`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
