"use client";

import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const cities = [
    ["San Francisco", "Los Angeles", "New York City", "Chicago", "Columbus"],
    ["Miami", "Washington DC", "Orange County", "Inland Empire", "New Mexico"],
    ["Las Vegas", "Seattle", "Long Beach", "Charlotte", "Albuquerque"],
    ["Salt Lake", "Portland", "Denver", "Austin", "New Orleans"],
  ];

  return (
    <div>
      {/* CTA Section */}
      <div className="bg-yellow-400 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
          {/* Left - Food Images */}
          <div className="hidden md:flex flex-shrink-0 relative w-1/3 h-32 sm:h-40 md:h-48">
            <div className="absolute top-0 left-0 text-4xl sm:text-5xl md:text-6xl">🥗</div>
            <div className="absolute bottom-0 right-0 text-4xl sm:text-5xl md:text-6xl">🍟</div>
          </div>

          {/* Center - CTA Content */}
          <div className="flex-1 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
              Are you ready to order with
              <br />
              the best deals?
            </h2>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded transition-colors text-sm sm:text-base">
              PROCEED TO ORDER &gt;
            </button>
          </div>

          {/* Right - Empty space for food image */}
          <div className="hidden md:flex flex-shrink-0 w-1/3"></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Cities Section */}
          <div className="mb-8 sm:mb-12 md:mb-16 pb-8 sm:pb-10 md:pb-12 border-b border-gray-700">
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Our top cities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
              {cities.map((columnCities, colIndex) => (
                <ul key={colIndex} className="space-y-2 sm:space-y-3">
                  {columnCities.map((city, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                      >
                        {city}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10 md:mb-12">
            {/* Company */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Help & Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Partner with us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Ride with us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Legal</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Refund & Cancellations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 mb-8 sm:mb-10 md:mb-12">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">FOLLOW US</h3>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-lg sm:text-xl"
              >
                📘
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-lg sm:text-xl"
              >
                🐦
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-lg sm:text-xl"
              >
                📷
              </a>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              Receive exclusive offers in your mailbox
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 sm:px-4 py-2 bg-gray-700 text-white rounded placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-xs sm:text-sm"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-4 sm:px-6 py-2 rounded transition-colors whitespace-nowrap text-xs sm:text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-gray-400 text-xs border-t border-gray-700 pt-4 sm:pt-6 gap-4 sm:gap-0">
            <div>All rights reserved © Queensley 2026</div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}
