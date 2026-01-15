import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrease() {
    setCount((c) => c + 1);
  }
  function handleDecrease() {
    setCount((c) => c - 1);
  }
  return (
    <div className="mt">
      <button className="mr" onClick={handleIncrease}>
        +
      </button>
      <span>Count : {count}</span>
      <button className="ml" onClick={handleDecrease}>
        -
      </button>
    </div>
  );
}
