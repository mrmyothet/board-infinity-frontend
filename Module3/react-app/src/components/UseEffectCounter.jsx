import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");

    const handleClick = () => setCount((c) => c + 1);
    document.addEventListener("click", handleClick);

    return () => {
      console.log("Component unmounted");
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    console.log("Count updated");
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>React useEffect</h1>
      <p>Count : {count}</p>
      <button>Increment</button>
    </div>
  );
}

export default UseEffectCounter;
