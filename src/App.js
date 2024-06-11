import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import "./App.css";
import "./index2.css";
import "./DarkmodeToggle.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <Header />
        <div className="container mt-4" sticky="top">
          <button onClick={toggleDarkMode} className="btn btn-toggle">
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/skills" Component={Skills} />
          <Route path="/resume" Component={Resume} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
