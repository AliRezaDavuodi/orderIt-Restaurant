import React from "react";
import CartComponent from "../Components/CartComponent/CartComponent";
import Navigation from "../Components/Navigation/Navigation";

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
