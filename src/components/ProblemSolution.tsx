import { Clock, DollarSign, TrendingUp, Shield } from "lucide-react";

export default function ProblemSolution() {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Focus on growth while we handle the rest",
    },
    {
      icon: DollarSign,
      title: "Save Costs",
      description: "70% less than hiring locally",
    },
    {
      icon: TrendingUp,
      title: "100% Trained",
      description: "Pre-vetted and ready to start",
    },
    {
      icon: Shield,
      title: "Easy Replacement",
      description: "Free replacement if not satisfied",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Too Many Tasks? No Time? High Hiring Costs?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our skilled virtual assistants take care of your daily operations so
            you can focus on what matters most—growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
