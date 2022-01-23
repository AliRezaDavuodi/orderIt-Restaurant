import React from "react";

import Button from "../Button/Button";
import Form from "../Form/Form";
import Card from "../Card/Card";

import css from "./CommentForm.module.scss";

const CommentForm = () => {
  return (
    <Card className="full">
      <Form center>
        <textarea className={css.area} />
        <Button> add </Button>
      </Form>
    </Card>
  );
};

export default CommentForm;
