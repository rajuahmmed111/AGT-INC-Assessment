/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FiBox } from "react-icons/fi";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaShopify, FaTiktok, FaMagento } from "react-icons/fa";
import { MdBolt } from "react-icons/md";

import { SiBigcommerce } from "react-icons/si";
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
  Clock,
  ArrowRight,
  Sparkles,
  Users,
  Loader2,
  Handshake,
  LucideCalendarCheck,
  ShoppingBagIcon,
} from "lucide-react";
import { FaAmazon } from "react-icons/fa";
import { TbBrandWalmart } from "react-icons/tb";
// import { submitQuoteRequest, type QuoteFormData } from "@/lib/quote-actions";
import { MdOutlinePrivateConnectivity } from "react-icons/md";
import { useGetQuoteLeftQuery } from "@/redux/api/quoteleftApi";
import Swal from "sweetalert2";
import { useSendQuoteMutation } from "@/redux/api/sendQuoteApi";

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    serviceType: "",
    customService: "",
    budget: "",
  });

  const { isLoading, data, isSuccess } = useGetQuoteLeftQuery({});

  // send quote api
  const [sendQuote] = useSendQuoteMutation();


  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendQuote(formData).unwrap();
      if (result) {
        await Swal.fire({
          title: "Thank you for reaching out!",
          text: "We will get back to you soon. – The Rapid Flow Fulfillment Team",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#dc2626",
          background: "#ffffff",
          color: "#374151",
          customClass: {
            popup: "rounded-2xl shadow-2xl",
            title: "text-xl font-bold",
            confirmButton: "rounded-lg px-6 py-2 font-semibold",
          },
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          serviceType: "",
          customService: "",
          budget: "",
        });
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      await Swal.fire({
        title: "Something went wrong",
        text: "Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#dc2626",
        background: "#ffffff",
        color: "#374151",
        customClass: {
          popup: "rounded-2xl shadow-2xl",
          title: "text-xl font-bold",
          confirmButton: "rounded-lg px-6 py-2 font-semibold",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background animations */}
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
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto md:px-4 px-1 md:py-8 py-4 relative z-10 mt-14">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-8">
            {isLoading ? (
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <Loader2 className="w-12 h-12 text-red-400 animate-spin mx-auto mb-4" />
                  <p className="text-white text-lg">Loading page...</p>
                </div>
              </div>
            ) : (
              isSuccess &&
              data?.data?.map((item: any, index: number) => (
                <div key={item.id || index} className="space-y-8">
                  {/* Hero Section */}
                  <div className="text-center lg:text-left space-y-8">
                    <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                      <span className=" decoration-red-400 decoration-4">
                        {item?.title.split(" ")[0]} {item?.title.split(" ")[1]}
                      </span>
                      <br />
                      <span className="text-4xl lg:text-5xl text-red-400 decoration-red-400 decoration-4">
                        {item?.title.split(" ")[2]}
                      </span>
                    </h1>

                    <p className="md:text-2xl text-xl text-gray-300 leading-relaxed font-light max-w-3xl px-5">
                      {item?.description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-500 hover:scale-105 group">
                      <div className="text-center">
                        <FiBox className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-white mb-1">
                          {item?.units_shipped}
                        </div>
                        <div className="text-sm text-gray-300">
                          {item?.units_shipped_title}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-500 hover:scale-105 group">
                      <div className="text-center">
                        <TbTruckDelivery className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-white mb-1">
                          {item?.years}
                        </div>
                        <div className="text-sm text-gray-300">
                          {item?.years_title}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-500 hover:scale-105 group">
                      <div className="text-center">
                        <Users className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-white mb-1">
                          {item?.client_satisfied}
                        </div>
                        <div className="text-sm text-gray-300">
                          {item?.client_satisfied_title}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-500 hover:scale-105 group">
                      <div className="text-center">
                        <LucideCalendarCheck className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-white mb-1">
                          {item?.week_day}
                        </div>
                        <div className="text-sm text-gray-300">
                          {item?.week_day_title}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
                    <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                      {item?.para}
                    </p>
                    <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span> {item?.support}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{item?.solutions}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{item?.team}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Form */}
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
                            value="amazon"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            <div className="flex items-center gap-2">
                              <FaAmazon />
                              <div>Amazon</div>
                            </div>
                          </SelectItem>

                          <SelectItem
                            value="bigcommerce"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            <div className="flex items-center gap-2">
                              <SiBigcommerce />
                              <div>BigCommerce</div>
                            </div>
                          </SelectItem>

                          <SelectItem
                            value="magento"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            <div className="flex items-center gap-2">
                              <FaMagento />
                              <div>Magento</div>
                            </div>
                          </SelectItem>

                          <SelectItem
                            value="shopify"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            <div className="flex items-center gap-2">
                              <FaShopify />
                              <div>Shopify</div>
                            </div>
                          </SelectItem>

                          <SelectItem
                            value="tiktok"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            <div className="flex items-center gap-2">
                              <FaTiktok />
                              <div>TikTok</div>
                            </div>
                          </SelectItem>

                          <SelectItem
                            value="walmart"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            <div className="flex items-center gap-2">
                              <TbBrandWalmart />
                              <div>Walmart</div>
                            </div>
                          </SelectItem>

                          <SelectItem
                            value="private-label"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            <div className="flex items-center gap-2">
                              <MdOutlinePrivateConnectivity />
                              <div>Private Label</div>
                            </div>
                          </SelectItem>

                          <SelectItem
                            value="retail"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            <div className="flex items-center gap-2">
                              <ShoppingBagIcon className="w-4 h-4" />
                              <div>Retail</div>
                            </div>
                          </SelectItem>

                          <SelectItem
                            value="woocommerce"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            <div className="flex items-center gap-2">
                              <div className="font-bold text-gray-600 text-lg">
                                w
                              </div>
                              <div>WooCommerce</div>
                            </div>
                          </SelectItem>

                          <SelectItem
                            value="ebay"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            <div className="flex items-center gap-2">
                              <div className="font-bold text-gray-600 text-lg">
                                e
                              </div>
                              <div>eBay</div>
                            </div>
                          </SelectItem>

                          <SelectItem
                            value="custom"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            <div className="flex items-center gap-2">
                              <MdBolt className="w-4 h-4" />
                              <div>Custom Solution (Others)</div>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      {/* Custom Input */}
                      {formData.serviceType === "custom" && (
                        <Input
                          type="text"
                          placeholder="Please describe your custom service"
                          value={formData.customService}
                          onChange={(e) =>
                            handleInputChange("customService", e.target.value)
                          }
                          className="h-12 mt-3 border-2 border-gray-200 focus:border-red-400 focus:ring-0 bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all hover:border-gray-300 focus:bg-white"
                          required
                          disabled={isSubmitting}
                        />
                      )}
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
                            1- 500 orders
                          </SelectItem>
                          <SelectItem
                            value="500-1000"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            500 - 1,000 orders
                          </SelectItem>
                          <SelectItem
                            value="1001-5000"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            1,001 - 5,000 orders
                          </SelectItem>
                          <SelectItem
                            value="5001-10k"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            5,001 - 10,000 orders
                          </SelectItem>
                          <SelectItem
                            value="10k+"
                            className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                          >
                            10,000+ orders
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
                        <Handshake className="w-4 h-4 text-yellow-500" />
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
