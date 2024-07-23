import { useState } from "react";

function Increment() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Click Me</button>
    </>
  );
}

export default Increment;
