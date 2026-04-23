import { useState } from "react";
import "./App.css";
import Timer from "./timer"; // Import your new component

function App() {
  const [count, counter] = useState(0);

  return (
    <div className="App">
      {/* Counter Section */}
      <section>
        <h1>Count: {count}</h1>
        <button onClick={() => counter(count + 1)}>Increment</button>
        <button onClick={() => counter(count - 1)}>Decrement</button>
        <button onClick={() => counter(0)}>Reset Counter</button>
      </section>

      <hr />

      {/* Timer Section - Now neatly tucked away */}
      <Timer /> 
    </div>
  );
}

export default App;