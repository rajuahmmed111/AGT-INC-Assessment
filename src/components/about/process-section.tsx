"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";

export default function ProcessSection() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, text: "Receive the package" },
    { id: 2, text: "Inspect the package, ensuring everything is correct" },
    { id: 3, text: "Start prepping the units" },
    { id: 4, text: "Package the units" },
    {
      id: 5,
      text: "Notify the customer that everything is ready for shipment",
    },
    { id: 6, text: "We ship the package out" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= 7) {
          // reset to the first step
          return 1;
        }
        return prev + 1;
      });
    }, 3000);

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
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
          <Check className="w-5 h-5 text-white" />
        </div>
      );
    }

    if (status === "active") {
      return (
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-sm">{stepId}</span>
        </div>
      );
    }

    return (
      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
        <span className="text-white font-semibold text-sm">{stepId}</span>
      </div>
    );
  };

  return (
    <section id="our-process" className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-red-600 text-center mb-12">
          Our process
        </h2>

        {/* Process Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-4 relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-4 top-8 w-0.5 h-6 bg-gray-300"></div>
              )}

              {/* Step Icon */}
              <div className="flex-shrink-0 z-10">{getStepIcon(step.id)}</div>

              {/* Step Content */}
              <div
                className={`flex-1 p-4 rounded-lg transition-all duration-500 ${
                  getStepStatus(step.id) === "active"
                    ? "bg-purple-50 border-l-4 border-black"
                    : "bg-gray-50"
                }`}
              >
                <p
                  className={`text-lg ${
                    getStepStatus(step.id) === "active"
                      ? "text-purple-900 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Step {currentStep} of {steps.length}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-black h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
