import React from "react";
import Button from "../Button/Button";

import Form from "../Form/Form";

import css from "./CommentForm.module.scss";

const CommentForm = () => {
  return (
    <Form center>
      <textarea className={css.area} />
      <Button> add </Button>
    </Form>
  );
};

export default CommentForm;
