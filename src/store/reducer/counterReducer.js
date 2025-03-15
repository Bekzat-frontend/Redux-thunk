import { createStore } from "redux";
const initial = {
  counter: 0,
};

export const counterReducer = (state = initial, acton) => {
  switch (acton.type) {
    case "increament":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
