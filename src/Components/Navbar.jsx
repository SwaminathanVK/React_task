import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Navbar() {
  const { cartItems , totalAmount } = useContext(CartContext);

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">B-17 Store</h1>
      <a href="#Home"><p className="text-xl">Home</p></a>
      <a href="#Search"><p className="text-xl">Search</p></a>
      <p className="text-xl">Total: ${totalAmount.toFixed(2)}</p>
      <div className="text-lg">🛒 Cart ({cartItems.length})</div>
    </div>
  );
}

export default Navbar;
