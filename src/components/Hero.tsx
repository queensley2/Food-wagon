"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("delivery");

  return (
    <div className="bg-gradient-to-l from-[#FF9F00] to-[#FFB800] pt-16 px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Are you starving?
            </h1>
            <p className="text-white text-lg mb-8">
              Within a few clicks, find meals that are accessible near you
            </p>

            {/* Search Box */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              {/* Tabs */}
              <div className="flex gap-6 mb-6 border-b border-gray-200 pb-4">
                <button
                  onClick={() => setActiveTab("delivery")}
                  className={`flex items-center gap-2 font-semibold transition-colors ${
                    activeTab === "delivery"
                      ? "text-orange-500 border-b-2 border-orange-500 pb-4"
                      : "text-gray-600"
                  }`}
                >
                  <span className="text-xl">🚚</span>
                  Delivery
                </button>
                <button
                  onClick={() => setActiveTab("pickup")}
                  className={`flex items-center gap-2 font-semibold transition-colors ${
                    activeTab === "pickup"
                      ? "text-orange-500 border-b-2 border-orange-500 pb-4"
                      : "text-gray-600"
                  }`}
                >
                  <span className="text-xl">📍</span>
                  Pickup
                </button>
              </div>

              {/* Search Input */}
              <div className="flex gap-3">
                <div className="flex-1 flex items-center bg-gray-100 rounded px-4 py-3">
                  <span className="text-xl mr-3">📍</span>
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
                  />
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded flex items-center gap-2 transition-colors">
                  <span>🔍</span>
                  Find Food
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/hero-image.png"
              alt="Hero Image"
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
