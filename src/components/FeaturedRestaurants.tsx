"use client";

import React, { useState } from "react";
import Image from "next/image";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: string;
  rating: number;
}

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
  menus?: MenuItem[];
  deliveryTime?: string;
  cuisineType?: string;
}

export default function FeaturedRestaurants() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [showRestaurantModal, setShowRestaurantModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

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
      cuisineType: "Multi-Cuisine",
      deliveryTime: "30-45 mins",
      menus: [
        { id: 1, name: "Grilled Chicken Pasta", description: "Tender grilled chicken with fresh pasta and herbs", price: 12.99, icon: "🍝", rating: 4.6 },
        { id: 2, name: "Beef Steak", description: "Premium beef steak with seasonal vegetables", price: 18.99, icon: "🥩", rating: 4.8 },
        { id: 3, name: "Vegetable Risotto", description: "Creamy risotto with fresh vegetables", price: 10.99, icon: "🍚", rating: 4.4 },
      ],
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
      cuisineType: "Italian",
      deliveryTime: "25-40 mins",
      menus: [
        { id: 1, name: "Margherita Pizza", description: "Fresh mozzarella, tomato, and basil", price: 11.99, icon: "🍕", rating: 4.7 },
        { id: 2, name: "Pepperoni Pizza", description: "Classic pepperoni with cheese", price: 13.99, icon: "🍕", rating: 4.8 },
        { id: 3, name: "Garlic Bread", description: "Crispy garlic bread with herbs", price: 5.99, icon: "🥖", rating: 4.5 },
      ],
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
      cuisineType: "Bakery",
      deliveryTime: "15-30 mins",
      menus: [
        { id: 1, name: "Glazed Donut", description: "Classic glazed donut", price: 2.99, icon: "🍩", rating: 4.6 },
        { id: 2, name: "Chocolate Donut", description: "Rich chocolate donut with sprinkles", price: 3.49, icon: "🍩", rating: 4.7 },
        { id: 3, name: "Donut Box (6pc)", description: "Mix of 6 delicious donuts", price: 15.99, icon: "📦", rating: 4.8 },
      ],
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
      cuisineType: "Bakery",
      deliveryTime: "15-30 mins",
      menus: [
        { id: 1, name: "Glazed Donut", description: "Classic glazed donut", price: 2.99, icon: "🍩", rating: 4.6 },
        { id: 2, name: "Chocolate Donut", description: "Rich chocolate donut", price: 3.49, icon: "🍩", rating: 4.7 },
        { id: 3, name: "Coffee", description: "Fresh brewed coffee", price: 2.49, icon: "☕", rating: 4.5 },
      ],
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
      cuisineType: "American",
      deliveryTime: "35-50 mins",
      menus: [
        { id: 1, name: "BBQ Ribs", description: "Slow-cooked BBQ ribs", price: 16.99, icon: "🍖", rating: 4.7 },
        { id: 2, name: "Grilled Salmon", description: "Fresh grilled salmon with lemon", price: 17.99, icon: "🐟", rating: 4.8 },
        { id: 3, name: "Hamburger", description: "Classic hamburger with fries", price: 9.99, icon: "🍔", rating: 4.5 },
      ],
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
      cuisineType: "Fried Chicken",
      deliveryTime: "20-35 mins",
      menus: [
        { id: 1, name: "Fried Chicken Combo", description: "2 pieces chicken with fries", price: 9.99, icon: "🍗", rating: 4.8 },
        { id: 2, name: "Spicy Wings", description: "Hot and spicy chicken wings", price: 7.99, icon: "🔥", rating: 4.6 },
        { id: 3, name: "Chicken Burger", description: "Crispy chicken burger with sauce", price: 8.99, icon: "🍔", rating: 4.7 },
      ],
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
      cuisineType: "Indian",
      deliveryTime: "30-45 mins",
      menus: [
        { id: 1, name: "Butter Chicken", description: "Creamy tomato-based chicken curry", price: 13.99, icon: "🍛", rating: 4.7 },
        { id: 2, name: "Biryani", description: "Fragrant rice dish with spices", price: 11.99, icon: "🍚", rating: 4.8 },
        { id: 3, name: "Naan Bread", description: "Soft Indian bread", price: 3.99, icon: "🥖", rating: 4.5 },
      ],
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
      cuisineType: "Mexican",
      deliveryTime: "25-40 mins",
      menus: [
        { id: 1, name: "Crunchy Taco", description: "Crispy taco with beef and cheese", price: 1.99, icon: "🌮", rating: 4.6 },
        { id: 2, name: "Quesadilla", description: "Grilled tortilla with filling", price: 5.99, icon: "🥙", rating: 4.7 },
        { id: 3, name: "Burrito Supreme", description: "Large burrito with all toppings", price: 8.99, icon: "🌯", rating: 4.8 },
      ],
    },
  ];

  const handleOrderNow = (menuItem: MenuItem) => {
    setSelectedMenuItem(menuItem);
    setShowCheckout(true);
  };

  const handleCompleteOrder = () => {
    alert(
      `Order placed for ${selectedMenuItem?.name}! Quantity: ${quantity}\nFrom: ${selectedRestaurant?.name}\nDelivery to: ${deliveryAddress}`,
    );
    setShowCheckout(false);
    setShowRestaurantModal(false);
    setSelectedMenuItem(null);
    setSelectedRestaurant(null);
    setQuantity(1);
    setDeliveryAddress("");
  };

  return (
    <div className="bg-white py-16 px-20">
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
              onClick={() => {
                setSelectedRestaurant(restaurant);
                setShowRestaurantModal(true);
              }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 duration-200"
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

      {/* Restaurant Details Modal */}
      {showRestaurantModal && selectedRestaurant && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto shadow-2xl">
            {/* Header with Restaurant Image */}
            <div className="relative h-64 bg-gray-300 overflow-hidden">
              <Image
                src={selectedRestaurant.image}
                alt={selectedRestaurant.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setShowRestaurantModal(false)}
                className="absolute top-4 right-4 bg-white hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors shadow-lg"
              >
                ×
              </button>
              {/* Restaurant Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold">{selectedRestaurant.name}</h2>
                    <p className="text-lg mt-2">{selectedRestaurant.cuisineType}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">⭐</span>
                      <span className="text-2xl font-bold">{selectedRestaurant.rating}</span>
                    </div>
                    <p className="text-sm">{selectedRestaurant.deliveryTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Info Bar */}
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedRestaurant.logo}</span>
                  <span className="text-gray-700 font-semibold">{selectedRestaurant.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🏷️</span>
                  <span className="font-bold text-orange-500">{selectedRestaurant.discount}% OFF</span>
                </div>
                {selectedRestaurant.fastDelivery && (
                  <div className="flex items-center gap-2">
                    <span className="text-xl">⚡</span>
                    <span className="text-gray-700 font-semibold">Fast Delivery</span>
                  </div>
                )}
              </div>

              {/* Menu Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Menu</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedRestaurant.menus?.map((menu) => (
                    <div
                      key={menu.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl">{menu.icon}</span>
                            <h4 className="font-bold text-gray-800 text-lg">
                              {menu.name}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            {menu.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-400">⭐</span>
                              <span className="text-sm font-semibold text-gray-700">
                                {menu.rating}
                              </span>
                            </div>
                            <span className="text-lg font-bold text-gray-800">
                              ${menu.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleOrderNow(menu)}
                        className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition-colors"
                      >
                        Order Now
                      </button>
                    </div>
                  ))}
                </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

      {/* Checkout Modal */}
      {showCheckout && selectedMenuItem && selectedRestaurant && (
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
                      {selectedMenuItem.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      From: {selectedRestaurant.name}
                    </p>
                    {selectedMenuItem.description && (
                      <p className="text-xs text-gray-500 mt-2">
                        {selectedMenuItem.description}
                      </p>
                    )}
                  </div>
                  <p className="text-lg font-bold text-gray-800">
                    ${selectedMenuItem.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4">
                  <label className="text-gray-700 font-semibold">Quantity:</label>
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
                  <span>
                    $
                    {(selectedMenuItem.price * quantity).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Fee:</span>
                  <span>$2.00</span>
                </div>
                {selectedRestaurant.discount && (
                  <div className="flex justify-between text-gray-700">
                    <span>Discount ({selectedRestaurant.discount}%):</span>
                    <span className="text-green-600">
                      -$
                      {(
                        (selectedMenuItem.price *
                          quantity *
                          selectedRestaurant.discount) /
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
                      selectedMenuItem.price * quantity +
                      2 -
                      ((selectedRestaurant.discount || 0) *
                        selectedMenuItem.price *
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
        )}
      
