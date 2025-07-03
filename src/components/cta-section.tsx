"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactModal from "@/components/common/ContactModal";

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black py-14 px-6 relative overflow-hidden">
      {/* Simple Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl translate-x-40 translate-y-40"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to{" "}
            <span className="text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text">
              Scale Up?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of successful sellers who trust us for their business
            growth
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-4 text-lg font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/25 group"
          >
            <span className="flex items-center gap-2">
              Get in touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>

          <Button
            variant="outline"
            className="bg-transparent border-2 border-white/20 hover:border-red-500 text-white hover:text-red-400 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
          >
            View Pricing
          </Button>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
