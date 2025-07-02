import { Instagram, Linkedin, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";

<SiTiktok className="w-5 h-5" />;

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import bbb from "@/assets/bbb.jpeg";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-7">
            <Image
              className="rounded-md"
              src={logo}
              width={40}
              height={40}
              alt="Logo"
            />
            <span className="text-xl font-semibold text-gray-800">Matthew</span>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-red-500 font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about#our-process"
                  className="hover:text-red-500 transition-colors"
                >
                  The process
                </Link>
              </li>
              <li>
                <Link
                  href="/about#our-mission"
                  className="hover:text-red-500 transition-colors"
                >
                  Our mission
                </Link>
              </li>
              <li>
                <Link
                  href="/about#meet-our-team"
                  className="hover:text-red-500 transition-colors"
                >
                  Meet the team
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-red-500 font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="faq"
                  className="hover:text-red-500 transition-colors font-medium"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-red-500 font-semibold mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li className="hover:text-red-500 transition-colors">
                Hillsboro OR
              </li>
              <li className="hover:text-red-500 transition-colors">
                Chicago IL
              </li>
              <li>
                <a
                  href="mailto:contact@hexprep.com"
                  className="text-red-500 hover:text-red-400 transition-colors"
                >
                  hexprep@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15033131528"
                  className="text-red-500 hover:text-red-400 transition-colors"
                >
                  (503) 313-1528
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          {/* Copyright */}
          <div className="flex  gap-5 text-gray-400 text-sm mb-4 md:mb-0">
            <Image
              src={bbb}
              width={100}
              height={100}
              alt="bbb"
              className="mb-4 md:mb-0"
            />

            <div className="flex items-center justify-center">
              &copy; {new Date().getFullYear()} All rights reserved
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/rapidflowfulfillment/profilecard/?igsh=aHZ3N2UzNHM1czR5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@rapidflowfulfillment?_t=ZP-8xajkfpL7lu&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="TikTok"
            >
              <SiTiktok className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/rapid-flow-fulfillment/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1hzduTzjTU/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
