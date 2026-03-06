"use client";

import React, { useState } from "react";
import Image from "next/image";

interface DiscountCard {
  id: number;
  image: string;
  discount: number;
  restaurant: string;
  daysRemaining: number;
  foodName?: string;
  description?: string;
  price?: number;
  rating?: number;
}

export default function DiscountSection() {
  const [selectedCard, setSelectedCard] = useState<DiscountCard | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const discounts: DiscountCard[] = [
    {
      id: 1,
      image: "/food-Image.png",
      discount: 15,
      restaurant: "Greys Vage",
      daysRemaining: 6,
      foodName: "Delicious Pasta",
      description:
        "Fresh homemade pasta with premium ingredients and authentic Italian sauce. A perfect blend of taste and quality.",
      price: 12.99,
      rating: 4.5,
    },
    {
      id: 2,
      image: "/food-Image 1.png",
      discount: 10,
      restaurant: "Greys Vage",
      daysRemaining: 6,
      foodName: "Grilled Chicken",
      description:
        "Tender grilled chicken breast served with seasonal vegetables and herb butter. Cooked to perfection.",
      price: 14.99,
      rating: 4.7,
    },
    {
      id: 3,
      image: "/food-Image 2.png",
      discount: 25,
      restaurant: "Greys Vage",
      daysRemaining: 7,
      foodName: "Premium Burger",
      description:
        "Juicy beef patty with fresh lettuce, tomato, cheese, and special sauce on a toasted bun.",
      price: 10.99,
      rating: 4.3,
    },
    {
      id: 4,
      image: "/food-Image 3.png",
      discount: 20,
      restaurant: "Greys Vage",
      daysRemaining: 8,
      foodName: "Fish Fillet",
      description:
        "Crispy battered fish fillet served with tartar sauce and fresh lemon wedges.",
      price: 11.99,
      rating: 4.6,
    },
  ];

  const handleOrderNow = (card: DiscountCard) => {
    setShowCheckout(true);
  };

  const handleCompleteOrder = () => {
    alert(
      `Order placed for ${selectedCard?.foodName}! Quantity: ${quantity}\nDelivery to: ${deliveryAddress}`,
    );
    setShowCheckout(false);
    setSelectedCard(null);
    setQuantity(1);
    setDeliveryAddress("");
  };

  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Grid of Discount Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {discounts.map((card, index) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className={`bg-white rounded-lg overflow-hidden border border-dashed border-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 duration-200 animate-slide-up hover-lift stagger-${index + 1}`}
            >
              {/* Image Container with Discount Badge */}
              <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.restaurant}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
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

      {/* Modal Popup */}
      {selectedCard && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full shadow-2xl overflow-y-auto max-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
              {/* Image Section */}
              <div className="relative h-64 sm:h-80 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.foodName ?? "Food image"}
                  fill
                  className="object-cover"
                />
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-yellow-400 text-white font-bold rounded px-4 py-2 text-lg sm:text-xl shadow-md">
                  {selectedCard.discount}%
                </div>
              </div>

              {/* Details Section */}
              <div className="flex flex-col justify-between relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-0 right-0 bg-red-500 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors"
                >
                  ×
                </button>

                {/* Food Details */}
                <div className="mt-8 md:mt-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    {selectedCard.foodName}
                  </h2>
                  <p className="text-orange-500 font-semibold text-base sm:text-lg mb-4">
                    {selectedCard.restaurant}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yellow-400 text-lg sm:text-xl">
                      ⭐
                    </span>
                    <span className="text-gray-700 font-semibold text-sm sm:text-base">
                      {selectedCard.rating} / 5
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {selectedCard.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6 flex-wrap">
                    <span className="text-gray-500 line-through text-xs sm:text-sm">
                      ${(selectedCard.price! * 1.2).toFixed(2)}
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold text-gray-800">
                      ${selectedCard.price}
                    </span>
                    <span className="text-green-600 font-semibold text-xs sm:text-sm">
                      Save {selectedCard.discount}%
                    </span>
                  </div>

                  {/* Days Remaining */}
                  <p className="text-orange-500 font-semibold mb-6 text-sm sm:text-base">
                    ⏰ {selectedCard.daysRemaining} Days Remaining
                  </p>
                </div>

                {/* Order Now Button */}
                <button
                  onClick={() => handleOrderNow(selectedCard)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 rounded-lg transition-colors text-base sm:text-lg"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && selectedCard && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto shadow-2xl">
            <div className="bg-orange-500 text-white p-4 sm:p-6 flex items-center justify-between sticky top-0 z-10">
              <h2 className="text-xl sm:text-2xl font-bold">Checkout</h2>
              <button
                onClick={() => setShowCheckout(false)}
                className="bg-orange-600 hover:bg-orange-700 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-4 sm:p-8">
              {/* Order Summary */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">
                  Order Summary
                </h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">
                      {selectedCard.foodName}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {selectedCard.restaurant}
                    </p>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-gray-800">
                    ${selectedCard.price}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <label className="text-gray-700 font-semibold text-sm sm:text-base">
                    Quantity:
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-12 text-center border-0 outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Delivery Address
                </h3>
                <textarea
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="Enter your delivery address..."
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none"
                  rows={3}
                />
              </div>

              {/* Payment Method */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Payment Method
                </h3>
                <div className="space-y-3">
                  {[
                    { id: "card", label: "💳 Credit/Debit Card", icon: "💳" },
                    { id: "wallet", label: "👛 Digital Wallet", icon: "👛" },
                    { id: "cash", label: "💵 Cash on Delivery", icon: "💵" },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="ml-3 font-semibold text-gray-800">
                        {method.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({quantity}x):</span>
                  <span>${(selectedCard.price! * quantity).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Fee:</span>
                  <span>$2.00</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Discount ({selectedCard.discount}%):</span>
                  <span className="text-green-600">
                    -$
                    {(
                      (selectedCard.price! * quantity * selectedCard.discount) /
                      100
                    ).toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between text-xl font-bold text-gray-800">
                  <span>Total:</span>
                  <span className="text-orange-500">
                    $
                    {(
                      selectedCard.price! * quantity +
                      2 -
                      (selectedCard.price! * quantity * selectedCard.discount) /
                        100
                    ).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Complete Order Button */}
              <button
                onClick={handleCompleteOrder}
                disabled={!deliveryAddress.trim()}
                className={`w-full font-bold py-3 rounded-lg transition-colors text-lg ${
                  deliveryAddress.trim()
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Complete Order
              </button>

              {!deliveryAddress.trim() && (
                <p className="text-center text-red-500 text-sm mt-2">
                  Please enter a delivery address to continue
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
