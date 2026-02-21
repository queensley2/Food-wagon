"use client";

import React, { useState } from "react";
import Image from "next/image";

interface MenuItem {
  id: number;
  image: string;
  name: string;
  restaurant: string;
  price: number;
  description?: string;
  rating?: number;
  discount?: number;
}

export default function PopularItems() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const items: MenuItem[] = [
    {
      id: 1,
      image: "/burger.png",
      name: "Cheese Burger",
      restaurant: "Burger King",
      price: 3.88,
      description:
        "Delicious cheese burger with fresh lettuce, tomato, and special sauce",
      rating: 4.5,
      discount: 10,
    },
    {
      id: 2,
      image: "/cake.png",
      name: "Toffe's Cake",
      restaurant: "Top Bakery",
      price: 4.0,
      description:
        "Homemade toffee cake with creamy frosting and premium toffee bits",
      rating: 4.7,
      discount: 5,
    },
    {
      id: 3,
      image: "/pancake.png",
      name: "Dancake",
      restaurant: "Cake World",
      price: 1.99,
      description: "Fluffy pancakes served with syrup and butter",
      rating: 4.3,
      discount: 15,
    },
    {
      id: 4,
      image: "/sandwish.png",
      name: "Crispy Sandwich",
      restaurant: "Sandwich Hub",
      price: 3.0,
      description:
        "Crispy toasted sandwich with fresh vegetables and premium meats",
      rating: 4.4,
      discount: 8,
    },
    {
      id: 5,
      image: "/soup.png",
      name: "Thai Soup",
      restaurant: "Spicy Mama",
      price: 2.79,
      description:
        "Authentic Thai soup with aromatic spices and fresh ingredients",
      rating: 4.6,
      discount: 12,
    },
    {
      id: 6,
      image: "/burger.png",
      name: "Cheese Burger",
      restaurant: "Burger King",
      price: 3.88,
      description:
        "Delicious cheese burger with fresh lettuce, tomato, and special sauce",
      rating: 4.5,
      discount: 10,
    },
    {
      id: 7,
      image: "/cake.png",
      name: "Toffe's Cake",
      restaurant: "Top Bakery",
      price: 4.0,
      description:
        "Homemade toffee cake with creamy frosting and premium toffee bits",
      rating: 4.7,
      discount: 5,
    },
    {
      id: 8,
      image: "/pancake.png",
      name: "Dancake",
      restaurant: "Cake World",
      price: 1.99,
      description: "Fluffy pancakes served with syrup and butter",
      rating: 4.3,
      discount: 15,
    },
    {
      id: 9,
      image: "/sandwish.png",
      name: "Crispy Sandwich",
      restaurant: "Sandwich Hub",
      price: 3.0,
      description:
        "Crispy toasted sandwich with fresh vegetables and premium meats",
      rating: 4.4,
      discount: 8,
    },
    {
      id: 10,
      image: "/soup.png",
      name: "Thai Soup",
      restaurant: "Spicy Mama",
      price: 2.79,
      description:
        "Authentic Thai soup with aromatic spices and fresh ingredients",
      rating: 4.6,
      discount: 12,
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

  const handleOrderNow = (item: MenuItem) => {
    setSelectedItem(item);
    setShowCheckout(true);
  };

  const handleCompleteOrder = () => {
    alert(
      `Order placed for ${selectedItem?.name}! Quantity: ${quantity}\nDelivery to: ${deliveryAddress}`,
    );
    setShowCheckout(false);
    setSelectedItem(null);
    setQuantity(1);
    setDeliveryAddress("");
  };

  return (
    <div className="bg-white py-16 px-20">
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
          <div className="flex justify-center gap-6 overflow-hidden flex-1">
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
                  <button
                    onClick={() => handleOrderNow(item)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition-colors text-sm"
                  >
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

      {/* Checkout Modal */}
      {showCheckout && selectedItem && (
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
                      {selectedItem.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedItem.restaurant}
                    </p>
                    {selectedItem.description && (
                      <p className="text-xs text-gray-500 mt-2">
                        {selectedItem.description}
                      </p>
                    )}
                  </div>
                  <p className="text-lg font-bold text-gray-800">
                    ${selectedItem.price.toFixed(2)}
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
                      className="px-3 py-2 text-black hover:bg-gray-100 transition-colors"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-12 text-black text-center border-0 outline-none"
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
                  <span>${(selectedItem.price * quantity).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Fee:</span>
                  <span>$2.00</span>
                </div>
                {selectedItem.discount && (
                  <div className="flex justify-between text-gray-700">
                    <span>Discount ({selectedItem.discount}%):</span>
                    <span className="text-green-600">
                      -$
                      {(
                        (selectedItem.price *
                          quantity *
                          selectedItem.discount) /
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
                      selectedItem.price * quantity +
                      2 -
                      ((selectedItem.discount || 0) *
                        selectedItem.price *
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
    </div>
  );
}
