import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Greeting name="Alice" />
      <Greeting name="John" />
    </div>
  );
}

export default App;
