import { DollarSign, Award, Zap, Shield, Users, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Premium quality at a fraction of the cost of local hiring",
    },
    {
      icon: Award,
      title: "Skilled Professionals",
      description: "Rigorously vetted and trained in their specializations",
    },
    {
      icon: Zap,
      title: "Easy Onboarding",
      description: "Start working with your VA in as little as 48 hours",
    },
    {
      icon: Shield,
      title: "Replacement Guarantee",
      description: "Not satisfied? We will find you a better match at no cost",
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Personal support to ensure smooth operations",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "VAs available in your timezone with flexible scheduling",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to providing exceptional virtual assistant services
            that drive real results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <reason.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
