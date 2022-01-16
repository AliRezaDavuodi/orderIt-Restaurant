import React from "react";

import css from "./Hero.module.scss";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <header className={css.header}>
      <div className={css.title}>
        <h1> ORDER IT </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, nibh quis posuere tincidunt, quam nunc pulvinar tortor,
          vitae placerat ligula nunc aliquet tortor.
        </p>
      </div>

      <HeroButton>Let's Order </HeroButton>
    </header>
  );
};

export default Hero;
