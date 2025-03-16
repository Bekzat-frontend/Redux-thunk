import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "./constants/actionType";
import { handle_decrement, handle_increment } from "./actions/counterActions";

function App() {
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const increament = () => {
    return dispatch(handle_increment);
  };
  const decrement = () => {
    return dispatch(handle_decrement);
  };

  return (
    <div>
      <button onClick={increament(1)}>+</button>
      <h1>San:{count}</h1>
      <button onClick={decrement(1)}>-</button>
      <hr />
      <button onClick={increament(18)}>+</button>
      <h1>San:{count}</h1>
      <button onClick={decrement(18)}>-</button>
    </div>
  );
}

export default App;
