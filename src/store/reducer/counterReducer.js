import { createStore } from "redux";
const initial = {
  counter: 0,
};

export const counterReducer = (state = initial, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return state.counter > 0 ? { counter: state.counter - 1 } : state;
    default:
      return state;
  }
};
