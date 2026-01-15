import "./App.css";
import Counter from "./components/Counter";
import Step from "./components/Step";

function App() {
  const today = new Date().toUTCString();
  return (
    <div>
      <Counter />
      <Step />
      <p>{today}</p>
    </div>
  );
}

export default App;
