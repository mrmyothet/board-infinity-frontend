import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Increment from "./components/Increment";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Greeting name="Alice" />
      <Greeting name="John" />
      <Counter />
      <Increment />
    </div>
  );
}

export default App;
