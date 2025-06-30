import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCw, BarChart3, Tag, Settings } from "lucide-react";

export default function HexpropLanding() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to{" "}
              <span className="underline decoration-white decoration-2 underline-offset-4">
                HexPrep
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Your Complete Solution for Amazon FBA Prep and Reseller
              Profitability
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border-l-4 border-white pl-6">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                $1,000,000+
              </div>
              <p className="text-gray-300">
                Customer Revenue from Prepped and Shipped Products
              </p>
            </div>
            <div className="border-l-4 border-white pl-6">
              <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
              <p className="text-gray-300">Shipped packages</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {"Let's work together!"}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                type="email"
                placeholder="Your work email"
                className="bg-white text-gray-900 placeholder:text-gray-500 border-0 h-12"
              />
              <Button className="bg-white hover:bg-gray-100 text-black hover:text-black h-12 px-6">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quick turnaround */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quick turnaround
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fast, reliable processing to ensure your products are prepped
                and shipped without delay.
              </p>
            </div>

            {/* Bulk order handling */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Bulk order handling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Efficiently managing and preparing large volumes of inventory
                for seamless fulfillment.
              </p>
            </div>

            {/* Competitive pricing */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Tag className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Competitive pricing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Affordable rates designed to deliver value and reliability.
              </p>
            </div>

            {/* Efficient operations */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Efficient operations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Streamlined processes ensure smooth, accurate, and timely
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
