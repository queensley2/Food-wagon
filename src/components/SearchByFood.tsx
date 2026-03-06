"use client";

import React, { useState } from "react";
import Image from "next/image";
interface FoodCategory {
  id: number;
  name: string;
  emoji: string;
}

export default function SearchByFood() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const foodCategories: FoodCategory[] = [
    { id: 1, name: "Pizza", emoji: "/food.png" },
    { id: 2, name: "Burger", emoji: "/food 1.png" },
    { id: 3, name: "Noodles", emoji: "/food 2.png" },
    { id: 4, name: "Sub-sandwich", emoji: "/food 3.png" },
    { id: 5, name: "Chowmein", emoji: "/food 4.png" },
    { id: 6, name: "Steak", emoji: "/food 5.png" },
  ];

  const visibleItems = 6;
  const itemsToShow = foodCategories.slice(
    currentIndex,
    currentIndex + visibleItems,
  );

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, foodCategories.length - visibleItems) : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + visibleItems < foodCategories.length ? prev + 1 : 0,
    );
  };

  return (
    <div className="bg-blue-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header with Title and Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Search by Food
          </h2>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-orange-500 font-semibold hover:underline transition-all duration-300"
            >
              View all &gt;
            </a>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors hover-scale"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors hover-scale"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Food Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 md:gap-8">
          {itemsToShow.map((food, index) => (
            <div
              key={food.id}
              className={`flex flex-col items-center gap-2 sm:gap-4 cursor-pointer group animate-slide-up hover-lift stagger-${index + 1}`}
            >
              {/* Circular Image */}
              <div className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full bg-gray-300 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                <Image
                  src={food.emoji}
                  alt={food.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Food Name */}
              <h3 className="text-gray-800 font-semibold text-center text-xs sm:text-sm md:text-base group-hover:text-orange-500 transition-colors">
                {food.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
