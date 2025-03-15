import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const increament = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <button onClick={increament}>+</button>
      <h1>San:{count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
