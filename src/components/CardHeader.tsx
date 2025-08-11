import React from "react";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
const Header = () => {
  return (
    <>
      <CardHeader className="pb-6 bg-gradient-to-r from-red-500 to-red-600 text-white relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Free Consultation</span>
          </div>
          <CardTitle className="text-2xl font-bold mb-2">
            Get Your Free Quote
          </CardTitle>
          <p className="text-red-100 text-sm opacity-90">
            Fill out the form below and we&apos;ll respond within 24 hours
          </p>
        </div>
      </CardHeader>
    </>
  );
};

export default Header;
