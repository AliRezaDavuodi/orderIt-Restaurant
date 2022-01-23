import { useReducer } from "react";

const reducerFunction = (state, action) => {
  if (action.type === "TOUCH") return { ...state, IsTouched: action.do };
  else if (action.type === "VALUE")
    return { ...state, enteredValue: action.do };
  else {
    return { ...state };
  }
};

const INITIAL__STATE = {
  enteredValue: "",
  IsTouched: false,
};

const useInput = (validateLogic) => {
  const [state, dispatch] = useReducer(reducerFunction, INITIAL__STATE);

  const inputIsValid = validateLogic(state.enteredValue);
  const hasErr = !inputIsValid && state.IsTouched;
  const formIsValid = !hasErr && inputIsValid;

  const inputChangeHandler = (e) => {
    dispatch({ type: "TOUCH", do: true });
    dispatch({ type: "VALUE", do: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "TOUCH", do: true });
  };

  const reset = () => {
    dispatch({ type: "TOUCH", do: false });
    dispatch({ type: "VALUE", do: "" });
  };

  const { enteredValue } = state;

  return {
    enteredValue,
    hasErr,
    inputBlurHandler,
    inputChangeHandler,
    reset,
    formIsValid,
  };
};

export default useInput;
