import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(3);

  // let counter = 15;

  const addValue = () => {
    console.log("value added", counter);
    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
