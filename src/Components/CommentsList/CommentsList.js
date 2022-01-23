import React from "react";

import Comments from "../Comments/Comments";
import Card from "../Card/Card";

import css from "./CommentsList.module.scss";

const COMMENTS = [
  {
    name: "AliReza Davuodi",
    date: "17 nov",
    comment:
      "this is the best this is the best this is the best this is the best this is the best this is the best this is the best this is the best this is the best this is the best this is the best ",
    id: "1",
  },
  {
    name: "AliReza Davuodi",
    date: "17 nov",
    comment: "this is the best",
    id: "2",
  },
  {
    name: "AliReza Davuodi",
    date: "17 nov",
    comment: "this is the best",
    id: "3",
  },
  {
    name: "AliReza Davuodi",
    date: "17 nov",
    comment: "this is the best",
    id: "4",
  },
];

const CommentsList = () => {
  return (
    <Card className="full">
      <div className={css.comments}>
        <ul>
          {COMMENTS.map((comment) => (
            <Comments comment={comment} key={comment.id} />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default CommentsList;
