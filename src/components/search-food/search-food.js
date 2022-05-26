import React, { createRef } from "react";

import Button from "../button/button";
import Form from "../form/form";
import Input from "../input/input";

const SearchFood = (props) => {
  // destructuring
  const {getData} = props

  const inputSearchRef = createRef();

  const clickSearchForm = (e) => {
    e.preventDefault();
    getData(inputSearchRef.current.value.toLowerCase());
  };

  return (
      <Form>
        <Input
          placeholder="what do you want"
          label="what do you want"
          id="search"
          ref={inputSearchRef}
        />
        <Button searchbtn="true" onClick={clickSearchForm}>
          Search
        </Button>
      </Form>
  );
};

export default SearchFood;
