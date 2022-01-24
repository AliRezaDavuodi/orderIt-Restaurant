import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import Card from "../Card/Card";

import List from "../List/List";

import css from "./CartComponent.module.scss";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cart.foods);

  return (
    <Card className="full">
      <Card className={`container ${css.pay}`}>
        <div className={css.cartTitlte}>
          <h2>5 items</h2>
          <span> $125 </span>
        </div>
        <List foods={cartItems} cart="true" />
        <Card className={`btnCard ${css.cartFooter}`}>
          <Button full="true"> checkOut </Button>
        </Card>
      </Card>
    </Card>
  );
};

export default CartComponent;
