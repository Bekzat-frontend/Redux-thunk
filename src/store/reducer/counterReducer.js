import { createStore } from "redux";
import { DECREMENT, INCREMENT } from "../../constants/actionType";
const initial = {
  counter: 0,
};

export const counterReducer = (state = initial, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + payload.payload };
    case DECREMENT:
      return state.counter > 0
        ? { counter: state.counter - payload.payload }
        : state;
    default:
      return state;
  }
};
