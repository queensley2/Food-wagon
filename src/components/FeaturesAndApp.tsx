"use client";

import React from "react";

interface Feature {
  id: number;
  icon: string;
  title: string;
  description?: string;
}

export default function FeaturesAndApp() {
  const features: Feature[] = [
    {
      id: 1,
      icon: "💰",
      title: "Daily Discounts",
    },
    {
      id: 2,
      icon: "📍",
      title: "Live Tracing",
    },
    {
      id: 3,
      icon: "⏱️",
      title: "Quick Delivery",
    },
  ];

  return (
    <div className="bg-yellow-100 py-16 px-20">
      <div className="max-w-7xl mx-auto">
        {/* Features Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-16 max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-orange-500 font-bold text-lg">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* App Installation Section */}
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left: Phone Mock-up */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-gray-300 rounded-3xl p-3 w-64 shadow-2xl">
                {/* Screen */}
                <div className="bg-white rounded-2xl overflow-hidden h-96 flex flex-col">
                  {/* Status Bar */}
                  <div className="bg-gray-100 px-4 py-2 text-xs text-gray-600 flex justify-between">
                    <span>9:41</span>
                    <span>📶 📡 🔋</span>
                  </div>

                  {/* App Content */}
                  <div className="flex-1 overflow-y-auto p-4">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="font-bold text-sm">
                        What do you have a taste for?
                      </h2>
                      <div className="bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                    </div>

                    {/* Search */}
                    <div className="bg-gray-100 rounded px-3 py-2 mb-4 text-xs text-gray-500">
                      Search for a restaurant...
                    </div>

                    {/* Categories */}
                    <div className="flex gap-2 mb-4 text-xs">
                      <div className="flex-1 bg-gray-100 px-2 py-1 rounded text-center">
                        Offers
                      </div>
                      <div className="flex-1 bg-yellow-400 text-white px-2 py-1 rounded text-center">
                        Quick
                      </div>
                      <div className="flex-1 bg-gray-100 px-2 py-1 rounded text-center">
                        Budget
                      </div>
                      <div className="flex-1 bg-gray-100 px-2 py-1 rounded text-center">
                        Dessert
                      </div>
                    </div>

                    {/* Your Order Section */}
                    <div className="bg-gray-50 rounded px-3 py-2 mb-3">
                      <h3 className="font-bold text-xs mb-2">Your Order</h3>
                      <div className="bg-yellow-400 text-white rounded px-2 py-1 text-xs mb-2">
                        🕐 20 mins
                      </div>
                      <div className="text-xs text-gray-600 mb-2">
                        Chicken, Coakaa, and assaulted Salad
                      </div>
                      <div className="text-xs font-bold">The Treat Cafe</div>
                    </div>

                    {/* Featured Food */}
                    <div className="bg-gray-200 rounded h-20 mb-3 flex items-center justify-center text-2xl">
                      🍕
                    </div>
                    <div className="text-xs font-bold">Noah&apos;s Bagels</div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Left Bottom */}
              <div className="absolute -left-20 -bottom-10 bg-white rounded-lg shadow-lg p-3 w-48">
                <h4 className="font-bold text-xs mb-2">
                  What do you have a taste for?
                </h4>
                <div className="bg-gray-100 rounded px-2 py-1 text-xs text-gray-500 mb-2">
                  Search for a restaurant...
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span>🍝</span>
                    <span className="text-gray-600">Home</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span className="text-gray-600">Nearby</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: App Installation Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Install the app
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              It&apos;s never been easier to order food. Look for the finest
              discounts and you&apos;ll be lost in a world of delectable food.
            </p>

            {/* App Store Buttons */}
            <div className="flex gap-4">
              {/* Google Play Button */}
              <a
                href="#"
                className="flex items-center gap-2 bg-white rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-2xl">▶️</span>
                <div className="text-left">
                  <div className="text-xs text-gray-600">GET IT ON</div>
                  <div className="font-bold text-sm">Google Play</div>
                </div>
              </a>

              {/* App Store Button */}
              <a
                href="#"
                className="flex items-center gap-2 bg-white rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-2xl">🍎</span>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div className="font-bold text-sm">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
