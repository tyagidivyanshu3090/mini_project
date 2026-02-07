import { useState } from "react";
import Button from "./component/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    if (count === 0) return;
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter Application</h1>
      <p> Count: {count}</p>

      <Button onClick={() => setCount(count + 1)} color="green">
        ➕ Increment
      </Button>
      <Button onClick={decrement} color="red">
        ➖ Decrement
      </Button>
      <Button onClick={() => setCount(0)} color="blue">
        🔄 Reset
      </Button>

    </>
  );
}

export default App;
