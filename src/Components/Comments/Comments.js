import React from "react";

import css from "./Comments.module.scss";

import alireza from "../../assests/alireza.jpg";

const Comments = (props) => {
  return (
    <li className={css["commetn-item"]}>
      <div className={css.profile}>
        <div className={css["comment-profile"]}>
          <img src={alireza} alt="alireza" />
        </div>
        <div>
          <h3> {props.comment.name} </h3>
          <span> {props.comment.date} </span>
        </div>
      </div>
      <div className={css.comment}>{props.comment.comment}</div>
    </li>
  );
};

export default Comments;
