"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Star,
  Clock,
  ArrowRight,
  Sparkles,
  Trophy,
  Users,
  Loader2,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
// import Image from "next/image";
// import logo from "@/assets/logos.png";
import { submitQuoteRequest, type QuoteFormData } from "@/lib/quote-actions";

export default function Register() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    serviceType: "",
    budget: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitQuoteRequest(formData);

      if (result.success) {
        toast({
          title: "Quote Request Submitted",
          description: "We'll get back to you within 24 hours.",
          variant: "default",
        });

        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          serviceType: "",
          budget: "",
        });
      } else {
        toast({
          title: "Submission Failed",
          description:
            result.message || "Please check your information and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Keep all existing background animations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/20 via-transparent to-red-500/20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-500/15 via-transparent to-red-600/15 animate-pulse delay-1000"></div>
        </div>

        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-600/15 to-red-500/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-red-400/10 to-red-500/10 rounded-full blur-2xl animate-float delay-500"></div>

        <div className="absolute inset-0">
          <div className="absolute top-32 left-32 w-24 h-24 border border-red-500/20 rotate-12 animate-spin-slow">
            <div className="w-full h-full border border-red-400/10 rotate-45"></div>
          </div>
          <div className="absolute bottom-40 right-40 w-32 h-32 border border-white/10 rotate-45 animate-spin-reverse">
            <div className="w-full h-full border border-red-500/15 rotate-12"></div>
          </div>

          <div className="absolute top-48 right-64 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-red-500/20 animate-bounce delay-300"></div>
          <div className="absolute bottom-64 left-48 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-white/20 animate-bounce delay-700"></div>

          <div className="absolute top-64 left-64 w-16 h-16 border-2 border-red-400/30 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-48 right-56 w-12 h-12 border-2 border-white/20 rounded-full animate-ping delay-500"></div>
        </div>

        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            <path
              d="M0,300 Q250,100 500,300 T1000,300"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,700 Q250,500 500,700 T1000,700"
              stroke="url(#gradient2)"
              strokeWidth="1"
              fill="none"
              className="animate-pulse delay-500"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0)" />
                <stop offset="50%" stopColor="rgba(239, 68, 68, 0.3)" />
                <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.2)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10 mt-14">
        {/* Enhanced Logo Section */}
        <div className="mb-12 text-center relative">
          {/* logo */}
          {/* <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 blur-2xl rounded-full animate-pulse"></div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/30">
              <Image
                className="w-[280px] h-[140px] object-contain"
                src={logo}
                width={280}
                height={140}
                alt="Rapid Flow Fulfillment Services Logo"
              />
            </div>
          </div> */}
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Enhanced Left Content - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            {/* Simplified Hero Section */}
            <div className="text-center lg:text-left space-y-8">
              <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                Rapid Flow
                <br />
                <span className="text-4xl lg:text-5xl text-red-400">
                  Fulfillment Services
                </span>
              </h1>

              <p className="text-2xl text-gray-300 leading-relaxed font-light max-w-3xl">
                Expert solutions in web development, design, and digital
                consulting services that drive real results for your business.
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-500 hover:scale-105 group">
                <div className="text-center">
                  <Trophy className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-gray-300">Projects</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-500 hover:scale-105 group">
                <div className="text-center">
                  <Users className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-300">Satisfaction</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-500 hover:scale-105 group">
                <div className="text-center">
                  <Star className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-gray-300">Years</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-500 hover:scale-105 group">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">24h</div>
                  <div className="text-sm text-gray-300">Response</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Let Rapid Flow Fulfillment handle the technical complexities so
                you can focus on your core business objectives.
              </p>
              {/* <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-12 py-6 rounded-2xl transition-all shadow-2xl hover:shadow-red-500/50 hover:scale-110 border border-red-400/50 text-lg group"
              >
                +
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button> */}
            </div>
          </div>

          {/* Enhanced Form - 2 columns */}
          <div id="quote-form" className="lg:col-span-2">
            <div className="sticky top-8">
              <Card className="bg-white/95 backdrop-blur-xl shadow-2xl border-0 overflow-hidden rounded-3xl">
                <CardHeader className="pb-6 bg-gradient-to-r from-red-500 to-red-600 text-white relative">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        Free Consultation
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-bold mb-2">
                      Get Your Free Quote
                    </CardTitle>
                    <p className="text-red-100 text-sm opacity-90">
                      Fill out the form below and we&apos;ll respond within 24
                      hours
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="firstName"
                          className="text-gray-700 font-medium text-sm"
                        >
                          First Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          required
                          disabled={isSubmitting}
                          className="h-12 border-2 border-gray-200 focus:border-red-400 focus:ring-0 bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all hover:border-gray-300 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="lastName"
                          className="text-gray-700 font-medium text-sm"
                        >
                          Last Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          required
                          disabled={isSubmitting}
                          className="h-12 border-2 border-gray-200 focus:border-red-400 focus:ring-0 bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all hover:border-gray-300 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-gray-700 font-medium text-sm"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          disabled={isSubmitting}
                          className="h-12 border-2 border-gray-200 focus:border-red-400 focus:ring-0 bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all hover:border-gray-300 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-gray-700 font-medium text-sm"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                          disabled={isSubmitting}
                          className="h-12 border-2 border-gray-200 focus:border-red-400 focus:ring-0 bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all hover:border-gray-300 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Company Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-gray-700 font-medium text-sm"
                        >
                          Company Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="company"
                          placeholder="Your Company Inc."
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          required
                          disabled={isSubmitting}
                          className="h-12 border-2 border-gray-200 focus:border-red-400 focus:ring-0 bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all hover:border-gray-300 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="website"
                          className="text-gray-700 font-medium text-sm"
                        >
                          Website{" "}
                          <span className="text-gray-400 text-xs">
                            (Optional)
                          </span>
                        </Label>
                        <Input
                          id="website"
                          placeholder="www.yourcompany.com"
                          value={formData.website}
                          onChange={(e) =>
                            handleInputChange("website", e.target.value)
                          }
                          disabled={isSubmitting}
                          className="h-12 border-2 border-gray-200 focus:border-red-400 focus:ring-0 bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all hover:border-gray-300 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Service Type */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="serviceType"
                        className="text-gray-700 font-medium text-sm"
                      >
                        What service do you need?{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) =>
                          handleInputChange("serviceType", value)
                        }
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-red-400 focus:ring-0 bg-gray-50 text-gray-900 rounded-xl transition-all hover:border-gray-300 focus:bg-white">
                          <SelectValue placeholder="Select the service you need" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-200 shadow-xl rounded-xl">
                          <SelectItem
                            value="ecommerce-platform"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            🛒 ECommerce Platform
                          </SelectItem>
                          <SelectItem
                            value="web-design"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            🎨 Web Design
                          </SelectItem>
                          <SelectItem
                            value="amazon"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            📦 Amazon Integration
                          </SelectItem>
                          <SelectItem
                            value="bigcommerce"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            🏪 BigCommerce
                          </SelectItem>
                          <SelectItem
                            value="magento"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            🔧 Magento
                          </SelectItem>
                          <SelectItem
                            value="shopify"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            🛍️ Shopify
                          </SelectItem>
                          <SelectItem
                            value="woocommerce"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            🔌 WooCommerce
                          </SelectItem>
                          <SelectItem
                            value="other"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            ⚡ Custom Solution
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Budget */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="budget"
                        className="text-gray-700 font-medium text-sm"
                      >
                        Monthly Order Volume{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-red-400 focus:ring-0 bg-gray-50 text-gray-900 rounded-xl transition-all hover:border-gray-300 focus:bg-white">
                          <SelectValue placeholder="How many orders do you process monthly?" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-200 shadow-xl rounded-xl">
                          <SelectItem
                            value="500"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            📊 500+ orders (Minimum Required)
                          </SelectItem>
                          <SelectItem
                            value="500-1000"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            📈 500 - 1,000 orders
                          </SelectItem>
                          <SelectItem
                            value="1001-5000"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            🚀 1,001 - 5,000 orders
                          </SelectItem>
                          <SelectItem
                            value="5001-10k"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            💼 5,001 - 10,000 orders
                          </SelectItem>
                          <SelectItem
                            value="10k+"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            🏢 10,000+ orders
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] border-0 text-base group relative overflow-hidden"
                        size="lg"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Sending your request...
                            </>
                          ) : (
                            <>
                              <span>Send Quote Request</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </span>
                      </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center justify-center gap-6 text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Free consultation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>24h response</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>No commitment</span>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
