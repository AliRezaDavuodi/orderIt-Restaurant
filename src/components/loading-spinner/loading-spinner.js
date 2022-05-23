import React from "react";

import css from "./loading-spinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={css.box}>
      <div className={css.container}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
