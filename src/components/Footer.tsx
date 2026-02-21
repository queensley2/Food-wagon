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
      <div className="bg-yellow-400 py-16 px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {/* Left - Food Images */}
          <div className="flex-shrink-0 relative w-1/3 h-48">
            <div className="absolute top-0 left-0 text-6xl">🥗</div>
            <div className="absolute bottom-0 right-0 text-6xl">🍟</div>
          </div>

          {/* Center - CTA Content */}
          <div className="flex-1 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Are you ready to order with
              <br />
              the best deals?
            </h2>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded transition-colors">
              PROCEED TO ORDER &gt;
            </button>
          </div>

          {/* Right - Empty space for food image */}
          <div className="flex-shrink-0 w-1/3"></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Cities Section */}
          <div className="mb-16 pb-12 border-b border-gray-700">
            <h3 className="font-bold text-lg mb-6">Our top cities</h3>
            <div className="grid grid-cols-5 gap-8">
              {cities.map((columnCities, colIndex) => (
                <ul key={colIndex} className="space-y-3">
                  {columnCities.map((city, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
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
          <div className="grid grid-cols-3 gap-12 mb-12">
            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Help & Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Partner with us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Ride with us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Refund & Cancellations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gray-800 rounded-lg p-6 mb-12">
            <h3 className="font-bold text-lg mb-4">FOLLOW US</h3>
            <div className="flex items-center gap-4 mb-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                📘
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                🐦
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                📷
              </a>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Receive exclusive offers in your mailbox
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 bg-gray-700 text-white rounded placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-2 rounded transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex items-center justify-between text-gray-400 text-xs border-t border-gray-700 pt-6">
            <div>All rights reserved © Queensley 2026</div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}
