"use client";

import Image from "next/image";
import logo from "@/assets/logoff.png";
import Link from "next/link";
import bbb from "@/assets/bbb.jpeg";
import { useEffect, useState } from "react";
import { useGetContactQuery } from "@/redux/api/contactApi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

// Define proper TypeScript interfaces
interface SocialMediaItem {
  name: string;
  link: string;
}

interface ContactData {
  location: string;
  email: string;
  phone: string;
  socialmedia: SocialMediaItem[];
}

interface ApiResponse {
  data?: ContactData[];
}

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const { data, isLoading, error } = useGetContactQuery() as {
    data: ApiResponse | undefined;
    isLoading: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any;
  };

  useEffect(() => {
    const checkDeviceType = () => {
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(navigator.userAgent));
    };
    checkDeviceType();
  }, []);

  const handlePhoneClick = async (e: React.MouseEvent) => {
    if (!isMobile) {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText("281-883-6053");
        alert("Phone number copied!");
      } catch (err) {
        console.error("Failed to copy phone number:", err);
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = "281-883-6053";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Phone number copied!");
      }
    }
  };

  // Function to get the appropriate icon for social media platform
  const getSocialIcon = (name: string): JSX.Element => {
    const platformName = name.toLowerCase();
    switch (platformName) {
      case "instragram":
        return <FaInstagram className="w-5 h-5" />;
      // case "whatsApp":
      //   return <FaWhatsapp className="w-5 h-5" />;
      case "linkedin":
        return <FaLinkedin className="w-5 h-5" />;
      case "facebook":
        return <FaFacebook className="w-5 h-5" />;
      default:
        return <FaWhatsapp className="w-5 h-5" />;
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-red-500 font-semibold">
            Error loading footer data
          </div>
        </div>
      </div>
    );
  }

  // Safely extract contact data with proper type checking
  const contactData: ContactData | undefined = data?.data?.[0];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative">
              <Image
                className="rounded-lg shadow-md"
                src={logo}
                width={45}
                height={45}
                alt="Rapid Flow Fulfillment Logo"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-gray-800 tracking-tight">
              Rapid Flow Fulfillment
            </span>
          </div>
          <span className="text-sm italic text-gray-600 ml-14">
            Effortless Fulfillment. Every Time.
          </span>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="about">
              <h3 className="text-red-500 font-bold text-lg mb-4 border-b-2 border-red-100 pb-2">
                About
              </h3>
            </Link>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about#our-process"
                    className="text-gray-700 hover:text-red-500 transition-all duration-300 font-medium flex items-center group"
                  >
                    {/* <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></span> */}
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#our-vision"
                    className="text-gray-700 hover:text-red-500 transition-all duration-300 font-medium flex items-center group"
                  >
                    {/* <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></span> */}
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#our-mission"
                    className="text-gray-700 hover:text-red-500 transition-all duration-300 font-medium flex items-center group"
                  >
                    {/* <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></span> */}
                    Our Mission
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Information Section */}
          <div className="space-y-4">
            <h3 className="text-red-500 font-bold text-lg mb-4 border-b-2 border-red-100 pb-2">
              Information
            </h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-700 hover:text-red-500 transition-all duration-300 font-medium flex items-center group"
                  >
                    {/* <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></span> */}
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonial"
                    className="text-gray-700 hover:text-red-500 transition-all duration-300 font-medium flex items-center group"
                  >
                    {/* <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></span> */}
                    Testimonials
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-red-500 font-bold text-lg mb-4 border-b-2 border-red-100 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactData?.location && (
                <li className="text-gray-700 flex items-start">
                  {/* <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span> */}
                  <span className="leading-relaxed">
                    {contactData.location}
                  </span>
                </li>
              )}
              {contactData?.email && (
                <li>
                  <a
                    href={`mailto:${contactData.email}?subject=Support&body=Hello`}
                    className="text-red-500 hover:text-red-600 transition-colors flex items-center group"
                  >
                    {/* <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:bg-red-600 transition-colors"></span> */}
                    {contactData.email}
                  </a>
                </li>
              )}
              {contactData?.phone && (
                <li>
                  <a
                    href={`tel:${contactData.phone.replace(/\D/g, "")}`}
                    onClick={handlePhoneClick}
                    className="text-red-500 hover:text-red-600 transition-colors flex items-center group"
                  >
                    {/* <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:bg-red-600 transition-colors"></span> */}
                    {contactData.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-gray-500 text-sm mb-6 md:mb-0">
            <Image
              src={bbb}
              width={80}
              height={80}
              alt="BBB Accredited Business"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="text-center md:text-left">
              Copyright &copy; {new Date().getFullYear()} Rapid Flow Fulfillment
              <br />
              {/* <span className="text-xs text-gray-400">All rights reserved</span> */}
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-end">
            {contactData?.socialmedia &&
              contactData?.socialmedia?.length > 0 && (
                <div className="flex justify-center items-center gap-4 mb-3">
                  {contactData?.socialmedia?.map(
                    (item: SocialMediaItem, index: number) => (
                      <a
                        key={`${item.name}-${index}`}
                        href={item?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                        aria-label={`Follow us on ${item.name}`}
                      >
                        <div className="text-gray-600 group-hover:text-red-500 transition-colors duration-300">
                          {getSocialIcon(item.name)}
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          {item.name}
                        </div>
                      </a>
                    )
                  )}
                </div>
              )}
            <span className="text-sm italic text-gray-600 font-medium">
              Follow us for updates
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
