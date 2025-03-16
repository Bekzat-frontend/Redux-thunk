import { DECREMENT, INCREMENT } from "../constants/actionType";

export const handle_increment = (payload) => {
  return { type: INCREMENT, payload: payload };
};
export const handle_decrement = (payload) => {
  return { type: DECREMENT, payload: payload };
};
