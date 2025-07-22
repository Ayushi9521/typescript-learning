import { useState } from "react";
import EvenOdd from "./components/evenOdd";

function App() {
  const [count, setCount] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
    setShowResult(false); // Hide result on input change
  };

  const handleClick = () => {
    setShowResult(true);
  };
  return (
    <>
      <h1>Even Number calculator</h1>
      <input
        type="number"
        placeholder="Enter Number to check"
        value={count}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleClick}>
        Check Value
      </button>

      {showResult && <EvenOdd num={count} />}
    </>
  );
}

export default App;
