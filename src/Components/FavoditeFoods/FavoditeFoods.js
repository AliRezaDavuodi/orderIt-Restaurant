import React from "react";

import FoodItem from "../FoodItem/FoodItem";
import List from "../List/List";

import css from "./FavoditeFoods.module.scss";

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

const favoditeFoods = DUMMY__DATA.map((food) => (
  <FoodItem
    id={food.id}
    title={food.title}
    description={food.description}
    key={food.id}
    img={food.image}
    price={food.price}
  />
));

const FavoditeFoods = () => {
  return (
    <section>
      <h2 className={css.title}> Foods You Like Them </h2>
      <List>{favoditeFoods}</List>
    </section>
  );
};

export default FavoditeFoods;
