import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(8);

  // let counter = 8;

  const addValues = () => {
    console.log("hello");
    setCounter(counter + 1);

    if (counter == 20) {
      ;
    }
  };

  const removeValues = () => {
    console.log("hello");
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Hello Ruta</h1>
      <h3>Counter values: {counter}</h3>

      <button onClick={addValues}>Add Values</button>
      <br />
      <button onClick={removeValues}>Remove Values</button>
    </>
  );
}

export default App;
