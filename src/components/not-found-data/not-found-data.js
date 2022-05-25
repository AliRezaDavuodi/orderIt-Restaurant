import React from "react";

import notFound from "../../assets/notFound.svg";

import css from "./not-found-data.module.scss";

const NotFoundData = (props) => {
  return (
    <section className={css.notFound}>
      <div className={css.img}>
        <img src={notFound} alt="NOT Found" />
      </div>
      <h2 className="title"> {props.children} </h2>
    </section>
  );
};

export default NotFoundData;
