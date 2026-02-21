"use client";

import React from "react";

interface StepCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export default function HowItWorks() {
  const steps: StepCard[] = [
    {
      id: 1,
      icon: "📍",
      title: "Select location",
      description: "Choose the location where your food will be delivered.",
    },
    {
      id: 2,
      icon: "🏠",
      title: "Choose order",
      description: "Check over hundreds of menus to pick your favorite food.",
    },
    {
      id: 3,
      icon: "💳",
      title: "Pay advanced",
      description:
        "It's quick, safe, and simple. Select several methods of payment.",
    },
    {
      id: 4,
      icon: "🎉",
      title: "Enjoy meals",
      description: "Food is made and delivered directly to your home.",
    },
  ];

  return (
    <div className="bg-orange-50 py-16 px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-16 animate-slide-down">
          How does it work
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`text-center animate-slide-up hover-lift stagger-${index + 1}`}
            >
              {/* Icon Circle */}
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110">
                  <span className="text-5xl animate-bounce-slow">
                    {step.icon}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-gray-800 font-semibold text-lg mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
