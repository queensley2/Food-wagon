"use client";

import React from "react";
import Image from "next/image";

interface PromoCard {
  id: number;
  title: string;
  highlightedWord: string;
  description: string;
  buttonText: string;
  image: string;
  layout: "left" | "right" | "left-full";
}

export default function PromoBanners() {
  const promos: PromoCard[] = [
    {
      id: 1,
      title: "Best deals ",
      highlightedWord: "crispy sandwiches",
      description:
        "Enjoy the finest gourmet experience with our exclusive sandwiches. Crafted with the freshest ingredients.",
      buttonText: "Order Now",
      image: "/sandwish2.png",
      layout: "left",
    },
    {
      id: 2,
      title: "Celebrate parties with ",
      highlightedWord: "fried chicken",
      description:
        "Indulge in our deliciously crispy fried chicken, perfect for any celebration. Order in bulk and get special discounts!",
      buttonText: "Order Now",
      image: "/chicken.png",
      layout: "right",
    },
    {
      id: 3,
      title: "Wanna eat hot & spicy ",
      highlightedWord: "pizza",
      description:
        "Our mouth-watering spicy pizza will leave you craving for more. Made with fresh ingredients and special spices.",
      buttonText: "Order Now",
      image: "/food.png",
      layout: "left-full",
    },
  ];

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Container with blue border */}
        <div className="border-4 border-blue-500 rounded-lg p-8 space-y-6">
          {/* Top Promo - Best Deals */}
          <div className="grid grid-cols-2 gap-8 items-center bg-white">
            <div className="pr-8 border-r-4 border-dotted border-blue-300">
              <h2 className="text-2xl font-bold mb-2">
                <span className="text-gray-800">Best deals</span>
                <span className="text-orange-500 ml-2">crispy sandwiches</span>
              </h2>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Enjoy the finest gourmet experience with our exclusive
                sandwiches. Crafted with the freshest ingredients and signature
                sauces.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-2 rounded transition-colors">
                Order Now
              </button>
            </div>
            <div className="flex justify-center text-8xl bg-gradient-to-br from-green-100 to-yellow-100 rounded-lg p-8 h-48">
              <Image
                src="/sandwish2.png"
                alt="Sandwich"
                width={128}
                height={128}
              />
            </div>
          </div>

          {/* Middle Promo - Fried Chicken */}
          <div className="grid grid-cols-2 gap-8 items-center bg-white">
            <div className="flex justify-center text-8xl bg-gradient-to-br from-yellow-100 to-red-100 rounded-lg p-8 h-48">
              <Image
                src="/chicken.png"
                alt="Chicken"
                width={128}
                height={128}
              />
            </div>
            <div className="pl-8 border-l-4 border-dotted border-blue-300">
              <h2 className="text-2xl font-bold mb-2">
                <span className="text-gray-800">Celebrate parties with</span>
                <span className="text-orange-500 ml-2">fried chicken</span>
              </h2>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Indulge in our deliciously crispy fried chicken, perfect for any
                celebration. Order in bulk and get special discounts!
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-2 rounded transition-colors">
                Order Now
              </button>
            </div>
          </div>

          {/* Bottom Promo - Pizza */}
          <div className="grid grid-cols-2 gap-8 items-center bg-white">
            <div className="pr-8 border-r-4 border-dotted border-blue-300">
              <h2 className="text-2xl font-bold mb-2">
                <span className="text-gray-800">Wanna eat hot & spicy</span>
                <span className="text-orange-500 ml-2">pizza</span>
              </h2>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Our mouth-watering spicy pizza will leave you craving for more.
                Made with fresh ingredients and special spices.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-2 rounded transition-colors">
                Order Now
              </button>
            </div>
            <div className="flex justify-center text-8xl bg-gradient-to-br from-red-100 to-orange-100 rounded-lg p-8 h-48">
              <Image
                src="/food.png"
                alt="Pizza"
                width={128}
                height={128}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
