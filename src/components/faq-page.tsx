"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import ContactModal from "./common/ContactModal";

export default function Faq() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const faqData = [
    {
      id: 1,
      category: "General",
      question: "What is HexPrep and what services do you offer?",
      answer:
        "HexPrep is a professional Amazon FBA prep service provider. We offer comprehensive prep services including receiving, inspecting, prepping, packaging, and shipping your products to Amazon fulfillment centers. We also provide storage solutions and handle both FBA and FBM orders.",
    },
    {
      id: 2,
      category: "General",
      question: "Where are your warehouses located?",
      answer:
        "We operate from two strategic locations: our main warehouse in Hillsboro, Oregon (which offers tax-free advantages), and our secondary facility in Chicago, Illinois for faster shipping to central and eastern markets.",
    },
    {
      id: 3,
      category: "Pricing",
      question: "How much do your services cost?",
      answer:
        "Our pricing is competitive and varies based on the type and volume of services required. We offer transparent pricing with no hidden fees. Contact us for a customized quote based on your specific needs and volume requirements.",
    },
    {
      id: 4,
      category: "Pricing",
      question: "Do you offer volume discounts?",
      answer:
        "Yes, we offer volume discounts for larger shipments and long-term partnerships. The more you ship with us, the better rates you'll receive. Contact our team to discuss volume pricing options.",
    },
    {
      id: 5,
      category: "Process",
      question: "What is your turnaround time?",
      answer:
        "Our standard turnaround time is 48 hours from when we receive your inventory. This includes receiving, inspecting, prepping, and shipping to Amazon. For urgent orders, we may be able to accommodate faster processing.",
    },
    {
      id: 6,
      category: "Process",
      question: "What prep services do you provide?",
      answer:
        "We provide all standard Amazon FBA prep services including: labeling, bagging, bundling, bubble wrapping, taping, removal of existing labels, quality inspections, and custom prep work as needed to meet Amazon's requirements.",
    },
    {
      id: 7,
      category: "Process",
      question: "How do you handle damaged or defective items?",
      answer:
        "During our inspection process, we identify any damaged or defective items and immediately notify you with photos and details. We can either return these items to you, dispose of them per your instructions, or attempt repairs if feasible.",
    },
    {
      id: 8,
      category: "Shipping",
      question: "How do I send my products to your warehouse?",
      answer:
        "You can ship your products directly to our warehouse addresses. We'll provide you with specific shipping instructions and our warehouse address once you become a client. We accept shipments via all major carriers.",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(faqData.map((item) => item.category))),
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Koro Background Elements */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ height: "calc(100% - 300px)" }}
      >
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-red-500 rotate-45 animate-pulse opacity-20"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-red-500 opacity-10 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white rotate-12 animate-spin-slow opacity-15"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-white opacity-5 animate-pulse"></div>

        {/* Animated lines - contained within main content */}
        <div
          className="absolute top-0 left-1/4 w-px bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-20 animate-pulse"
          style={{ height: "calc(100vh - 200px)" }}
        ></div>
        <div
          className="absolute top-0 right-1/3 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-10 animate-pulse delay-1000"
          style={{ height: "calc(100vh - 200px)" }}
        ></div>

        {/* Valo-style geometric patterns */}
        <div className="absolute top-1/4 left-0 w-32 h-32 border-l-2 border-t-2 border-red-500 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-32 h-32 border-r-2 border-b-2 border-white opacity-15 animate-pulse delay-500"></div>

        {/* Moving particles */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-20 delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping opacity-25 delay-1500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-black py-36 px-6 border-b border-red-500/20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/25 animate-pulse">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our Amazon FBA prep services,
            pricing, and processes.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="relative py-8 px-6 bg-gradient-to-r from-black via-gray-900 to-black border-b border-red-500/20">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full bg-gray-900 border-red-500/30 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-red-500/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-800 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No results found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((item) => (
                <Card
                  key={item.id}
                  className="bg-gray-900 border-gray-800 hover:border-red-500/50 shadow-lg hover:shadow-red-500/10 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors group"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded border border-red-500/30">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-red-400 transition-colors">
                          {item.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {openItems.includes(item.id) ? (
                          <ChevronUp className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                        )}
                      </div>
                    </button>

                    {openItems.includes(item.id) && (
                      <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                        <div className="border-t border-red-500/20 pt-4">
                          <p className="text-gray-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative bg-gradient-to-r from-black via-red-950 to-black py-16 px-6 border-t border-red-500/20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can&apos;t find what you&apos;re looking for? Our team is here to
            help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
            >
              Contact Us
            </a>
            
          </div>
        </div>

      
      </section>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
