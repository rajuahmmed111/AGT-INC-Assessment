import { Star, TrendingUp } from "lucide-react";

export default function SocialProof() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "E-commerce Store Owner",
      text: "Our VA handles everything from customer emails to inventory management. We saved 40 hours per week and increased our response time by 80%.",
      rating: 5,
      metric: "Saved 40 hrs/week",
    },
    {
      name: "Michael Chen",
      company: "Marketing Agency",
      text: "The quality of work is outstanding. Our VA manages social media for 12 clients and the results have been incredible. Best decision we made.",
      rating: 5,
      metric: "3x engagement growth",
    },
    {
      name: "Emily Rodriguez",
      company: "Real Estate Firm",
      text: "From lead generation to appointment scheduling, our VA has become an essential part of our team. The onboarding was seamless.",
      rating: 5,
      metric: "200+ leads/month",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Business Owners Like You
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See how our virtual assistants have transformed businesses across
            industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 p-8 rounded-xl shadow-xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {testimonial.company}
                </div>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {testimonial.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">150+</div>
            <div className="text-blue-100">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-blue-100">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10k+</div>
            <div className="text-blue-100">Tasks Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
