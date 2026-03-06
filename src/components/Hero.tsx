"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("delivery");

  return (
    <div className="bg-gradient-to-l from-[#FF9F00] to-[#FFB800] pt-8 sm:pt-12 md:pt-16 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 animate-slide-down">
              Are you starving?
            </h1>
            <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 animate-slide-down stagger-1">
              Within a few clicks, find meals that are accessible near you
            </p>

            {/* Search Box */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg animate-scale-in stagger-2 hover-lift">
              {/* Tabs */}
              <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-6 border-b border-gray-200 pb-3 sm:pb-4 overflow-x-auto">
                <button
                  onClick={() => setActiveTab("delivery")}
                  className={`flex items-center gap-2 font-semibold transition-colors duration-300 whitespace-nowrap text-sm sm:text-base ${
                    activeTab === "delivery"
                      ? "text-orange-500 border-b-2 border-orange-500 pb-3 sm:pb-4"
                      : "text-gray-600"
                  }`}
                >
                  <span className="text-lg sm:text-xl">🚚</span>
                  Delivery
                </button>
                <button
                  onClick={() => setActiveTab("pickup")}
                  className={`flex items-center gap-2 font-semibold transition-colors duration-300 whitespace-nowrap text-sm sm:text-base ${
                    activeTab === "pickup"
                      ? "text-orange-500 border-b-2 border-orange-500 pb-3 sm:pb-4"
                      : "text-gray-600"
                  }`}
                >
                  <span className="text-lg sm:text-xl">📍</span>
                  Pickup
                </button>
              </div>

              {/* Search Input */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <div className="flex flex-1 items-center bg-gray-100 rounded px-3 sm:px-4 py-2 sm:py-3 transition-all duration-300 hover:bg-gray-200">
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3">📍</span>
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded flex items-center justify-center gap-2 transition-all duration-300 hover-scale whitespace-nowrap text-sm sm:text-base">
                  <span>🔍</span>
                  <span className="hidden sm:inline">Find Food</span>
                  <span className="sm:hidden">Find</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center animate-slide-right stagger-2 mt-6 md:mt-0">
            <Image
              src="/hero-Image.png"
              alt="Hero Image"
              width={400}
              height={350}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl h-auto transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
