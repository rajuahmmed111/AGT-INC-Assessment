/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react";
import ContactModal from "./common/ContactModal";
import { useGetFaqsQuery } from "@/redux/api/faqApi";

export default function Faq() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: faqD = { data: [] }, isLoading, isError } = useGetFaqsQuery();
  const faqData = faqD?.data;

  const categories = [
    "All",
    ...(Array.from(
      new Set(faqData.map((item: any) => item.category))
    ) as string[]),
  ];

  const filteredFAQs = faqData.filter((item: any) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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
                  key={category as string}
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
          {isLoading ? (
            <div className="text-center text-white py-12">Loading FAQs...</div>
          ) : isError ? (
            <div className="text-center text-red-400 py-12">
              Failed to load FAQs. Please try again.
            </div>
          ) : filteredFAQs.length === 0 ? (
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
              {filteredFAQs.map((item: any) => (
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
          {/* <p className="text-xl text-gray-300 mb-8">
            Can&apos;t find what you&apos;re looking for? Our team is here to
            help.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              onClick={() => setIsModalOpen(true)}
              href="#"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
            >
              Contact Us
            </a>
          </div>
        </div>

        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    </div>
  );
}
