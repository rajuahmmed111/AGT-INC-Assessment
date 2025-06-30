import { Instagram, Linkedin, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";

<SiTiktok className="w-5 h-5" />;

import Image from "next/image";
import logo from "@/assets/logo.png";

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
            <span className="text-xl font-semibold text-gray-800">HexPrep</span>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-purple-600 font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Our mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  The process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Meet the team
                </a>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-purple-600 font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-purple-600 font-semibold mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Hillsboro OR</li>
              <li className="text-gray-600">Chicago IL</li>
              <li>
                <a
                  href="mailto:contact@hexprep.com"
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  hexprep@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15033131528"
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  (503) 313-1528
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          {/* Copyright */}
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HexPrep
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/rapidflowfulfillment/profilecard/?igsh=aHZ3N2UzNHM1czR5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@rapidflowfulfillment?_t=ZP-8xajkfpL7lu&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-600 transition-colors"
              aria-label="TikTok"
            >
              <SiTiktok className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/rapid-flow-fulfillment/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />{" "}
              {/* You may want to swap this with a LinkedIn icon */}
            </a>
            <a
              href="https://www.facebook.com/share/1hzduTzjTU/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />{" "}
              {/* You may want to swap this with a Facebook icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
