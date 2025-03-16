import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "./constants/actionType";
import { handle_decrement, handle_increment } from "./actions/counterActions";

function App() {
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const increament = (counte) => {
    return () => dispatch(handle_increment(counte));
  };
  const decrement = (counte) => {
    return () => dispatch(handle_decrement(counte));
  };

  return (
    <div>
      <button onClick={increament(1)}>+</button>
      <button onClick={increament(20)}>+ 20</button>
      <h1>San:{count}</h1>
      <button onClick={decrement(1)}>-</button>
      <button onClick={decrement(20)}>- 20</button>
    </div>
  );
}

export default App;
