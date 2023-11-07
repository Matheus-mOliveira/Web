import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaProduto from "./pages/TelaProduto";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <Router>
      <body className={darkMode ? "dark-mode" : "light-mode"}>
        <button onClick={handleToggleDarkMode}>
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/produtos/:id" element={<TelaProduto />} />
        </Routes>
      </body>
    </Router>
  );
}
export default App;
