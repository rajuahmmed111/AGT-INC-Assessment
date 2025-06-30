"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Settings, Target, Brain } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <nav className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg fixed top-0 left-0 right-0 m-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <Image
                  className="rounded-md"
                  src={logo}
                  width={50}
                  height={50}
                  alt="Logo"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8 ml-8">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-bold transition-colors"
                >
                  Home
                </a>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-bold transition-colors">
                    <span>About us</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[290px]">
                    <DropdownMenuItem className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Settings className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            The process
                          </div>
                          <div className="text-sm text-gray-500">
                            What goes on behind the scenes
                          </div>
                        </div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            Our mission
                          </div>
                          <div className="text-sm text-gray-500">
                            What we strive for
                          </div>
                        </div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Brain className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            Team our team
                          </div>
                          <div className="text-sm text-gray-500">
                            Who we are
                          </div>
                        </div>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-bold transition-colors"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900  font-bold transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-300 text-gray-700 hover:text-gray-900 font-bold px-4 py-2 rounded transition-colors"
              >
                Client portal
              </a>

              <Button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                Get in touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Home
                </a>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between text-gray-700 hover:text-gray-900 font-medium transition-colors w-full text-left">
                    <span>About us</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem>
                      <a href="#" className="w-full">
                        Our Story
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#" className="w-full">
                        Team
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#" className="w-full">
                        Mission
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  FAQ
                </a>

                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  >
                    Client portal
                  </a>

                  <Button className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
