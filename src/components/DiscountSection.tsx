"use client";

import React from "react";
import Image from "next/image";

interface DiscountCard {
  id: number;
  image: string;
  discount: number;
  restaurant: string;
  daysRemaining: number;
}

export default function DiscountSection() {
  const discounts: DiscountCard[] = [
    {
      id: 1,
      image: "/food-Image.png",
      discount: 15,
      restaurant: "Greys Vage",
      daysRemaining: 6,
    },
    {
      id: 2,
      image: "/food-Image 1.png",
      discount: 10,
      restaurant: "Greys Vage",
      daysRemaining: 6,
    },
    {
      id: 3,
      image: "/food-Image 2.png",
      discount: 25,
      restaurant: "Greys Vage",
      daysRemaining: 7,
    },
    {
      id: 4,
      image: "/food-Image 3.png",
      discount: 20,
      restaurant: "Greys Vage",
      daysRemaining: 8,
    },
  ];

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid of Discount Cards */}
        <div className="grid grid-cols-4 gap-6">
          {discounts.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg overflow-hidden border border-dashed border-blue-400 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image Container with Discount Badge */}
              <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.restaurant}
                  fill
                  className="object-cover"
                />

                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-yellow-400 text-white font-bold rounded px-3 py-2 text-lg shadow-md">
                  {card.discount}
                  <span className="text-sm">%</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-gray-800 font-semibold mb-3">
                  {card.restaurant}
                </h3>

                {/* Days Remaining */}
                <div className="border-t border-dashed border-orange-300 pt-3">
                  <p className="text-orange-500 font-semibold text-sm">
                    {card.daysRemaining} Days Remaining
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
