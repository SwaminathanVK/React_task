import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function UserList({ user }) {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <>
    <div >
      <img src={user.image} className="w-full h-48 object-contain" />
      <li className="text-lg font-semibold">{user.title}</li>
      <li className="text-black-600 font-bold mt-2">${user.price}</li>

      <button
        onClick={() => addToCart(user)}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add</button>

      <button
        onClick={() => removeFromCart(user.id)}
        className="mt-3 ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700">Remove</button>
    </div>
    </>
  );
}

export default UserList;
