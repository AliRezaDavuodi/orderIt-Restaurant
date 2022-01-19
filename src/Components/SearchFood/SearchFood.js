import React from "react";

import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

const SearchFood = () => {
  return (
    <Form>
      <Input
        placeholder="what do you want"
        label="what do you want"
        id="search"
      />
      <Button searchbtn="true">Search</Button>
    </Form>
  );
};

export default SearchFood;
