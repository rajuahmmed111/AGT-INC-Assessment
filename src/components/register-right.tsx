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

// --- Helpers ---
const isValidComEmail = (email: string) => {
  // Enforce .com at the end
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/i;
  return re.test(email.trim());
};

export default function RightForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<any>({
    serviceType: "",
    budget: "",
    customService: "",
    website: "",
    email: "",
  });
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

  // redux api
  const [sendQuote] = useSendQuoteMutation();

  const isValidPhoneInput = (phone: string) => {
    const phonePattern = /^[0-9+\-\s()]*$/;
    return phonePattern.test(phone.trim());
  };

  const isValidPhoneFormat = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 20;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user selects/types something
    if (errors[field]) {
      setErrors((prev: any) => ({
        ...prev,
        [field]: "",
      }));
    }

    // live validation for specific fields
    if (field === "website" && value.trim()) {
      const urlPattern =
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
      const isValidUrl = urlPattern.test(value.trim());
      if (!isValidUrl) {
        setErrors((prev: any) => ({
          ...prev,
          website: "Please enter a valid URL https://example.com",
        }));
      }
    }

    if (field === "email") {
      if (!isValidComEmail(value)) {
        setErrors((prev: any) => ({
          ...prev,
          email: "Enter valid email",
        }));
      }
    }

    if (field === "phone") {
      if (value && !isValidPhoneInput(value)) {
        setErrors((prev: any) => ({
          ...prev,
          phone: "Only numbers, +, -, (), and spaces are allowed",
        }));
      } else if (value && !isValidPhoneFormat(value)) {
        setErrors((prev: any) => ({
          ...prev,
          phone: "Enter a valid phone number",
        }));
      } else {
        // Clear error if valid
        setErrors((prev: any) => ({
          ...prev,
          phone: "",
        }));
      }
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    let hasErrors = false;

    // Validate Email (.com only)
    if (!formData.email || !isValidComEmail(formData.email)) {
      newErrors.email = "Enter valid email";
      hasErrors = true;
    }

    // validate phone
    if (!formData.phone) {
      newErrors.phone = "Enter your phone number";
      hasErrors = true;
    } else if (!isValidPhoneInput(formData.phone)) {
      newErrors.phone = "Only numbers, +, -, (), and spaces are allowed";
      hasErrors = true;
    } else if (!isValidPhoneFormat(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
      hasErrors = true;
    }

    // Validate Service Type
    if (!formData.serviceType) {
      newErrors.serviceType = "Please select what service you need";
      hasErrors = true;
    }

    // Validate Budget
    if (!formData.budget) {
      newErrors.budget = "Please select your monthly order volume";
      hasErrors = true;
    }

    // Validate Custom Service
    if (formData.serviceType === "custom" && !formData.customService.trim()) {
      newErrors.customService =
        "Please describe your custom service requirements";
      hasErrors = true;
    }

    setErrors(newErrors);
    return !hasErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // JS validation first (don’t rely only on HTML5)
    if (!validateForm()) {
      return;
    }

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
        setErrors({});
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
                    className="h-12  border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all  focus:bg-white"
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
                    className="h-12 border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all focus:bg-white"
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
                    type="email" // keep native checks
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    disabled={isSubmitting}
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$" // enforce .com
                    onInvalid={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity(
                        "Enter a valid email address"
                      )
                    }
                    onInput={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity("")
                    }
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`h-12 border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all focus:bg-white`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
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
                    placeholder="+8801994-658709"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    pattern="^\+?[0-9]{1,4}[0-9\-]{7,15}$"
                    onInvalid={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity(
                        "Please enter a valid number"
                      )
                    }
                    onInput={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity("")
                    }
                    disabled={isSubmitting}
                    className="h-12 border-gray-200  bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl  transition-all focus:bg-white"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
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
                    className="h-12 border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all focus:bg-white"
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
                    className={`h-12 ${
                      errors.website ? "border-gray-200" : "border-gray-200"
                    }  bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all  focus:bg-white`}
                  />
                  {errors.website && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.website}
                    </p>
                  )}
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
                  <SelectTrigger
                    className={`h-12 ${
                      errors.serviceType ? "border-gray-200" : "border-gray-200"
                    } bg-gray-50 text-gray-900 rounded-xl transition-all focus:bg-white`}
                  >
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

                {errors.serviceType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.serviceType}
                  </p>
                )}

                {formData.serviceType === "custom" && (
                  <Input
                    name="customService"
                    type="text"
                    placeholder="Please describe your custom service"
                    value={formData.customService}
                    onChange={(e) => {
                      handleInputChange("customService", e.target.value);
                    }}
                    className={`h-12 mt-3 border-2 ${
                      errors.customService
                        ? "border-red-500"
                        : "border-gray-200"
                    } focus:border-red-400 focus:ring-0 bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-xl transition-all hover:border-gray-300 focus:bg-white`}
                    required
                    disabled={isSubmitting}
                  />
                )}

                {errors.customService && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.customService}
                  </p>
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
                  <SelectTrigger
                    className={`h-12 ${
                      errors.budget ? "border-gray-200" : "border-gray-200"
                    } bg-gray-50 text-gray-900 rounded-xl transition-all focus:bg-white`}
                  >
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

                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
                )}
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
