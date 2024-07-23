import { useState } from "react";

function Increment() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>React setState</h1>
      <h3>Count : {count}</h3>
      <button onClick={increment}>Click Me</button>
    </>
  );
}

export default Increment;
