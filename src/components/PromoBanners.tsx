"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PromoCard {
  id: number;
  title: string;
  highlightedWord: string;
  description: string;
  buttonText: string;
  image: string;
  layout: "left" | "right" | "left-full";
  price?: number;
  rating?: number;
  discount?: number;
}

export default function PromoBanners() {
  const [selectedPromo, setSelectedPromo] = useState<PromoCard | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
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
      price: 8.99,
      rating: 4.7,
      discount: 15,
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
      price: 12.99,
      rating: 4.8,
      discount: 20,
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
      price: 14.99,
      rating: 4.6,
      discount: 25,
    },
  ];

  const handleOrderNow = (promo: PromoCard) => {
    setSelectedPromo(promo);
    setShowCheckout(true);
  };

  const handleCompleteOrder = () => {
    alert(
      `Order placed for ${selectedPromo?.highlightedWord}! Quantity: ${quantity}\nDelivery to: ${deliveryAddress}`,
    );
    setShowCheckout(false);
    setSelectedPromo(null);
    setQuantity(1);
    setDeliveryAddress("");
  };

  return (
    <>
      <div className="bg-white py-12 px-20">
        <div className="max-w-6xl mx-auto">
          {/* Container with blue border */}
          <div className=" rounded-lg p-8 space-y-6">
            {/* Top Promo - Best Deals */}
            <div className="grid grid-cols-2 gap-8 items-center bg-white animate-slide-up">
              <div className="pr-8 border-r-4 border-dotted border-blue-300 animate-slide-left stagger-1">
                <h2 className="text-2xl font-bold mb-2">
                  <span className="text-gray-800">Best deals</span>
                  <span className="text-orange-500 ml-2">
                    crispy sandwiches
                  </span>
                </h2>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Enjoy the finest gourmet experience with our exclusive
                  sandwiches. Crafted with the freshest ingredients and
                  signature sauces.
                </p>
                <button
                  onClick={() => handleOrderNow(promos[0])}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-2 rounded transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="flex justify-center text-8xl rounded-lg p-8 animate-slide-right stagger-2 hover-lift">
                <Image
                  src="/sandwish2.png"
                  alt="Sandwich"
                  width={961}
                  height={512}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Middle Promo - Fried Chicken */}
            <div className="grid grid-cols-2 gap-8 items-center bg-white animate-slide-up stagger-2">
              <div className="flex justify-center text-8xl  rounded-lg p-8 animate-slide-left stagger-3 hover-lift">
                <Image
                  src="/chicken.png"
                  alt="Chicken"
                  width={961}
                  height={512}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="pl-8 border-l-4 border-dotted border-blue-300">
                <h2 className="text-2xl font-bold mb-2">
                  <span className="text-gray-800">Celebrate parties with</span>
                  <span className="text-orange-500 ml-2">fried chicken</span>
                </h2>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Indulge in our deliciously crispy fried chicken, perfect for
                  any celebration. Order in bulk and get special discounts!
                </p>
                <button
                  onClick={() => handleOrderNow(promos[1])}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-2 rounded transition-colors hover-scale"
                >
                  Order Now
                </button>
              </div>
            </div>

            {/* Bottom Promo - Pizza */}
            <div className="grid grid-cols-2 gap-8 items-center bg-white animate-slide-up stagger-4">
              <div className="pr-8 border-r-4 border-dotted border-blue-300 animate-slide-left stagger-5">
                <h2 className="text-2xl font-bold mb-2">
                  <span className="text-gray-800">Wanna eat hot & spicy</span>
                  <span className="text-orange-500 ml-2">pizza</span>
                </h2>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Our mouth-watering spicy pizza will leave you craving for
                  more. Made with fresh ingredients and special spices.
                </p>
                <button
                  onClick={() => handleOrderNow(promos[2])}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-2 rounded transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="flex justify-center text-8xl  rounded-lg p-8">
                <Image src="/food.png" alt="Pizza" width={961} height={412} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {/* Checkout Modal */}
      {showCheckout && selectedPromo && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto shadow-2xl">
            <div className="bg-orange-500 text-white p-6 flex items-center justify-between sticky top-0 z-10">
              <h2 className="text-2xl font-bold">Checkout</h2>
              <button
                onClick={() => setShowCheckout(false)}
                className="bg-orange-600 hover:bg-orange-700 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              {/* Order Summary */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Order Summary
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">
                      {selectedPromo.highlightedWord}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedPromo.title}
                    </p>
                    {selectedPromo.description && (
                      <p className="text-xs text-gray-500 mt-2">
                        {selectedPromo.description}
                      </p>
                    )}
                  </div>
                  <p className="text-lg font-bold text-gray-800">
                    ${selectedPromo.price?.toFixed(2)}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4">
                  <label className="text-gray-700 font-semibold">
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
                    {
                      id: "card",
                      label: "💳 Credit/Debit Card",
                      icon: "💳",
                    },
                    {
                      id: "wallet",
                      label: "👛 Digital Wallet",
                      icon: "👛",
                    },
                    {
                      id: "cash",
                      label: "💵 Cash on Delivery",
                      icon: "💵",
                    },
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
                  <span>${(selectedPromo.price! * quantity).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Fee:</span>
                  <span>$2.00</span>
                </div>
                {selectedPromo.discount && (
                  <div className="flex justify-between text-gray-700">
                    <span>Discount ({selectedPromo.discount}%):</span>
                    <span className="text-green-600">
                      -$
                      {(
                        (selectedPromo.price! *
                          quantity *
                          selectedPromo.discount) /
                        100
                      ).toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-2 flex justify-between text-xl font-bold text-gray-800">
                  <span>Total:</span>
                  <span className="text-orange-500">
                    $
                    {(
                      selectedPromo.price! * quantity +
                      2 -
                      ((selectedPromo.discount || 0) *
                        selectedPromo.price! *
                        quantity) /
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
    </>
  );
}
