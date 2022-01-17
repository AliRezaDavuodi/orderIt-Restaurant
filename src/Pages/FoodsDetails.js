import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const FoodsDetails = () => {
  const params = useParams();

  return (
    <div className="fadeIn">
      this will render each foods details = {params.foodID}
    </div>
  );
};

export default FoodsDetails;
