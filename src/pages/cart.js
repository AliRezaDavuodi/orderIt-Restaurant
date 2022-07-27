import React from "react";
import { MetaTags } from "react-meta-tags"
import CartComponent from "../components/cart-component/cart-component"
import Navigation from "../components/navigation/navigation"

const Cart = () => {
  return (
    <>
      <MetaTags>
        <title> Order It | Cart </title>
      </MetaTags>
      <Navigation />
      <div className="fadeIn">
        <CartComponent />
      </div>
    </>
  )
}

export default Cart;
