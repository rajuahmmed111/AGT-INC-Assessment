"use client";

import { Check, ArrowRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Part-Time",
      price: "15",
      hours: "20 hours/week",
      features: [
        "Dedicated VA",
        "Email & Chat Support",
        "Weekly Reports",
        "Free Replacement",
        "Account Manager",
      ],
      popular: false,
    },
    {
      name: "Full-Time",
      price: "12",
      hours: "40 hours/week",
      features: [
        "Dedicated VA",
        "Priority Support",
        "Daily Reports",
        "Free Replacement",
        "Dedicated Account Manager",
        "Multi-task Training",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      hours: "Multiple VAs",
      features: [
        "Multiple Dedicated VAs",
        "24/7 Priority Support",
        "Real-time Reports",
        "Free Replacement",
        "Senior Account Manager",
        "Custom Training",
        "Flexible Scaling",
      ],
      popular: false,
    },
  ];

  const scrollToForm = () => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Flexible Plans for Every Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our
            replacement guarantee and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular
                  ? "border-4 border-blue-600 transform scale-105"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  {plan.price !== "Custom" ? (
                    <>
                      <span className="text-5xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600">/hour</span>
                    </>
                  ) : (
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{plan.hours}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToForm}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Not sure which plan is right for you? Let&apos;s discuss your needs.
          </p>
          <button
            onClick={scrollToForm}
            className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2"
          >
            Get a Custom Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
