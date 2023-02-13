import React from "react";
import useStore from "../../../utils/store2";

function Counter() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const decreasePopulation = useStore((state) => state.decreasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);

  return (
    <>
      <h1>{bears}</h1>
      <button onClick={increasePopulation}>Increase Bear No</button>
      <button onClick={decreasePopulation}>Decrease Bear No</button>
      <button onClick={removeAllBears}>Remove all No</button>
    </>
  );
}

export default Counter;
