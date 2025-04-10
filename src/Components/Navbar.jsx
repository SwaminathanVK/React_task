import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

function Navbar() {
  const { cartItems, totalAmount } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between relative">
      <h1 className="text-2xl font-bold mb-2 sm:mb-0">B-17 Store</h1>

      <div className="flex gap-6 items-center">
        <a href="#Home" className="text-xl hover:underline">Home</a>
        <a href="#Search" className="text-xl hover:underline">Search</a>
        <p className="text-xl">Total: ${totalAmount.toFixed(2)}</p>
        <button
          onClick={toggleCart}
          className="relative text-xl focus:outline-none"
        >
          🛒 Cart ({cartItems.length})
        </button>
      </div>

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className="absolute right-4 top-20 bg-white text-black rounded-md shadow-lg w-80 max-h-96 overflow-y-auto z-50 p-4">
          <h2 className="text-lg font-semibold mb-2">Cart Items</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-3">
              {cartItems.map((item) => (
                <li key={item.id} className="border-b pb-2">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.title} className="w-10 h-10 object-contain" />
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
