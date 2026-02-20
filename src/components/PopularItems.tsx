"use client";

import React, { useState } from "react";
import Image from "next/image";

interface MenuItem {
  id: number;
  image: string;
  name: string;
  restaurant: string;
  price: number;
}

export default function PopularItems() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items: MenuItem[] = [
    {
      id: 1,
      image: "/burger.png",
      name: "Cheese Burger",
      restaurant: "Burger King",
      price: 3.88,
    },
    {
      id: 2,
      image: "/cake.png",
      name: "Toffe's Cake",
      restaurant: "Top Bakery",
      price: 4.0,
    },
    {
      id: 3,
      image: "/pancake.png",
      name: "Dancake",
      restaurant: "Cake World",
      price: 1.99,
    },
    {
      id: 4,
      image: "/sandwish.png",
      name: "Crispy Sandwich",
      restaurant: "Sandwich Hub",
      price: 3.0,
    },
    {
      id: 5,
      image: "/soup.png",
      name: "Thai Soup",
      restaurant: "Spicy Mama",
      price: 2.79,
    },
  ];

  const visibleItems = 5;
  const itemsToShow = items.slice(currentIndex, currentIndex + visibleItems);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, items.length - visibleItems) : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + visibleItems < items.length ? prev + 1 : 0,
    );
  };

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Popular items
        </h2>

        {/* Carousel Container */}
        <div className="relative flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-6 z-10 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl transition-colors"
          >
            ❮
          </button>

          {/* Items Grid */}
          <div className="flex gap-6 overflow-hidden flex-1">
            {itemsToShow.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-40 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Image Container */}
                <div className="relative w-full h-40 bg-gray-200 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Name */}
                  <h3 className="text-gray-800 font-semibold text-sm mb-1">
                    {item.name}
                  </h3>

                  {/* Restaurant */}
                  <p className="text-orange-500 text-xs mb-3 flex items-center gap-1">
                    <span>⭐</span>
                    {item.restaurant}
                  </p>

                  {/* Price */}
                  <p className="text-gray-800 font-bold text-lg mb-3">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Order Button */}
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition-colors text-sm">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-6 z-10 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl transition-colors"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
