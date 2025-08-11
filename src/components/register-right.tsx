/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaShopify, FaTiktok, FaMagento, FaAmazon } from "react-icons/fa";
import { MdBolt } from "react-icons/md";
import { SiBigcommerce } from "react-icons/si";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  ArrowRight,
  Loader2,
  Handshake,
  ShoppingBagIcon,
} from "lucide-react";
import { TbBrandWalmart } from "react-icons/tb";
import { MdOutlinePrivateConnectivity } from "react-icons/md";
import Swal from "sweetalert2";
import { useSendQuoteMutation } from "@/redux/api/sendQuoteApi";
import { useState } from "react";
import Header from "./CardHeader";

export default function RightForm() {
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
    <div id="quote-form">
      <div className="sticky top-8">
        <Card className="bg-white/95 backdrop-blur-xl shadow-2xl border-0 overflow-hidden rounded-3xl">
          {/* Header */}
          <Header />

          <CardContent className="p-5">
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
                    onChange={(e) => handleInputChange("email", e.target.value)}
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
                    onChange={(e) => handleInputChange("phone", e.target.value)}
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
                    <span className="text-gray-400 text-xs">(Optional)</span>
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
                        <div className="font-bold text-gray-600 text-lg">w</div>
                        <div>WooCommerce</div>
                      </div>
                    </SelectItem>

                    <SelectItem
                      value="ebay"
                      className="hover:bg-red-50 focus:bg-red-50 text-gray-900 rounded-lg py-3"
                    >
                      <div className="flex items-center gap-2">
                        <div className="font-bold text-gray-600 text-lg">e</div>
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
                  Monthly Order Volume <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => handleInputChange("budget", value)}
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
  );
}
