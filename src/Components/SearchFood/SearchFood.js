import React, { createRef } from "react";

import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

const SearchFood = (props) => {
  const inputSearchRef = createRef();

  const clickSearchForm = (e) => {
    e.preventDefault();
    props.getData(inputSearchRef.current.value);
  };

  return (
    <>
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
    </>
  );
};

export default SearchFood;
