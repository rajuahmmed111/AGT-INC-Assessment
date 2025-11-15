import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do you train your virtual assistants?",
      answer:
        "All our VAs go through a rigorous 3-week training program covering communication skills, industry-specific tools, and best practices. They are tested on real-world scenarios before being matched with clients.",
    },
    {
      question: "What is your guarantee policy?",
      answer:
        "We offer a 100% satisfaction guarantee. If you are not happy with your VA within the first 30 days, we will provide a free replacement. We also offer ongoing replacements at no additional cost if issues arise.",
    },
    {
      question: "What time zones do you support?",
      answer:
        "Our VAs work across all major time zones including EST, PST, GMT, and more. We match you with VAs who can work during your preferred hours, whether that is your timezone or extended coverage.",
    },
    {
      question: "How fast can I get started?",
      answer:
        "Most clients are matched with a VA and onboarded within 48-72 hours. We handle all the setup, training on your systems, and ensure your VA is ready to contribute from day one.",
    },
    {
      question: "Is there a long-term contract required?",
      answer:
        "No long-term contracts required. We offer flexible month-to-month agreements. You can scale up, scale down, or pause services with just 2 weeks notice.",
    },
    {
      question: "How do replacements work?",
      answer:
        "If your VA is not the right fit, simply contact your account manager. We will find a replacement within 5 business days and ensure a smooth transition with no additional fees.",
    },
    {
      question: "What tools and software do your VAs know?",
      answer:
        "Our VAs are trained on popular business tools including Google Workspace, Microsoft Office, Slack, Asana, Trello, Shopify, WordPress, HubSpot, and many more. We also provide custom training for your specific tools.",
    },
    {
      question: "How do you ensure quality and accountability?",
      answer:
        "Each VA has a dedicated account manager who monitors performance, conducts regular check-ins, and provides ongoing training. We also use time-tracking tools and deliver weekly reports on tasks completed.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our virtual assistant services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button
            onClick={() =>
              document
                .getElementById("lead-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-blue-600 font-semibold hover:text-blue-700"
          >
            Contact us for personalized answers
          </button>
        </div>
      </div>
    </section>
  );
}
