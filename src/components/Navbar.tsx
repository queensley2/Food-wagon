"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 animate-slide-down">
            <div className="bg-orange-500 text-white rounded px-2 py-1 font-bold text-sm hover-scale">
              🍔
            </div>
            <span className="text-orange-500 font-bold text-base lg:text-lg hover-scale">
              foodwagon
            </span>
          </div>

          {/* Location */}
          <div className="hidden lg:flex items-center gap-2 text-xs lg:text-sm text-gray-700 flex-shrink-0 animate-fade-in stagger-1">
            <span className="font-semibold">Deliver to:</span>
            <span>📍</span>
            <span className="text-gray-600">Current Location:</span>
            <span className="font-semibold">Mohamadpur Bus Stand, Dhaka</span>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-xs animate-fade-in stagger-2">
            <input
              type="text"
              placeholder="Search Food"
              className="w-full px-3 sm:px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
            />
          </div>

          {/* Login Button */}
          <button className="text-orange-500 font-semibold text-sm flex items-center gap-1 flex-shrink-0 hover:text-orange-600 transition-colors animate-fade-in stagger-3 hover-scale whitespace-nowrap">
            👤
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 text-white rounded px-2 py-1 font-bold text-sm hover-scale">
              🍔
            </div>
            <span className="text-orange-500 font-bold text-base hover-scale">
              foodwagon
            </span>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-orange-500 font-bold text-2xl p-2 hover-scale"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-200 pt-4">
            {/* Mobile Search */}
            <input
              type="text"
              placeholder="Search Food"
              className="w-full px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />
            {/* Mobile Location */}
            <div className="text-xs text-gray-700 space-y-1">
              <p className="font-semibold">Deliver to:</p>
              <p>📍 Mohamadpur Bus Stand, Dhaka</p>
            </div>
            {/* Mobile Login */}
            <button className="w-full text-orange-500 font-semibold text-sm flex items-center justify-center gap-2 py-2 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              👤 Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
