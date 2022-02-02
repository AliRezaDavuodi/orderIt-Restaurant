import React, { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { firebaseRealDataBase } from "../../Hooks/http-request/urls";
import useHttpRequest from "../../Hooks/http-request/use-http";

import Comments from "../Comments/Comments";

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
  const { foodID } = useParams();

  const { request: gettingComments, loading, data } = useHttpRequest();

  useEffect(() => {
    const getComments = (comments) => {
      if (!comments) return;

      const allComments = [];

      for (const key in comments) {
        const commentObj = {
          id: key,
          ...comments[key],
        };
        allComments.push(commentObj);
      }

      return allComments;
    };

    gettingComments(
      { url: `${firebaseRealDataBase}/comment/${foodID}.json` },
      getComments
    );
  }, [gettingComments, foodID]);

  return (
    <div className={css.comments}>
      <ul>
        {COMMENTS.map((comment) => (
          <Comments comment={comment} key={comment.id} />
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
