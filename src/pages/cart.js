import React from "react";
import CartComponent from "../components/cart-component/cart-component";
import Navigation from "../components/navigation/navigation";

const Cart = () => {
  return (
    <>
      <Navigation />
      <div className="fadeIn">
        <CartComponent />
      </div>
    </>
  );
};

export default Cart;
