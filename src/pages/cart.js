import React from "react";
import { MetaTags } from "react-meta-tags"
import CartComponent from "../components/cart-component/cart-component"

const Cart = () => {
  return (
    <>
      <MetaTags>
        <title> Order It | Cart </title>
      </MetaTags>
      <div className="fadeIn">
        <CartComponent />
      </div>
    </>
  )
}

export default Cart;
