import { useState } from "react";
import "./styles.css";

export function App() {
  const [counter, setCounter] = useState(1);

  return (
    <div className="myContainer">
      <h2>Counter </h2>
      <span className="counter-value">{counter}</span>
      <div className="button-class">
        <button
          style={{ backgroundColor: "red" }}
          className="custom-btn"
          onClick={() => setCounter(counter - 1)}
        >
          Decrement
        </button>
        <button className="custom-btn" onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
      </div>
      <button
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "25px",
          backgroundColor: "lightskyblue",
        }}
        onClick={() => setCounter(1)}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
