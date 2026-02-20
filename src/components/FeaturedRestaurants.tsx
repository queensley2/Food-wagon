"use client";

import React from "react";
import Image from "next/image";

interface Restaurant {
  id: number;
  image: string;
  discount: number;
  fastDelivery: boolean;
  name: string;
  logo: string;
  rating: number;
  status: string;
  statusColor: string;
}

export default function FeaturedRestaurants() {
  const restaurants: Restaurant[] = [
    {
      id: 1,
      image: "/restuarant 1.png",
      discount: 20,
      fastDelivery: true,
      name: "Foodworld",
      logo: "🍽️",
      rating: 4.5,
      status: "Opens tomorrow",
      statusColor: "bg-orange-100 text-orange-600",
    },
    {
      id: 2,
      image: "/restuarant 2.png",
      discount: 15,
      fastDelivery: true,
      name: "Pizzahub",
      logo: "🍕",
      rating: 4.3,
      status: "Opens tomorrow",
      statusColor: "bg-orange-100 text-orange-600",
    },
    {
      id: 3,
      image: "/restuarant 3.png",
      discount: 19,
      fastDelivery: true,
      name: "Donuts hut",
      logo: "🍩",
      rating: 4.6,
      status: "Open Now",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      image: "/restuarant 4.png",
      discount: 15,
      fastDelivery: true,
      name: "Donuts hut",
      logo: "🍩",
      rating: 4.4,
      status: "Open Now",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: 5,
      image: "/restuarant 5.png",
      discount: 10,
      fastDelivery: true,
      name: "Ruby Tuesday",
      logo: "🍖",
      rating: 4.2,
      status: "Open Now",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: 6,
      image: "/restuarant 6.png",
      discount: 25,
      fastDelivery: true,
      name: "Makofa Fried Chicken",
      logo: "🍗",
      rating: 4.7,
      status: "Open Now",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: 7,
      image: "/restuarant 7.png",
      discount: 10,
      fastDelivery: true,
      name: "Red Square",
      logo: "🍛",
      rating: 4.5,
      status: "Open Now",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: 8,
      image: "/restuarant 8.png",
      discount: 10,
      fastDelivery: true,
      name: "Taco Bell",
      logo: "🌮",
      rating: 4.3,
      status: "Open Now",
      statusColor: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Featured Restaurants
        </h2>

        {/* Grid of Restaurants */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image Container with Badges */}
              <div className="relative w-full h-48 bg-gray-300 overflow-hidden">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  priority={false}
                />

                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-orange-500 text-white font-bold rounded px-2 py-1 text-sm shadow-md flex items-center gap-1">
                  <span>🏷️</span>
                  {restaurant.discount}% off
                </div>

                {/* Fast Delivery Badge */}
                {restaurant.fastDelivery && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-orange-600 font-bold rounded px-2 py-1 text-xs shadow-md flex items-center gap-1">
                    <span>⚡</span>
                    Fast
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Restaurant Name and Logo */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-lg">
                    {restaurant.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-semibold text-sm">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <span>⭐</span>
                      <span>{restaurant.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <button
                  className={`w-full py-2 rounded font-semibold text-sm transition-colors ${restaurant.statusColor}`}
                >
                  {restaurant.status}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-orange-600 font-bold px-8 py-3 rounded-full transition-colors flex items-center gap-2">
            View All
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
