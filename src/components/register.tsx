/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import LeftContent from "./ragister-left";
import RightForm from "./register-right";
import Animation from "./Animation";

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background animations */}
      <Animation />

      {/* Content */}
      <div className="max-w-7xl mx-auto md:px-4 px-1 md:py-8 py-4 relative z-10 mt-14">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-3">
            <LeftContent />
          </div>

          {/* Right Form */}
          <div className="lg:col-span-2">
            <RightForm />
          </div>
        </div>
      </div>
    </div>
  );
}
