import React from "react";
import Navbar from "./Components/Navbar";
import UseEffectReal from "./Components/UseEffectReal";
import { CartProvider } from "./Components/CartContext";

function App() {
 

  return (
    <>
      <div>
      <CartProvider>
      <Navbar/>
      <UseEffectReal/>
      
      </CartProvider> 
    
     

        
      </div>
    </>
  )
}

export default App
