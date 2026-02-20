import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="bg-orange-500 text-white rounded px-2 py-1 font-bold text-sm">
            🍔
          </div>
          <span className="text-orange-500 font-bold text-lg">foodwagon</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-700 flex-shrink-0">
          <span className="font-semibold">Deliver to:</span>
          <span>📍</span>
          <span className="text-gray-600">Current Location:</span>
          <span className="font-semibold">Mohamadpur Bus Stand, Dhaka</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xs">
          <input
            type="text"
            placeholder="Search Food"
            className="w-full px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Login Button */}
        <button className="text-orange-500 font-semibold text-sm flex items-center gap-1 flex-shrink-0 hover:text-orange-600 transition-colors">
          👤
          <span>Login</span>
        </button>
      </div>
    </nav>
  );
}
