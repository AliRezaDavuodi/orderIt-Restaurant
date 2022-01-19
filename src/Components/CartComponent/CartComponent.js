import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";

import List from "../List/List";

import css from "./CartComponent.module.scss";

const DUMMY__DATA = [
  {
    id: 716429,
    title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    description:
      "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
    price: "$25.0",
  },
  {
    id: 716429,
    title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    description:
      "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
    price: "$25.0",
  },
  {
    id: 716429,
    title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    description:
      "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
    price: "$25.0",
  },
  {
    id: 716429,
    title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    description:
      "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
    price: "$25.0",
  },
  {
    id: 716429,
    title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    description:
      "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
    price: "$25.0",
  },
];

const CartComponent = () => {
  return (
    <section className={css.cart}>
      <Card className={`container ${css.pay}`}>
        <div className={css.cartTitlte}>
          <h2> My Cart </h2>
          <span> $125 </span>
        </div>
        <List foods={DUMMY__DATA} cart />
        <Card className={`btnCard ${css.cartFooter}`}>
          <Button full> checkOut </Button>
        </Card>
      </Card>
    </section>
  );
};

export default CartComponent;
