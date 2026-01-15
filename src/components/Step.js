import { useState } from "react";

export default function Step() {
  const [step, setStep] = useState(0);
  function handleIncrease() {
    setStep((s) => s + 1);
  }
  function handleDecrease() {
    setStep((s) => s - 1);
  }
  return (
    <div className="mt">
      <button className="mr" onClick={handleIncrease}>
        +
      </button>
      <span>Step : {step}</span>
      <button className="ml" onClick={handleDecrease}>
        -
      </button>
    </div>
  );
}
