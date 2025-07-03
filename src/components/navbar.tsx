"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Menu,
  X,
  Settings,
  Target,
  Brain,
  Sparkles,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import ContactModal from "./common/ContactModal";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDesktopMouseEnter = () => setIsDesktopDropdownOpen(true);
  const handleDesktopMouseLeave = () => setIsDesktopDropdownOpen(false);

  return (
    <>
      {/* Navbar with Koro Background */}
      <nav className="bg-white fixed top-0 left-0 right-0 z-50 px-6 py-2 transition-all duration-300 overflow-hidden bg-opacity-30">
        {/* Koro Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated geometric shapes */}
          <div className="absolute top-2 left-10 w-8 h-8 border border-red-500/30 rotate-45 animate-pulse opacity-40"></div>
          <div className="absolute top-4 right-20 w-6 h-6 bg-red-500/20 animate-bounce opacity-30"></div>
          <div className="absolute bottom-2 left-32 w-10 h-10 border border-black/20 rotate-12 animate-spin-slow opacity-25"></div>
          <div className="absolute bottom-4 right-40 w-4 h-4 bg-black/10 animate-pulse opacity-20"></div>

          {/* Floating particles */}
          <div className="absolute top-6 left-1/4 w-1 h-1 bg-red-500 rounded-full animate-ping opacity-40"></div>
          <div className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-black/30 rounded-full animate-ping opacity-30 delay-700"></div>
          <div className="absolute bottom-6 left-2/3 w-1 h-1 bg-red-500 rounded-full animate-ping opacity-35 delay-1000"></div>

          {/* Geometric lines */}
          <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent opacity-30 animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-black/20 to-transparent opacity-20 animate-pulse delay-500"></div>
        </div>

        {/* Backdrop blur effect */}
        <div className="absolute inset-0 backdrop-blur-sm"></div>

        {/* Navigation Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Image
                    className="rounded-sm shadow-lg group-hover:scale-110 transition-transform duration-300"
                    src={logo}
                    width={50}
                    height={50}
                    alt="Logo"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 justify-center flex-1">
              <Link
                href="/"
                className="text-gray-900 hover:text-red-600 font-bold transition-all duration-300 relative group px-3 py-2"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              {/* Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleDesktopMouseEnter}
                onMouseLeave={handleDesktopMouseLeave}
              >
                <DropdownMenu
                  open={isDesktopDropdownOpen}
                  onOpenChange={setIsDesktopDropdownOpen}
                >
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center border-none space-x-1 text-gray-900 hover:text-red-600 font-bold transition-all duration-300 relative group px-3 py-2 rounded-lg">
                      <Link href="/about">
                        <span className="relative z-10">About</span>
                      </Link>
                      <ChevronDown
                        className={`w-4 h-4 transition-all duration-300 relative z-10 ${
                          isDesktopDropdownOpen
                            ? "rotate-180 text-red-400"
                            : "rotate-0"
                        }`}
                      />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="start"
                    className="w-[320px] bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300"
                  >
                    {[
                      {
                        href: "/about#our-process",
                        icon: <Settings className="w-5 h-5 text-white" />,
                        title: "The process",
                        desc: "What goes on behind the scenes",
                      },
                      {
                        href: "/about#our-mission",
                        icon: <Target className="w-5 h-5 text-white" />,
                        title: "Our mission",
                        desc: "What we strive for",
                      },
                      {
                        href: "/about#meet-our-team",
                        icon: <Brain className="w-5 h-5 text-white" />,
                        title: "Meet our team",
                        desc: "Who we are",
                      },
                    ].map((item, idx) => (
                      <DropdownMenuItem asChild key={idx}>
                        <a
                          href={item.href}
                          className="p-4 rounded-lg hover:bg-red-500/20 transition-all duration-300 flex items-start space-x-3 group"
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                              {item.desc}
                            </div>
                          </div>
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* <Link
                href="/"
                className="text-gray-900 hover:text-red-600 font-bold transition-all duration-300 relative group px-3 py-2"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link> */}

              <Link
                href="/faq"
                className="text-gray-900 hover:text-red-600 font-bold transition-all duration-300 relative group px-3 py-2"
              >
                <span className="relative z-10">FAQ</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Right: Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/portal"
                className="bg-gray-100/80 hover:bg-gray-200/80 text-gray-900 hover:text-red-600 font-bold px-6 py-2 rounded-lg transition-all duration-300 border border-gray-300/50 hover:border-red-400/50 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm"
              >
                Client portal
              </Link>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105 border border-red-400/50 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Get in touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-3 rounded-xl hover:bg-white/20 transition-all duration-300 border border-gray-300/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-6 pt-6 border-t border-gray-300/50 animate-in fade-in-0 slide-in-from-top-2 duration-300">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-900 hover:text-red-600 font-medium transition-all duration-300 p-3 rounded-lg hover:bg-white/20"
                >
                  Home
                </Link>

                <DropdownMenu
                  open={isMobileDropdownOpen}
                  onOpenChange={setIsMobileDropdownOpen}
                >
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center border-none justify-between text-gray-900 hover:text-red-600 font-medium transition-all duration-300 w-full text-left p-3 rounded-lg hover:bg-white/20">
                      <Link href="about">About</Link>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isMobileDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="start"
                    className="w-64 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300"
                  >
                    {[
                      { href: "#our-process", label: "The process" },
                      { href: "#our-mission", label: "Our mission" },
                      { href: "#meet-our-team", label: "Meet our team" },
                    ].map((item, idx) => (
                      <DropdownMenuItem asChild key={idx}>
                        <a
                          href={item.href}
                          className="w-full transition-all duration-300 block px-4 py-3 text-gray-900 hover:text-red-600 hover:bg-red-500/20 rounded-lg"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* <Link
                  href="/"
                  className="text-gray-900 hover:text-red-600 font-medium transition-all duration-300 p-3 rounded-lg hover:bg-white/20"
                >
                  Contact
                </Link> */}

                <Link
                  href="/faq"
                  className="text-gray-900 hover:text-red-600 font-medium transition-all duration-300 p-3 rounded-lg hover:bg-white/20"
                >
                  FAQ
                </Link>

                <div className="pt-4 border-t border-gray-300/50 space-y-3">
                  <Link
                    href="/portal"
                    className="block text-gray-900 hover:text-red-600 font-medium transition-all duration-300 p-3 rounded-lg hover:bg-white/20"
                  >
                    Client portal
                  </Link>

                  <Button
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/25 border border-red-400/50 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Get in touch
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact Modal */}
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-[60px]"></div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
}
