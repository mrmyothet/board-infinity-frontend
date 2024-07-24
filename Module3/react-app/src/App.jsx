import React, { useContext } from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Increment from "./components/Increment";
import UseEffectCounter from "./components/UseEffectCounter";
import Posts from "./components/Posts";

const ThemeContext = React.createContext("light");

function Header() {
  const theme = useContext(ThemeContext);

  return (
    <header
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>My Website Header</h1>
    </header>
  );
}

function Main() {
  const theme = useContext(ThemeContext);

  return (
    <main
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h3>Main Content of the site</h3>
    </main>
  );
}

function Footer() {
  const theme = useContext(ThemeContext);

  return (
    <footer
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h5>COPYRIGHT @ 2024 - SOLID PLM TECHNOLOGIES COMPANY LIMITED</h5>
    </footer>
  );
}

function App() {
  return (
    <div>
      <ThemeContext.Provider value="dark">
        <Header />
        <Main />
        <Footer />
        <Greeting name="Alice" />
        <Greeting name="John" />
        <Counter />
        <Increment />
        <UseEffectCounter />
        <Posts />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
